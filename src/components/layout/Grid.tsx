interface GridProps {
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
    semEspaco?: boolean
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}

export default function Grid(props: GridProps) {
    return (
        <div className={`
            grid grid-cols-${props.cols ?? 1} //Interpolação para definir a quantidade de colunas em um display grid
            ${props.semEspaco ? '' : 'gap-3'}
            ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
            ${props.md ? `md:grid-cols-${props.md}` : ''}
            ${props.lg ? `lg:grid-cols-${props.lg}` : ''}
            ${props.xl ? `xl:grid-cols-${props.xl}` : ''}
            ${props.xl2 ? `2xl:grid-cols-${props.xl2}` : ''}
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}