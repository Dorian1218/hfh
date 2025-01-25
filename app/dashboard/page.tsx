"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChat } from 'ai/react';

export default function Page() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/genai'
    });
    return (
        <div className='h-screen flex justify-center p-5 items-center flex-col w-3/4'>
            <div className='flex flex-col'>
                {messages.map(message => (
                    <div key={message.id}>
                        {message.role === 'user' ? 'User: ' : 'AI: '}
                        {message.content}
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-4 w-full mt-auto">
                <Input name="prompt" value={input} onChange={handleInputChange} />
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}