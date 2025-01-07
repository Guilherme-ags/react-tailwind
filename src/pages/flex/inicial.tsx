import Caixa from "@/components/Caixa";

export default function Flex() {
    return (
        <div className="
        flex flex-wrap gap-3 h-screen
        justify-center items-center content-center
        ">
            <Caixa className="w-2/5">#1</Caixa>
            <Caixa className="w-2/5">#2</Caixa>
            <Caixa className="w-2/5">#3</Caixa>
            <Caixa className="w-2/5">#4</Caixa>
            <Caixa className="w-2/5">#5</Caixa>
        </div>
    )
}