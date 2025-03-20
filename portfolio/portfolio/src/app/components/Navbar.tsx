import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold">Wang ZhouFu</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Résumé</Link>
        <Link href="/contact">Contact</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
