import React from 'react';
import {Sheet, SheetContent, SheetHeader, SheetTitle,} from "@/components/ui/sheet";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
    children: React.ReactNode;
    href: string;
}

interface NavbarSidebarProps {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

function NavbarSidebar({ items, open, onOpenChange }: NavbarSidebarProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side={'left'} className="p-0 transform-none">
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle>Menu</SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-h-auto h-full pb-2">
                    {items.map((item, index) => (
                       <Link onClick={() => onOpenChange(false)} href={item.href} key={index} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                           {item.children}
                       </Link>
                    ))}
                    <div className="border-t">
                        <Link onClick={() => onOpenChange(false)} href="/sign-in" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                            Sign in
                        </Link>
                        <Link onClick={() => onOpenChange(false)} href="/sign-up" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                            Start selling
                        </Link>
                    </div>

                </ScrollArea>

            </SheetContent>
        </Sheet>
    );
}

export default NavbarSidebar;