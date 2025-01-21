"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-2">App</h1>
      <div className="flex space-x-4">
        <Button onClick={() => router.push("/signup")}>Login</Button>
        <Button variant="outline" onClick={() => router.push("/signup")}>Signup</Button>
      </div>
    </div>
  );
}
