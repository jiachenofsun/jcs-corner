"use client"

import "./globals.css"
import { ThemeProvider } from "@mui/material/styles"
import { theme, darkTheme } from "@/app/theme"
import { useState, useEffect } from "react"
import NavMenu from "@/app/organisms/NavMenu"
import Footer from "@/app/organisms/Footer"

export default function RootLayout({
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
    <html lang="en">
      <body>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh"
            }}
          >
            <NavMenu />
            <div style={{ flexGrow: "1" }}>{children}</div>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
