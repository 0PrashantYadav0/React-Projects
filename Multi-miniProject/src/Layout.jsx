import React, {useState, useEffect} from 'react'
import { Navbar, Footer } from './components/index'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/theme'

function Layout() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode]) 

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <Navbar/>
    <Outlet />
    <Footer />
    </ThemeProvider>
  )
}

export default Layout