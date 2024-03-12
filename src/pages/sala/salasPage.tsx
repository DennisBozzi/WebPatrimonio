import { SkeletonTiles } from "@/components/skeletonTiles"
import { useQuery } from "react-query";
import { Tile } from "@/components/tile";
import axios from "axios";

function SalasPage() {

    const { data, isLoading, error } = useQuery("salas", () => {
        return axios.get('https://backpatrimonio.onrender.com/local').then((response) => response.data)
    })


    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto flex justify-center column flex-wrap gap-2">
                {
                    Array.from({ length: 24 }).map((_, index) => (
                        <SkeletonTiles key={index} />
                    ))
                }
            </div>
        );
    }

    if (error) {
        return (<div>Algo deu errado!</div>)
    }

    interface Sala {
        id: number;
        nome: string;
        criadoEm: string;
        ativo: boolean;
    }

    return (
        <div className="max-w-7xl mx-auto flex justify-center column flex-wrap gap-2">
            {data.objeto.map((sala: Sala) => (
                <Tile nome={sala.nome} codigo={sala.criadoEm} ativo={sala.ativo} key={sala.id} />
            ))}
        </div>
    );

}

export default SalasPage;

