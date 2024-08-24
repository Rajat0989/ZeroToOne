import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { TemplateEnum } from "@/lib/prompt-by-template";
import { generate } from "@/lib/generate";

const chat = new ChatGoogleGenerativeAI({
    temperature: 0,
    model: 'gemini-1.5-pro',
    apiKey: process.env.GEMINI_API_KEY
});

export async function POST(request: NextRequest){
    const reqBody = await request.json();
    const {input, selectedTemplate = TemplateEnum.FLOWCHART} = reqBody;

    if(!input){
        return NextResponse.json({error: "Input is required"}, {status: 400});
    }

    try{
        const ans = await generate({input, selectedTemplate});

        const text = ans.text
        .replaceAll("```", "")
        .replaceAll(`"`, `'`)
        .replaceAll(`end[End]`, `ends[End]`)
        .replace("mermaid", "");

        return NextResponse.json({text});
    }
    catch(e:any){
        console.error(e);
        return NextResponse.json({error: e.message}, {status: 500});
    }
}