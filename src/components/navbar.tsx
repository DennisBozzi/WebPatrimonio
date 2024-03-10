import { useLocation } from 'react-router-dom';
import { LeftSheet } from './leftSheet';
import { Input } from "../components/ui/input";
import { NavigationMenuDemo } from "../components/navigationMenu";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function NavBar() {
    const location = useLocation();
    const pathname = location.pathname;
    var name;

    if (pathname == '/home') {
        name = 'Início'
    } else if (pathname == '/salas') {
        name = 'Todas as Salas'
    } else if (pathname == '/cadastroSala') {
        name = 'Nova Sala'
    } else if (pathname == '/patrimonios') {
        name = 'Todos os Patrimônios'
    } else if (pathname == '/cadastroPatrimonio') {
        name = 'Novo Patrimônio'
    } else if (pathname == '/historico') {
        name = 'Histórico'
    } else if (pathname == '/salas') {

    } else if (pathname == '/salas') {

    } else if (pathname == '/salas') {

    } else if (pathname == '/salas') {

    }

    return (

        <>
            {pathname === '/' ? (
                <></>
            ) : (<>

                <div className='flex p-2 gap-2 max-w-screen-lg mx-auto'>
                    <LeftSheet />
                    <NavigationMenuDemo />
                    <Input />
                    <Button variant="secondary" size="icon">
                        <Search className="h-4 w-12" />
                    </Button>
                </div>

                <h1 className='text-center text-2xl mt-5 mb-8'>{name}</h1>

            </>
            )}
        </>
    );
}

export default NavBar;
