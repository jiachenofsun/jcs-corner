import { forwardRef, useImperativeHandle, useRef } from "react"
import { Typography } from "@mui/material"
import { ShakyButton } from "../theme"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

type BannerButtonProps = {
  path: string
}

export const BannerButton = forwardRef(({ path }: BannerButtonProps, ref) => {
  const router = useRouter()

  const button = useRef<HTMLButtonElement>(null)
  const typo = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => ({
    button,
    typo
  }))

  return (
    <ShakyButton
      ref={button}
      onClick={() => router.push(path)}
      sx={{
        border: "0.25rem solid #f5bc38",
        borderRadius: 0,
        px: "25px"
      }}
    >
      <Typography
        ref={typo}
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
  )
})
