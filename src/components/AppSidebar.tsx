import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import { CircleUserRound, FileCode, Home } from "lucide-react"
import { Link } from 'react-router';

const AppSidebar: React.FC = () => {

    const items = [
        { title: "Home", to: "/", icon: Home },
        { title: "About", to: "/inbox", icon: CircleUserRound },
        { title: "Projects", to: "/calendar", icon: FileCode },
    ];

    return (
        <Sidebar>
            <SidebarHeader>
                <img src='/logo.svg' alt='logo' />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.to}>
                                            <item.icon className="text-blue-400" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 text-center text-gray-500 text-sm">
                © 2025 My Protfolio
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
