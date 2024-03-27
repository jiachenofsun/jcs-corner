"use client"

import * as React from "react"
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { theme, StyledAppBar, ShakyButton, MotionBox } from "@/app/theme"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface PageRoute {
  title: string
  path: string
}
const pageRoutes: PageRoute[] = [
  { title: "photos", path: "/photos" },
  { title: "doodles", path: "/doodles" },
  { title: "techy stuff", path: "/techy-stuff" },
  { title: "about", path: "/about" }
]

export default function NavMenu(): JSX.Element {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const tickerVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  }

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <div
        style={{
          color: "#f5bc38",
          borderBottom: `1px solid ${theme.palette.primary.dark}`,
          padding: "0",
          width: "100%",
          margin: "0",
          backgroundImage: "url('/media/ticker-banner.jpg')"
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingX: "24px",
            width: "100%",
            borderBottom: `2px solid ${theme.palette.primary.dark}`,
            display: "flex",
            justifyContent: "space-between",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/media/navmenu-banner.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }
          }}
        >
          {/* LARGER SCREEN SIZES */}
          <Typography
            noWrap
            sx={{
              display: { xs: "none", md: "inline" },
              position: "absolute",
              fontFamily: "monospace",
              fontWeight: 100,
              fontSize: "1.5rem",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <Link href={`/`}>jc's corner</Link>
          </Typography>

          {/* SMALLER SCREEN SIZES */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              zIndex: 1
            }}
          >
            <IconButton
              size="large"
              aria-label="navmenu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pageRoutes.map((pageRoute) => (
                <MenuItem key={pageRoute.title} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ textDecoration: "none", color: "#f5bc38" }}
                  >
                    <Link href={pageRoute.path}>{pageRoute.title}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* SMALLER SCREEN SIZES */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "inline", md: "none" },
              margin: "auto",
              fontFamily: "monospace",
              fontWeight: 100,
              letterSpacing: ".1rem",
              color: "f5bc38",
              zIndex: 0
            }}
          >
            jc's corner
          </Typography>

          {/* LARGER SCREEN SIZES */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center"
            }}
          >
            {pageRoutes.map((pageRoute) => (
              <ShakyButton
                key={pageRoute.title}
                onClick={() => router.push(pageRoute.path)}
                sx={{
                  display: "block",
                  py: 0,
                  mx: 1,
                  color: "inherit",
                  fontSize: "1.3rem",
                  textTransform: "none"
                }}
              >
                {pageRoute.title}
              </ShakyButton>
            ))}
          </Box>
        </Toolbar>

        <MotionBox variants={tickerVariants} animate="animate">
          <Typography
            variant="body1"
            sx={{
              display: "inline",
              fontSize: { xs: "0.7rem", md: "1rem", color: "#f5bc38" }
            }}
          >
            REMEMBER TO STAY HYDRATED. HAVE A WONDERFUL DAY.
          </Typography>
        </MotionBox>
      </div>
    </StyledAppBar>
  )
}
