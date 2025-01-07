import Caixa from "@/components/Caixa";

export default function Redimensionamento() {
    return (
        <div className="flex gap-1.5">
            <Caixa className="w-14 ">#1</Caixa>
            <Caixa className="w-32 flex-auto">#2</Caixa>
            <Caixa className="w-64 flex-auto">#3</Caixa>
        </div>
    )
}