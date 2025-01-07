import { useState } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import UsuarioInfo from "./UsuarioInfo"
import { IconMoon, IconSun } from "@tabler/icons-react"

interface PaginaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}

export default function Pagina(props: PaginaProps){

    const [tema, setTema] = useState<'dark' | ''>('dark')

    function alternarTema(){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        tema === 'dark' ? setTema('') : setTema('dark')
    }

    const usuario = {
        nome: 'Monkey D. Luffy',
        email: 'nika@grandline.com',
        imagemUrl: 'https://images.fineartamerica.com/images/artworkimages/medium/3/badge-luffy-gear-5-avatar-thuan-ngo-ba-transparent.png'
    }


    return (
        <div className={`flex h-screen relative text-black dark:text-white ${tema}`}>
            <aside className="
                flex flex-col w-80
                bg-white dark:bg-zinc-900
                text-black dark:text-white
            ">
                <Logo className="pt-7 px-7"/>
                <Menu className="p-7 overflow-auto pb-28"/>
                <div className="fixed bottom-0 bg-white dark:bg-zinc-900 w-80">
                    <hr className="mx-7 border-zinc-400 dark:border-zinc-700"/>
                    <UsuarioInfo {...usuario} className="p-7"/>
                </div>
            </aside>
            <div className={`
                p-7 flex-1
                bg-zinc-200 dark:bg-black
            `}>
                {props.children}
            </div>
            <div className="absolute right-4 top-4">
                    <button className="" onClick={alternarTema}>
                        {tema === 'dark' ? <IconSun className="text-white"/> : <IconMoon className="text-black"/>}
                    </button>
                </div>
        </div>
    )
}