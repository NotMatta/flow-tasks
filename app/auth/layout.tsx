const Layout = ({children} : {children:React.ReactNode}) => {
    return (
        <div className="w-full h-full flex flex-col justify-between gap-2 md:grid md:grid-cols-2 md:grid-rows-6 p-4 box-border">
            <h2 className="col-span-2 font-extrabold flex justify-center md:justify-start items-center">Flow Tasks</h2>
            <div className="hidden md:flex row-span-4 gap-2 flex-col">
                <h1 className="text-3xl md:text-7xl" >Your Goals all in one place</h1>
                <p>Minimal app for tasks management that sets your mind at ease</p>
            </div>
            <div className="row-span-4 flex justify-center col-span-2 md:col-span-1 box-border w-full md:h-full"> 
                {children}
            </div>
            <p className="col-span-2 flex justify-center items-end">All Rights for me lol</p>
        </div>
    )
}

export default Layout
