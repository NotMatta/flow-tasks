"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User } from "lucide-react"


const AccountButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none aspect-square w-12 border rounded-full">
                <img 
                    src="https://i.pinimg.com/736x/74/97/7f/74977f9cc3f2a19053db13d82d4ad13b.jpg"
                    alt="Pfp image"
                    className="object-cover w-full h-full aspect-square rounded-full"
                    />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-2">
                <DropdownMenuLabel className="flex gap-1 items-center text-sm"><User/> Matta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex gap-1 items-center text-sm"><Settings/> Settings</DropdownMenuItem>
                <DropdownMenuItem className="flex gap-1 items-center text-sm"><LogOut/> Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default AccountButton
