interface CaixaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    className?: string
}

export default function Caixa(props: CaixaProps){
    return (
        <div className={`
            bg-red-500 rounded-md
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}