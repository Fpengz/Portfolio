import SkillBar from "@/app/components/skill-bar";
import { LinkedIn, GitHub } from "@mui/icons-material";

export default function Page() {
    const programmingLanguageSkills = [
        {
            "name": "JavaScript",
            "level": 50,
        },
        {
            "name": "C++",
            "level": 10,
        },
        {
            "name": "Python",
            "level": 75,
        },
        {
            "name": "TypeScript",
            "level": 30,
        },
        {
            "name": "C",
            "level": 20,
        },
        {
            "name": "MySQL",
            "level": 30,
        },
    ];

    const library = [
        {
            "name": "Pandas",
            "level": 60,
        },
        {
            "name": "NumPy",
            "level": 40,
        },
        {
            "name": "SQLAlchemy",
            "level": 40,
        },
        {
            "name": "Scikit-learn",
            "level": 40,
        },
        {
            "name": "OpenCV",
            "level": 20,
        },
        {
            "name": "Seaborn",
            "level": 30,
        },
    ];

    const frameworks = [
        {
            "name": "React",
            "level": 40,
        },
        {
            "name": "Tailwind CSS",
            "level": 30,
        },
        {
            "name": "Next.js",
            "level": 20,
        },
        {
            "name": "Flask",
            "level": 60,
        },
    ]

    const others = [
        {
            "name": "Git",
            level: 30,
        },
        {
            "name": "Vim",
            level: 40,
        }
    ]
    return (
        <div className="flex items-center justify-center max-h-full overflow-auto">
            <div className="p-6 text-center lg:w-2/5 h-full bg-[#2c2c2c] md:w-4/5">
                <div>
                    {/* About Me */}
                    <div>
                        <p className="text-lg">About Me</p>
                        <p>
                            Hello, I&apos;m Wang ZhouFu, a self-driven, passionate learner.
                            I&apos;m currently a Year 2 undergraduate student at Nanyang Technological University, Singapore.
                            I&apos;m interested in a lot of things, including Mathematcis, Physics, Computing, Economics, Finance, etc.
                        </p>
                    </div>
                    {/* Social Media Links */}
                    <div className="my-10 p-2">
                        <div className="flex flex-col items-center">
                            <p className="text-lg mb-4">Contacts</p>
                            <div className="flex space-x-4 mb-4">
                                <a href="#" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                            </div>
                        </div>
                        <p>Email: <a href="mailto:wzf5350@gmail.com" className="text-blue-400 hover:underline">wzf5350@gmail.com</a></p>
                    </div>
                    {/* Technical Skills */}
                    <div className="flex flex-col mt-8">
                        <p className="text-lg mb-2">Technical Skills</p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="font-semibold mb-2 text-start">Languages & Databases</p>
                                {programmingLanguageSkills.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}  
                            </div>
                            <div>
                                <p className="font-semibold mb-2 text-start">Libraries</p>         
                                {library.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}  
                            </div>
                            <div>
                                <p className="font-semibold mb-2 text-start">Frameworks</p>
                                {frameworks.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}  
                            </div>
                            <div>
                                <p className="font-semibold mb-2 text-start">Others</p>
                                {others.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}