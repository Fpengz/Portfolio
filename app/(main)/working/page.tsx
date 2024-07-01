
export default function Page() {
    return (
    <div className="flex items-center justify-center h-full overflow-auto">
        <div className="p-6 text-center h-full bg-[#2c2c2c] md:w-4/5 lg:w-2/5">
            <p className="text-start border-b mb-5 text-xl">Internship Experience</p>
            <div className="flex justify-between items-center text-start">
                <div className="text-start inline text-lg">Epson Singapore Pte Ltd</div>
                <div className="text-end inline ">May 2024 - Aug 2024</div>
            </div>
            <div className="text-start items-center">
                <p>Programming Intern</p>
                <ul className="list-disc ml-7">
                    <li>Facilitated in testing phase of a printing solution for both internal and external use including JP Morgan, identifying bugs and suggesting improvements to ensure project readiness.</li>
                    <li>Developed a customer-focused design and printing solution through multiple iterations. Initially created a demo utilising React, Tailwind CSS, Flask, and SQLAlchemy.</li>
                    <li>Enhanced application by integrating Gen AI for content generation and subsequently incorporated Canva Connect API for seamless design integration, ensuring a convenient and efficient user experience.</li>
                </ul>
            </div>
        </div>
    </div>
    )
}