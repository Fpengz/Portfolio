'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function NavLinks() {
    const pathname = usePathname();

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
        <nav className="flex flex-row my-2 lg:gap-x-20 md:gap-x-5 lg:mx-4 md:mx-2 w-full">
            {links.map((link, index) => {
                return (
                    <Link 
                        key={index}
                        href={link.href}
                        className={clsx(
                            "flex w-1/5 h-[48px] hover:text-blue-400 hover:underline items-center justify-center rounded-md hover:bg-zinc-800 hover:text-zinc-300",
                            {
                                'bg-sky-200 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <p>{ link.name }</p>
                    </Link>
                )
            })}
        </nav>
    )
}