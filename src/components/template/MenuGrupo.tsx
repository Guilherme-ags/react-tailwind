interface MenuGrupoProps {
    texto: string
}

export default function MenuGrupo(props: MenuGrupoProps){
    return (
        <div className="
        uppercase text-xs
        text-zinc-700 dark:text-zinc-400
         font-bold pt-3.5">
            {props.texto}
        </div>
    )
}