"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from '@/components/ui/input'
import { useAuth } from "@/context/AuthContext"
import React, { useState } from 'react'
import { useRouter } from "next/navigation"

export default function page() {
    const router = useRouter()
    const {signup, user, logout, login} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignUp = () => { 
        login(email, password).then(() => {
            console.log("logged in")
        })
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen py-2 w-screen">
            <Card className="w-1/3">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}className="mb-2"/>
                    <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}type="password" className="mb-2"/>
                    <Button className="w-full bg-blue-600 hover:bg-blue-800" onClick={handleSignUp}>Login</Button>
                </CardContent>
            </Card>
        </div>
    )
}
