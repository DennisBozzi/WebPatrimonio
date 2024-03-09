
import { Separator } from "@/components/ui/separator"

interface TileProps {
    nome: string;
    codigo: string;
    ativo: boolean;
}

export function Tile({ nome, codigo, ativo }: TileProps) {

    const bg = ativo ? "bg-emerald-700" : "bg-orange-600";

    return (

        <div>

            <div className="flex items-center space-x-4 pb-2 hover:cursor-pointer pl-2">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${bg}`}>{nome[0].toUpperCase()}</div>
                <div className="space-y-1">
                    <div className="rounded ps-2 m-0 w-[250px] text-base" >{nome}</div>
                    <div className="rounded ps-2 m-0 w-[200px] text-xs" >{codigo}</div>
                </div>
            </div>

            <Separator />

        </div>

    )
}
