import { Checkbox } from "@/components/ui/checkbox"
import { Trash } from "lucide-react"

const ListPage = () => {
    return (
        <div className="p-2 flex flex-col gap-3">
            <h2 className="font-bold">List Title here..</h2>
            <div className="flex justify-between w-full">
                <h3>Tasks:</h3>
                <div className="flex gap-2">
                    <button className="bg-accent rounded-xl p-2 px-4">Sort</button>
                    <button className="bg-accent rounded-xl p-2">Order</button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="border rounded-xl flex items-center justify-between p-2">
                    <div className="flex items-center gap-2 w-1/2 overflow-hidden">
                        <Checkbox/>
                        <label className="w-full">Some random ahh task</label>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-accent border rounded-xl p-2">priority</div>
                        <div className="bg-accent border rounded-xl p-2">Due date</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListPage
