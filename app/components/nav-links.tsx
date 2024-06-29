import { ClassNames } from "@emotion/react";
import Link from "next/link";

export default function NavLinks() {
    const links = [
        {
            'name': 'Home',
            'href': '/home',
        },
        {
            'name': 'Education',
            'href': '/education',
        },
        {
            'name': 'Project',
            'href': '/project',
        },
        {
            'name': 'Research',
            'href': '/research',
        },
        {
            'name': 'Working',
            'href': '/working',
        },

    ]

    return (
        <nav className="flex flex-row my-2 gap-x-20 mx-4 w-full">
            {links.map((link) => {
                return (
                    <Link 
                        key={link.name}
                        href={link.href}
                        className="flex w-1/5 h-[48px] items-center justify-center rounded-md hover:bg-zinc-800 hover:text-zinc-300"
                    >
                        <p>{ link.name }</p>
                    </Link>
                )
            })}
        </nav>
    )
}