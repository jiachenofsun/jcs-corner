import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import {
  AppBar,
  Box,
  Button,
  Paper,
  Container,
  ContainerProps
} from "@mui/material"
import { styled, keyframes } from "@mui/system"
import { motion } from "framer-motion"
import "typeface-cutive-mono"

let baseTheme = {
  typography: {
    allVariants: {
      color: "inherit",
      // fontFamily: 'Cutive Mono, monospace',
      fontFamily: "DM Serif Display, serif",
      // fontFamily: 'Source Serif 4, serif',
      letterSpacing: ".08rem"
    },
    h1: {
      fontSize: "4rem",
      letterSpacing: ".1rem"
    },
    h2: {
      fontSize: "3.555rem"
    },
    h3: {
      fontSize: "3.16rem"
    },
    h4: {
      fontSize: "2.81rem"
    },
    h5: {
      fontSize: "2.5rem"
    },
    h6: {
      fontSize: "2.22rem"
    },
    body1: {
      fontSize: "1.57rem",
      fontFamily: "Source Serif 4, serif"
    },
    body2: {
      fontSize: "1.4rem",
      fontFamily: "Source Serif 4, serif"
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "none !important",
          margin: "0px"
        }
      }
    }
  }
}

export const theme = responsiveFontSizes(
  createTheme({
    ...baseTheme,
    palette: {
      primary: {
        main: "#ffffff"
      },
      secondary: {
        main: "#000000"
      }
    }
  })
)

export const darkTheme = responsiveFontSizes(
  createTheme({
    ...baseTheme,
    palette: {
      mode: "dark",
      primary: {
        main: "#000000"
      },
      secondary: {
        main: "#ffffff"
      },
      background: {
        default: "#000000"
      }
    }
  })
)

export const fill = {
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0
}

export const AppContainer = styled(Paper)(() => ({
  backgroundImage: "none",
  maxWidth: "none !important",
  margin: "0px",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column"
  // height: "100vh"
}))

export const PageContainer = styled(Box)(() => ({
  margin: "0",
  padding: "0",
  minHeight: "93vh"
}))

export const MotionBox = motion(Box)

export const StyledAppBar = styled(AppBar)(() => ({
  borderBottom: `1px solid ${theme.palette.primary.dark}`
}))

const shakeAnimation = keyframes`
  2% {
    transform: translate(0.5px,-1.5px) rotate(-.5deg);
  }
  4% {
    transform: translate(0.5px,1.5px) rotate(1.5deg);
  }
  6% {
      transform: translate(1.5px,1.5px) rotate(1.5deg);
  }
  8% {
      transform: translate(2.5px,1.5px) rotate(.5deg);
  }
  10% {
      transform: translate(0.5px,2.5px) rotate(.5deg);
  }
  12% {
      transform: translate(1.5px,1.5px) rotate(.5deg);
  }
  14% {
      transform: translate(0.5px,0.5px) rotate(.5deg);
  }
  16% {
      transform: translate(-1.5px,-0.5px) rotate(1.5deg);
  }
  18% {
      transform: translate(0.5px,0.5px) rotate(1.5deg);
  }
  20% {
      transform: translate(2.5px,2.5px) rotate(1.5deg);
  }
  22% {
      transform: translate(0.5px,-1.5px) rotate(1.5deg);
  }
  24% {
      transform: translate(-1.5px,1.5px) rotate(-.5deg);
  }
  26% {
      transform: translate(1.5px,0.5px) rotate(1.5deg);
  }
  28% {
      transform: translate(-0.5px,-0.5px) rotate(-.5deg);
  }
  30% {
      transform: translate(1.5px,-0.5px) rotate(-.5deg);
  }
  32% {
      transform: translate(2.5px,-1.5px) rotate(1.5deg);
  }
  34% {
      transform: translate(2.5px,2.5px) rotate(-.5deg);
  }
  36% {
      transform: translate(0.5px,-1.5px) rotate(.5deg);
  }
  38% {
      transform: translate(2.5px,-0.5px) rotate(-.5deg);
  }
  40% {
      transform: translate(-0.5px,2.5px) rotate(.5deg);
  }
  42% {
      transform: translate(-1.5px,2.5px) rotate(.5deg);
  }
  44% {
      transform: translate(-1.5px,1.5px) rotate(.5deg);
  }
  46% {
      transform: translate(1.5px,-0.5px) rotate(-.5deg);
  }
  48% {
      transform: translate(2.5px,-0.5px) rotate(.5deg);
  }
  50% {
      transform: translate(-1.5px,1.5px) rotate(.5deg);
  }
  52% {
      transform: translate(-0.5px,1.5px) rotate(.5deg);
  }
  54% {
      transform: translate(-1.5px,1.5px) rotate(.5deg);
  }
  56% {
      transform: translate(0.5px,2.5px) rotate(1.5deg);
  }
  58% {
      transform: translate(2.5px,2.5px) rotate(.5deg);
  }
  60% {
      transform: translate(2.5px,-1.5px) rotate(1.5deg);
  }
  62% {
      transform: translate(-1.5px,0.5px) rotate(1.5deg);
  }
  64% {
      transform: translate(-1.5px,1.5px) rotate(1.5deg);
  }
  66% {
      transform: translate(0.5px,2.5px) rotate(1.5deg);
  }
  68% {
      transform: translate(2.5px,-1.5px) rotate(1.5deg);
  }
  70% {
      transform: translate(2.5px,2.5px) rotate(.5deg);
  }
  72% {
      transform: translate(-0.5px,-1.5px) rotate(1.5deg);
  }
  74% {
      transform: translate(-1.5px,2.5px) rotate(1.5deg);
  }
  76% {
      transform: translate(-1.5px,2.5px) rotate(1.5deg);
  }
  78% {
      transform: translate(-1.5px,2.5px) rotate(.5deg);
  }
  80% {
      transform: translate(-1.5px,0.5px) rotate(-.5deg);
  }
  82% {
      transform: translate(-1.5px,0.5px) rotate(-.5deg);
  }
  84% {
      transform: translate(-0.5px,0.5px) rotate(1.5deg);
  }
  86% {
      transform: translate(2.5px,1.5px) rotate(.5deg);
  }
  88% {
      transform: translate(-1.5px,0.5px) rotate(1.5deg);
  }
  90% {
      transform: translate(-1.5px,-0.5px) rotate(-.5deg);
  }
  92% {
      transform: translate(-1.5px,-1.5px) rotate(1.5deg);
  }
  94% {
      transform: translate(0.5px,0.5px) rotate(-.5deg);
  }
  96% {
      transform: translate(2.5px,-0.5px) rotate(-.5deg);
  }
  98% {
      transform: translate(-1.5px,-1.5px) rotate(-.5deg);
  }
  0%, 100% {
    transform: translate(0,0) rotate(0);
  }
`

export const ShakyButton = styled(Button)(() => ({
  color: "inherit",
  "&:hover": {
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
    animationName: shakeAnimation,
    animationTimingFunction: "ease-in-out"
  }
}))

interface StyledContainerProps extends ContainerProps {
  bgurl: string
}

export const TranslucentBanner = styled(Container)<StyledContainerProps>(
  ({ bgurl }) => ({
    position: "relative",
    display: "flex",
    minHeight: "93vh",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url("${bgurl}")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 0.5
    },
    "& > *": {
      position: "relative",
      zIndex: 1
    }
  })
)
