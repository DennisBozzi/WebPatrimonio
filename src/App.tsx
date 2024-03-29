import { ThemeProvider } from "@/components/theme-provider"
import LoginPage from "./pages/loginPage";
import ModeToggle from "./components/ui/modeToggle";
import { Route, Routes } from "react-router-dom";
import SalasPage from "./pages/sala/salasPage";
import NavBar from "./components/navbar";
import PatrimoniosPage from "./pages/patrimonio/patrimoniosPage";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <NavBar />

        <Routes>

          <Route path="/" element={<LoginPage />} />

        </Routes>

        <Routes>

          <Route path="/home" element={<>

          </>} />

          <Route path="/salas" element={<>
            <SalasPage />
          </>} />

          <Route path="/patrimonios" element={<>
            <PatrimoniosPage />
          </>} />

          <Route path="/cadastroSala" element={<>


          </>} />

          <Route path="/cadastroPatrimonio" element={<>


          </>} />

          <Route path="/historico" element={<>


          </>} />

        </Routes>

        <ModeToggle />
      </ThemeProvider>

    </>
  )

}

export default App
