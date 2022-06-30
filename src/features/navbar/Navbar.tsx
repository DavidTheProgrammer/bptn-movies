import {Link, useLocation} from "react-router-dom";

interface NavLink {
    pathName: string;
    text: string;
}

const links: NavLink[] = [
    {
        pathName: "/",
        text: "Popular",
    },
    {
        pathName: "/liked",
        text: "Liked"
    },
]


const Navbar = () => {
    const location = useLocation();

    return (
        <header className="left-0 right-0 bg-slate-100 rounded-b-lg h-16 shadow-lg">
            <nav className="h-full w-full px-8 flex justify-between items-center">
                <div className="text-2xl font-medium">
                    Movies
                </div>
                <div className="flex text-md">
                    {links.map(link => (
                        <div key={link.pathName}
                             className={`mr-8 py-1 px-4 rounded-b-sm ${link.pathName === location.pathname && "border-b-4 border-blue-500"}`}>
                            <Link to={link.pathName}>{link.text}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;