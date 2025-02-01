"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-2">ExplainIt</h1>
      <p>Master Any Concept, Simplified by AI. 🚀</p>
      <div className="flex space-x-4 mt-2">
        <Button onClick={() => router.push("/signup")}>Login</Button>
        <Button variant="outline" onClick={() => router.push("/signup")}>Signup</Button>
      </div>
    </div>
  );
}
