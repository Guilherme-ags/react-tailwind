import Caixa from "@/components/Caixa";

export default function Margin(){
    return (
        <div className="flex-center h-screen">
            <Caixa className="mx-3">#1</Caixa>
            <Caixa className="my-5">#2</Caixa>
            <Caixa className="mb-16 mr-6">#3</Caixa>
            <Caixa className="m-5">#4</Caixa>
            <Caixa className="mt-[150px]">#5</Caixa>
        </div>
    )
}