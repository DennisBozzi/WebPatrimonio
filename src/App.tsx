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
          <Route path="/home" element={<> <NavBar /> <HomePage /> </>} />

        </Routes>

      </BrowserRouter>

      <ModeToggle />

    </ThemeProvider>
  )

}

export default App
