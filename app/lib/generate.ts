import { PromptTemplate } from "@langchain/core/prompts"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

export const generate = async ({ input, selectedTemplate }: any) => {
    try{
        const model = new ChatGoogleGenerativeAI({
            model: 'gemini-pro',
            apiKey: process.env.GEMINI_API_KEY,
            temperature: 0.9,
        });
        const template = 
        "{syntax} - {instructions} learn from syntax above and write {template} in mermaid syntax about {input}?";
        const prompt = new PromptTemplate({
            template,
            inputVariables: ["template", "input", "syntax", "instructions"],
        });

        const chain = prompt.pipe(model);

        //@ts-ignore
        const synataxDoc = await import(
            `./syntax/${selectedTemplate.toLowerCase()}.md`
        );

        const res = await chain.invoke({
            template: selectedTemplate,
            input: input,
            syntax: synataxDoc.default,
            instructions: `
            - use different shapes, colors and also use icons when possible as mentioned in the doc.
            - strict rules: do not add Note and do not explain the code and do not add any additional text except code, 
            - do not use 'end' syntax
            - do not use any parenthesis inside block
            `,
        });

        return res
    }catch(error){
        console.log(error);
        throw error;
    }
}