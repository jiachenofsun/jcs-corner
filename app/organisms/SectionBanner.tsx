import { useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { TranslucentBanner, ShakyButton } from "@/app/theme"
import { Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

gsap.registerPlugin(TextPlugin, ScrollTrigger)
type SectionBannerProps = {
  bgurl: string
  path: string
  text: string
}

const SectionBanner = ({ bgurl, path, text }: SectionBannerProps) => {
  const typoRef = useRef(null)
  const containerRef = useRef(null)
  const router = useRouter()

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

  return (
    <TranslucentBanner
      ref={containerRef}
      bgurl={bgurl}
      sx={{
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ShakyButton
        onClick={() => router.push(path)}
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
    </TranslucentBanner>
  )
}

export default SectionBanner
