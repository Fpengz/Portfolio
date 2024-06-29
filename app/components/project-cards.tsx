import Image from "next/image"

interface ProjectCardProps {
    image: string;
    name: string;
    url: string;
    tags: string[];
}


export default function ProjectCard({ image, name, url, tags }: ProjectCardProps): React.ReactNode{
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#2c2c2c]">
            <Image
                src={image}
                width={1000}
                height={760}
                className="w-full"
                alt="The Caterprint Project"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><a href={url}>{name}</a></div>
                <p className="text-base">
                    The Caterprint project is 
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                    ))
                }
            </div>
        </div>
    )
}