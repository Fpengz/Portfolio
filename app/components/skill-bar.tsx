type SkillType = {
    name: string,
    level: number,
}


export default function SkillBar({ name, level}: SkillType ) {
    return (
        <div>
            <p className="text-start mt-2 mb-1">{ name }</p>
            <div className="w-3/5 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-[#7a7978] h-2.5 p-0.5 leading-none rounded-full" style={{width: `${level}%`}}></div>
            </div>
        </div>

    )
}