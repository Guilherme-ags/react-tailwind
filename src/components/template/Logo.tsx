import { IconBrandTailwind } from "@tabler/icons-react";

interface LogoProps{
    className?: string
}

export default function Logo(props: LogoProps){
    return (
        <div className={`flex items-center gap-2 text-zinc-700 dark:text-zinc-400 ${props.className ?? '' }`}>
            <IconBrandTailwind size={40} stroke={1}/>
            <span>Tailwind com React</span>
        </div>
    )
}