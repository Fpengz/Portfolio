import NavLinks from "../components/nav-links";

export default function Layout( { children }: { children: React.ReactNode }) {
    
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex w-full">
                <NavLinks />
            </div>
            <div className="flex-1 p-5">
                {children}
            </div>
        </div>
    )
}