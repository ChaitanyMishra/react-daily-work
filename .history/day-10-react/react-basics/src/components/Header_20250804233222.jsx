export default function Header(){
    return(
        <header className=" w-full h-auto flex items-center justify-around  bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl p-3">
                <h1 className=" text-violet-200 text-4xl">Chaitany Mishra</h1>
                <nav className="mt-6">
                    <ul className=" flex text-violet-200 text-lg gap-6">
                        <li>Home</li>
                        <li>About</li>
                        <li>Education</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
        </header>
    )
}