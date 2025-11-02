'use client'

import React, {useState} from 'react';
import {Poppins} from "next/font/google";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import NavbarSidebar from "@/app/(home)/navbar-sidebar";
import {MenuIcon} from "lucide-react";

const poppins = Poppins({weight: '700', subsets: ['latin']});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

function NavbarItem({href, children, isActive}: NavbarItemProps) {
    return (
        <Button asChild variant="outline"
                className={cn("bg-transparent hover:bg-transparent hover:border-primary rounded-full border-transparent px-3.5 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white")}>
            <Link href={href} className="flex items-center gap-2">
                {children}
            </Link>

        </Button>
    )
}

const navbarItems = [
    {href: '/', children: 'Home'},
    {href: '/about', children: 'About'},
    {href: '/contact', children: 'Contact'},
    {href: '/features', children: 'Features'},
    {href: '/pricing', children: 'Pricing'},
]

function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <nav className="h-20 flex justify-between border-b font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn('text-5xl font-semibold', poppins.className)}>funroad</span>
            </Link>
            <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
            <div className=" items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>
            <div className="hidden lg:flex">
                <Button asChild variant="secondary"
                        className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg">
                    <Link href="/sign-in">
                        Sign in
                    </Link>
                </Button>
                <Button asChild variant="secondary"
                        className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg">
                    <Link href="/sign-up">
                        Start selling
                    </Link>
                </Button>
            </div>
            <div className="flex lg:hidden items-center justify-center">
                <Button variant="ghost"  onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="size-12 border-transparent bg-white">
                    <MenuIcon className="size-6"/>
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;