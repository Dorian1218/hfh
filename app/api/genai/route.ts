"use server"
import { streamText } from "ai"
import {GoogleGenerativeAI} from "@google/generative-ai"
import {google} from "@ai-sdk/google"
import {ollama} from "ollama-ai-provider"
export async function POST(req: Request) {
    const {messages}  = await req.json();
    const model = ollama("llama3")
    const streamingResponse = streamText({
        model,
        messages,
        system: 
        "You're an AI that helps students take complex school topics and breaks them down" + 
        "the user will input a subject an a related topic in that subject, and you'll break it down. After you break it down, you'll quiz them on it with 5 MCQs for understanding, and when the user types their responses, then you answer them with right or wrong for each" + 
        "if they prompt something unrelated, return 'This is out of my scope' and do not generate a response" + 
        "if they prompt something inappropriate, return 'I'm sorry, I cannot respond to that' and do not generate a response" + 
        "Structure appropriate responses with a heading + equations if neccessary + key topics with bold heading",
    })
    return streamingResponse.toDataStreamResponse()
}