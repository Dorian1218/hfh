import { AppSidebar } from "@/components/app-sidebar";
import AuthProvider from "../../context/AuthContext"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Layout({ children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProvider>
            <SidebarProvider>
                <AppSidebar />
                {children}
            </SidebarProvider>
        </AuthProvider>
    )
}