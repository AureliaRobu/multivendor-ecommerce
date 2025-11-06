import React from 'react';
import Navbar from "@/app/(app)/(home)/navbar";
import Footer from "@/app/(app)/(home)/footer";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps ) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-1">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;