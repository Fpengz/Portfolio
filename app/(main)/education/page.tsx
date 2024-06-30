export default function Page() {
    return (
    <div className="flex items-center justify-center h-full">
        <div className="p-6 lg:w-2/5 h-full bg-[#2c2c2c] md:w-4/5">
            <p className="text-start border-b mb-5 text-xl">Education</p>
            <div className="flex justify-between items-center text-start">
                <div className="text-start inline text-lg">Nanyang Technological University, Singapore</div>
                <div className="text-end inline ">Jul 2023 - Nov 2027</div>
            </div>
            <div className="text-start items-center">
                <p><span className="text-lg">Bachelor of Engineering and Economics</span>, Honours(Highest Distinction)</p>
                <ul className="list-disc ml-7">
                    <li>Specialisation: Info-Communication Engineering</li>
                    <li>Minor Study: Risk Analytics</li>
                </ul>
                <p className="text-lg mt-2">Relevant Courses</p>
                <ul className="list-disc ml-7">
                    <li>Microeconomics</li>
                    <li>Macroeconomics</li>
                    <li>Probability & Statistics</li>
                    <li>Linear Algebra</li>
                    <li>Engineering Calculus</li>
                    <li>Data Structure & Algorithms</li>
                    <li>Introduction to Data Science & AI</li>
                    <li>Signal and Systems</li>
                </ul>
            </div>
        </div>
    </div>
    )
}