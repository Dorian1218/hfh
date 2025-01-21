"use client"

import React from 'react'
import { useAuth } from "@/context/AuthContext"
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function page() {
    const { user } = useAuth()
    return (
        <div className='p-5 flex flex-col items-center justify-center h-screen'>
            <Card className="w-1/3">
                <CardHeader>
                    <CardTitle className="text-2xl">Let's get started</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex space-x-2'>
                        <Input placeholder="First Name" className="mb-2" />
                        <Input placeholder="Last Name" className="mb-2" />
                    </div>
                    <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Level of Education" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Secondary/Highschool">Secondary/Highschool</SelectItem>
                                <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                                <SelectItem value="Graduate">Graduate</SelectItem>
                            </SelectContent>
                        </Select>
                </CardContent>
            </Card>
        </div>
    )
}
