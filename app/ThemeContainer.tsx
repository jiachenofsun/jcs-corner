"use client"

import "./globals.css"
import { ThemeProvider } from "@mui/material/styles"
import { theme, darkTheme, AppContainer } from "@/app/theme"
import { useState, useEffect } from "react"
import NavMenu from "@/app/organisms/NavMenu"
import Footer from "@/app/organisms/Footer"

export default function ThemeContainer({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkModeSetting = window.localStorage.getItem("darkMode")
    if (darkModeSetting) {
      const isDarkMode = darkModeSetting === "true"
      setDarkMode(isDarkMode)
    }
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <AppContainer>
        <NavMenu />
        <div style={{ flexGrow: "1" }}>{children}</div>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </AppContainer>
    </ThemeProvider>
  )
}
