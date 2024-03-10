import * as React from "react"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {

    const navigate = useNavigate();

    const goTo = (pathname: string) => {
        navigate('/' + pathname);
    };

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>

                <Button variant="ghost" onClick={() => goTo('home')}>Início</Button>

                <NavigationMenuItem>
                    <NavigationMenuTrigger >Salas</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

                            <ListItem onClick={() => goTo('cadastroSala')} title="Nova Sala">
                                Adicione uma nova sala. Será necessário apenas seu nome.
                            </ListItem>

                            <ListItem onClick={() => goTo('salas')} title="Todas as Salas">
                                Visualização de todas as Salas cadastradas.
                            </ListItem>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>

                    <NavigationMenuTrigger>Patrimônios</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

                            <ListItem onClick={() => goTo('cadastroPatrimonio')} title="Novo Patrimônio">
                                Adicione um novo Patrimônio. Escolha sua Sala, nome e passe seu código.
                            </ListItem>

                            <ListItem onClick={() => goTo('patrimonios')} title="Todos os Patrimônios">
                                Visualização de todos os Patrimônios cadastrados.
                            </ListItem>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Histórico</NavigationMenuTrigger>

                    <NavigationMenuContent>

                        <ul className="grid gap-3 p-6 w-[400px]">

                            <ListItem onClick={() => goTo('historico')} title="Todo o Histórico">
                                Visualização de todo o Histório. Criação, edição e movimentação.
                            </ListItem>

                        </ul>

                    </NavigationMenuContent>

                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
