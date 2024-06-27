import { Key, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Register = () => {
    return (
        <form className="border flex flex-col justify-between h-full md:aspect-square aspect-[3/4] gap-2 rounded-xl box-border p-4">
            <h3 className="font-bold w-full text-center h-1/4">REGISTER</h3>
            <div className="flex items-center gap-2 border p-2 rounded-xl">
                <input className="w-full bg-transparent text-xl focus-visible:outline-none" type="text" placeholder="Username here.."/>
                <User/>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-xl">
                <input className="w-full bg-transparent text-xl focus-visible:outline-none" type="email" placeholder="Email here.."/>
                <Mail/>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-xl">
                <input className="w-full bg-transparent text-xl focus-visible:outline-none" type="password" placeholder="Password here.."/>
                <Key/>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-xl">
                <input className="w-full bg-transparent text-xl focus-visible:outline-none" type="password" placeholder="Confirm Password here.."/>
                <Key/>
            </div>
            <div className="flex flex-col gap-2 justify-end items-center h-1/4">
               <Button className="w-2/3">Sign up</Button>                 
               <Link href='/auth/login'>Already Got an account?</Link>
            </div>
        </form>
    )
}

export default Register
