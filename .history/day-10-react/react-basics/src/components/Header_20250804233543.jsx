export default function Header(){
    return(
        <header className=" w-full h-auto flex items-center p-6 justify-evenly  bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b border-white/20">
                <h1 className=" text-violet-200 text-4xl">Chaitany Mishra</h1>
                <nav className="mt-6">
                    <ul className=" flex text-violet-200 text-lg gap-6 pb-3">
                        <a>Home</a>
                        <a>About</a>
                        <a>Education</a>
                        <a>Projects</li>
                        <a>Contacts</li>
                    </ul>
                </nav>
        </header>
    )
}