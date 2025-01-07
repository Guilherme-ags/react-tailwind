import { IconDotsVertical } from "@tabler/icons-react"
import Image from "next/image"

interface UsuarioInfoProps {
    nome: string
    email: string
    imagemUrl: string
    className?: string
}

export default function UsiarioInfo(props: UsuarioInfoProps) {
    return (
        <div className={`flex gap-2 text-zinc-900 dark:text-zinc-100 ${props.className ?? ''}`}>
            <Image 
                src={props.imagemUrl}
                alt="avatar"
                height={40}
                width={40}
                className="rounded-full"
            />
            <div className="flex flex-col">
                <span>{props.nome}</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-400">{props.email}</span>
            </div>
            <div className="flex-1"></div>
            <IconDotsVertical className="cursor-pointer"/>
        </div>
    )
}