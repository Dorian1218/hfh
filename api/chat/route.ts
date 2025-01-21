import { createOllama } from "ollama-ai-provider"

export default async function POST(req: Request) {
    const {messages} = await req.json()
    const ollama = createOllama({})
}