"use server"
import { streamText } from "ai"
import {GoogleGenerativeAI} from "@google/generative-ai"
import {google} from "@ai-sdk/google"
import {ollama} from "ollama-ai-provider"
export async function POST(req: Request, res: Response) {
    const {messages}  =await req.json();
    const model = ollama("llama3")
    const streamingResponse = streamText({
        model,
        messages, 
    })
    return streamingResponse.toDataStreamResponse()
}