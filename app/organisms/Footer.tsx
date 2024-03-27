import { Switch, Typography } from "@mui/material"
import { theme } from "@/app/theme"

type FooterProps = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Footer({
  darkMode,
  setDarkMode
}: FooterProps): JSX.Element {
  const handleThemeModeChange = () => {
    setDarkMode(!darkMode)
    window.localStorage.setItem("darkMode", (!darkMode).toString())
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderTop: `1px solid ${theme.palette.primary.dark}`
      }}
    >
      <Switch
        color="default"
        checked={darkMode}
        onChange={() => handleThemeModeChange()}
      />
      <Typography variant="body1">
        {darkMode ? "back to normalcy" : "for those who like darkness"}
      </Typography>
    </div>
  )
}
