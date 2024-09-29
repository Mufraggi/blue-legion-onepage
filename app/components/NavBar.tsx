import Image from "next/image";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";

export function NavBar() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Image src="/logos/logo.webp" alt="Blue Legion Logo" width={100}
                       height={50}/>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                        <li><a href="#schedule" className="hover:underline">Schedule</a></li>
                        <li><a href="#shop" className="hover:underline">Shop</a></li>
                        <li><a href="#faq" className="hover:underline">FAQ</a></li>
                        <li><a href="#partners" className="hover:underline">Partners</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col space-y-4">
                            <a href="#about" className="hover:underline">About</a>
                            <a href="#gallery" className="hover:underline">Gallery</a>
                            <a href="#schedule" className="hover:underline">Schedule</a>
                            <a href="#shop" className="hover:underline">Shop</a>
                            <a href="#faq" className="hover:underline">FAQ</a>
                            <a href="#partners" className="hover:underline">Partners</a>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}