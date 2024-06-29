"use client"
import ListMenu from "@/components/list-menu"
import TopBar from "@/components/topbar"
import {useState} from "react"

const Layout = ({children}:  {children:React.ReactNode}) => {

    const [showLists,setShowLists] = useState<boolean>(false) 

    return (
        <div className="relative w-full h-full flex flex-col md:flex-row">
            <ListMenu show={showLists} setShow={setShowLists}/>
            <TopBar toggleMenu={setShowLists}/>
            <div className="w-full h-full md:w-5/6 border">
                {children}
            </div>
        </div>
    )
}

export default Layout
