import Titulo from "@/components/template/Titulo";

export default function PaginaTitulo() {
    return(
        <div className="p-10">
            <Titulo
                principal="Dashboard"
                secundario="Informação sobre a sua conta"
                gradiente
            />
        </div>
    )
}