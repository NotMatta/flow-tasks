import { Plus, X } from "lucide-react"

type props = {
    show: boolean,
    setShow: (v:boolean) => void
}

const ListMenu = ({show, setShow} : props) => {
    return (
        <div className={(show? "" : "-translate-x-full") +" duration-200 absolute box-border p-2 top-0 bg-background md:translate-x-0 left-0 w-full h-sceeen max-h-screen flex-flex-col overflow-y-scroll justify-between md:w-1/5 md:static"}>
            <div className="sticky top-0 bg-background flex justify-between w-full mb-4">
                <h2 className="font-bold">Lists</h2>
                <button className="md:hidden" onClick={() => setShow(false)}><X/></button>
            </div>
            <div className="flex flex-col gap-2 overflow-hidden">
                <div className="flex flex-col gap-1">
                    <div className="hover:bg-foreground hover:text-background bg-border rounded-xl box-border p-2">yee</div>
                    {["","","","","","",""].map((_el:any,i:number) => {
                        return (
                            <div className="hover:bg-foreground hover:text-background rounded-xl box-border p-2" key={i}>yee</div>
                        )
                    })}
                </div>
                <hr/>
                <button className="text-border flex gap-2"><Plus/> Add a new list..</button>
            </div>
        </div>
    )
}

export default ListMenu
