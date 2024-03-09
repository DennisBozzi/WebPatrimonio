import { ThemeProvider } from "@/components/theme-provider"
import LoginPage from "./pages/loginPage";
import ModeToggle from "./components/ui/modeToggle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NavBar from "./components/navbar";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<LoginPage />} />

        </Routes>

        <Routes>

          <Route path="/home" element={<>
            <HomePage />
          </>} />

          <Route path="/patrimonios" element={<>

          </>} />

          <Route path="/cadastroSala" element={<>

          </>} />

          <Route path="/cadastroPatrimonio" element={<>

          </>} />

        </Routes>

      </BrowserRouter>
      <ModeToggle />
    </ThemeProvider>
  )

}

export default App
