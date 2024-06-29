import { CalendarSearch, Menu } from "lucide-react"
import Link from "next/link"
import AccountButton from "./pfp-drop-menu"

type props = {
    toggleMenu: (v:boolean) => void
}

const TopBar = ({toggleMenu} : props) => {
    return (
        <div className="md:absolute top-0 right-0 w-full flex justify-between md:justify-end gap-2 box-border p-2">
            <button
                onClick={() => toggleMenu(true)}
                className="aspect-square w-12 duration-200 rounded-full md:hidden flex justify-center items-center">
                <Menu/> 
            </button>
            <div className="flex gap-2">
                <Link href="/main/search"
                      className="aspect-square w-12 border hover:text-background hover:border-none hover:bg-foreground duration-200 rounded-full flex justify-center items-center">
                    <CalendarSearch/> 
                </Link>
                <AccountButton/>
            </div>
        </div>
    )
}

export default TopBar
