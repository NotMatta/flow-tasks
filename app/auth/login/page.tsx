import { Key, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Login = () => {
    return (
        <form className="border flex flex-col justify-between h-4/5 md:aspect-square aspect-[3/4] gap-2 rounded-xl box-border p-4">
            <h3 className="font-bold w-full text-center h-1/4">LOGIN</h3>
            <div className="flex items-center gap-2 border p-2 rounded-xl">
                <input className="w-full bg-transparent text-xl focus-visible:outline-none" type="email" placeholder="Email here.."/>
                <Mail/>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-xl">
                <input className="w-full bg-transparent text-xl focus-visible:outline-none" type="password" placeholder="Password here.."/>
                <Key/>
            </div>
            <div className="flex flex-col gap-2 justify-end items-center h-1/4">
               <Button className="w-2/3">Sign in</Button>                 
               <Link href='/auth/register'>Don`t have an account?</Link>
            </div>
        </form>
    )
}

export default Login
