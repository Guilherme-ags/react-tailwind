import Caixa from "@/components/Caixa";

export default function Posicao() {
    return (
        <div className="grid grid-cols-3 gap-2.5 m-5 h-72 bg-zinc-700">
            <Caixa className="row-start-1 row-end-4">#1</Caixa>
            <Caixa className="row-start-1 row-end-3 col-start-2 col-span-2">#2</Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
            <Caixa>#5</Caixa>
            <Caixa>#6</Caixa>
            <Caixa>#7</Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa>            
        </div>
    )
}