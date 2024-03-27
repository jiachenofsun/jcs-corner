import { fill } from "../theme"
import { useEffect, useRef } from "react"
import { Box, Container, Typography } from "@mui/material"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ShakyButton } from "@/app/theme"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

gsap.registerPlugin(TextPlugin, ScrollTrigger)

export const TechyBanner = (): JSX.Element => {
  const typoRef = useRef(null)
  const containerRef = useRef(null)
  const router = useRouter()
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const text = "TECHY STUFF"

  useGSAP(() => {
    const typoElement: any = typoRef?.current
    const containerElement: any = containerRef?.current
    gsap.to(typoElement, {
      scrollTrigger: {
        trigger: containerElement,
        start: "top center",
        end: "center center",
        scrub: true,
        markers: false
      },
      text: text
    })
  })

  const generateSnow = (ctx: CanvasRenderingContext2D) => {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      d = ctx.createImageData(w, h),
      b = new Uint32Array(d.data.buffer),
      len = b.length

    for (var i = 0; i < len; i++) {
      b[i] = ((255 * Math.random()) | 0) << 24
    }

    ctx.putImageData(d, 0, 0)
  }

  useEffect(() => {
    const updateSize = () => {
      if (!canvasRef.current || !boxRef.current) return

      const box = boxRef.current.getBoundingClientRect()
      canvasRef.current.width = box.width
      canvasRef.current.height = box.height
    }

    if (!boxRef.current) return

    if (!canvasRef.current) {
      const box = boxRef.current.getBoundingClientRect()
      const canvas = document.createElement("canvas")
      const ctx = canvas?.getContext("2d")

      if (!ctx) return
      canvas.width = box.width
      canvas.height = box.height

      canvas.style.backgroundColor = "#aaa"
      canvas.style.opacity = "0.2"

      boxRef.current.appendChild(canvas)
      canvasRef.current = canvas
    }

    window.addEventListener("resize", updateSize)

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    const animate = () => {
      generateSnow(ctx)
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, 350)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  return (
    <Container
      ref={containerRef}
      sx={{
        position: "relative",
        display: "flex",
        minHeight: "93vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        zIndex: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(media/techy-banner.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.5
        },
        "& > *": {
          position: "relative",
          zIndex: 1
        }
      }}
    >
      <ShakyButton
        onClick={() => router.push("/techy-stuff")}
        sx={{
          border: "0.25rem solid #f5bc38",
          borderRadius: 0,
          px: "25px"
        }}
      >
        <Typography
          ref={typoRef}
          sx={{
            fontSize: { xs: "2.2rem !important", md: "4rem !important" },
            fontWeight: "light",
            letterSpacing: ".3rem",
            color: "#f5bc38"
          }}
        ></Typography>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.2rem !important", md: "4rem !important" },
              fontWeight: "light",
              color: "#f5bc38"
            }}
          >
            _
          </Typography>
        </motion.span>
      </ShakyButton>
      <Box
        ref={boxRef}
        sx={{
          ...fill,
          backgroundColor: "transparent",
          zIndex: -1
        }}
      />
    </Container>
  )
}
