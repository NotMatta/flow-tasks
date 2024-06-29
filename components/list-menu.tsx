import { X } from "lucide-react"

type props = {
    show: boolean,
    setShow: (v:boolean) => void
}

const ListMenu = ({show, setShow} : props) => {
    return (
        <div className={(show? "" : "-translate-x-full") +" duration-200 absolute top-0 bg-background md:translate-x-0 left-0 w-full h-full md:w-1/5 md:static"}>
            <div className="flex justify-between w-full box-border p-2">
                <h2>Lists</h2>
                <button className="md:hidden" onClick={() => setShow(false)}><X/></button>
            </div>

        </div>
    )
}

export default ListMenu
