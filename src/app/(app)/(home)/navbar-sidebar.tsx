import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="transition-none p-0">
                <SheetHeader className="p-4 border-b">

                    <SheetTitle>
                        Menu
                    </SheetTitle>

                </SheetHeader>
                <ScrollArea className="flex flex-col h-full overflow-y-auto pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={() => onOpenChange(false)}
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div>
                        <Link href="/login" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium "
                            onClick={() => onOpenChange(false)}>
                            Login
                        </Link>
                        <Link href="/signup" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={() => onOpenChange(false)}
                        >
                            SignUp
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>

        </Sheet>
    )
};