import { SkeletonTiles } from "@/components/skeletonTiles"
import { useQuery } from "react-query";
import axios from "axios";
import { PaginationSheet } from "@/components/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function PatrimoniosPage() {

    const { data, isLoading, error } = useQuery("patrimonios", () => {
        return axios.get('https://backpatrimonio.onrender.com/patrimonio').then((response) => response.data)
    })

    if (data != null) {
        console.log(data.objeto)
    }

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

    interface Pat {
        id: number;
        nome: string;
        criadoEm: string;
        numero: string;
        ativo: boolean;
    }

    return (
        <div className="h-full">
            <Table className="max-w-screen-lg mx-auto text-center px-8">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center md:w-1/4 w-2/6">Nome</TableHead>
                        <TableHead className="md:table-cell hidden md:w-1/4 text-center">Criado Em</TableHead>
                        <TableHead className="text-center md:w-1/4 w-2/6">Código</TableHead>
                        <TableHead className="text-center md:w-1/4 w-2/6">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.objeto.slice(0, 15).map((pat: Pat) => (
                        <TableRow key={pat.id}>
                            <TableCell className="font-medium">{pat.nome}</TableCell>
                            <TableCell className="md:table-cell hidden" >{formataData(pat.criadoEm)}</TableCell>
                            <TableCell className="font-medium">{pat.numero}</TableCell>
                            <TableCell className="font-medium">{pat.ativo ? 'Ativo' : 'Inativo'}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            <PaginationSheet />
        </div>
    );

    function formataData(data: string) {
        var criadoEm = new Date(data);
        var dia = criadoEm.getDate();
        var mes = criadoEm.getMonth() + 1;
        var zero = mes <= 9 ? '0' : '';
        var ano = criadoEm.getFullYear();

        return dia + '/' + zero + mes + '/' + ano;
    }
}

export default PatrimoniosPage;

