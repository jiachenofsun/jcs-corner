import "./globals.css"
import type { Metadata } from "next"
import ThemeContainer from "./ThemeContainer"

export const metadata: Metadata = {
  title: "jc's corner",
  description: "Jc Sun's lil corner of the web"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContainer children={children}></ThemeContainer>
        {/* <ThemeProvider children={children} theme={darkMode ? darkTheme : theme}>
          <AppContainer>
            <NavMenu />
            <div style={{ flexGrow: "1" }}>{children}</div>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
          </AppContainer>
        </ThemeProvider> */}
      </body>
    </html>
  )
}
