import { SkeletonTiles } from "@/components/skeletonTiles"
import { useQuery } from "react-query";
import { Tile } from "./../components/tile";
import axios from "axios";

function HomePage() {

    const { data, isLoading, error } = useQuery("salas", () => {
        return axios.get('https://backpatrimonio.onrender.com/local').then((response) => response.data)
    })


    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto flex items-center column flex-col gap-5 mt-20">
                {
                    Array.from({ length: 7 }).map((_, index) => (
                        <SkeletonTiles key={index} />
                    ))
                }
            </div>
        );
    }

    console.log(data.objeto)

    return (
        <div className="max-w-7xl mx-auto flex justify-center column flex-wrap gap-2 mt-20">
            {
                data.objeto.map((sala) => (
                    <Tile nome={sala.nome} codigo={sala.criadoEm} ativo={sala.ativo} key={sala.id} />
                ))
            }

            {
                data.objeto.map((sala) => (
                    <Tile nome={sala.nome} codigo={sala.criadoEm} ativo={sala.ativo} key={sala.id} />
                ))
            }
        </div>
    )


}

export default HomePage;