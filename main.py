from fastapi import FastAPI
from github import Github
from pydantic import BaseModel
import uvicorn
from crewai_tools import SerperDevTool, YoutubeVideoSearchTool, WebsiteSearchTool, YoutubeChannelSearchTool, ScrapeWebsiteTool
from langchain_google_genai import ChatGoogleGenerativeAI
from crewai import Agent, Task, Crew, Process

llm = ChatGoogleGenerativeAI(model='gemini-1.5-pro', google_api_key="AIzaSyAL8tUpMNKe8xuJv_R4Jm1EW_Ti7cAdUQs")

app = FastAPI()

class Task(BaseModel):
    description: str

class CodeRequest(BaseModel):
    access_token: str
    repo_name: str

@app.post('/get_code')
async def get_code_ask_question(request_data: CodeRequest):
    # Authenticate with GitHub using the access token
    g = Github(request_data.access_token)

    # Get the repository
    repo = g.get_repo(request_data.repo_name)

    # Get all the files in the repository
    files = repo.get_contents("")

    code_files = []
    for file in files:
        if file.type == "file":
            # Get the code from each file
            code = file.decoded_content.decode("latin-1")
            code_file = {
                "file_name": file.name,
                "file_path": file.path,
                "code": code
            }
            code_files.append(code_file)
    
    print(code_files)

    question = input("Enter your question: ")

    prompt = f"You are the best coder and have a great knowledge about programming. You can analyze large repositories and code bases very easily. User will ask {question} which is based on {code_files}. Your job is to give as accurate an answer as possible to the question."
    qa_agent = Agent(
        role="Code Analyzer agent",
        goal="""To answer user queries on the given code base in the most accurate way possible""",
        backstory=prompt,
        verbose=True,
        llm=llm
    )

    qa_task = Task(
        description=f"Answer user's {question} based on {code_files} as accurately as possible",
        agent=qa_agent,
        expected_output="Accurate answers to user's questions based on code base",
    )

    crew = Crew(
        tasks=[qa_task],
        agents=[qa_agent],
        verbose=True
    )

    result = crew.kickoff()
    result_str = str(result)

    return {'response': result_str}

from crewai import Agent, Task, Crew
from crewai_tools import SerperDevTool

@app.post('/get_everything')
async def get_everything():
    question = input("Enter a question: ")
    question = str(question)

    # Ensure llm is correctly initialized
    if llm is None:
        return {'response': 'LLM not initialized'}

    # Web Search Agent
    web_search_prompt = f"You are the best web search agent in the world. You can get the best possible web search results from every corner of the internet. Your task is to find all the relevant websites which have resources which can help the user accomplish the task: {question}. Give links to each and every resource you mention. The links should be valid. Use the tools that you have to find those links"

    web_search_agent = Agent(
        role='Web Search Agent',
        goal="To search the entire web for resources asked by the user",
        backstory=web_search_prompt,
        verbose=True,
        tool=[SerperDevTool()],
        llm=llm,
        allow_delegation=True
    )

    web_search_task = Task(
        description=f"Search the web for resources related to {question}",
        agent=web_search_agent,
        tool=[SerperDevTool()],
        expected_output="Links for resources from the web relevant to the search queries."
    )

    # Create the Crew
    crew = Crew(
        tasks=[web_search_task],
        agents=[web_search_agent],
        verbose=True
    )

    # Execute the crew's tasks
    result = crew.kickoff()
    result_str = str(result)

    return {'response': result_str}

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)