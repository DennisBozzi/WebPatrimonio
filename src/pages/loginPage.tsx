import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom"

function loginPage() {

    const navigate = useNavigate()

    const login = () => {
        navigate('/home')
    }

    return (
        <div className="max-w-4xl mx-auto flex items-center h-screen column">
            <Tabs defaultValue="account" className="w-[400px] mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Registrar</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Acesso</CardTitle>
                            <CardDescription>
                                Insira suas credenciais.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Email</Label>
                                <Input id="name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Senha</Label>
                                <Input id="username" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="mx-auto"
                                id="loginBtn"
                                onClick={login}>
                                Confirmar
                            </Button>
                            {/* <Button className="absolute" variant="secondary">Teste</Button> */}
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Novo Registro</CardTitle>
                            <CardDescription>
                                Faça seu registro aqui.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Senha</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="mx-auto">Registrar</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default loginPage;