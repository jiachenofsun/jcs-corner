import {forwardRef, useImperativeHandle, useRef} from 'react'
import {Typography} from '@mui/material'
import {ShakyButton} from '../theme'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

type BannerButtonProps = {
    path: string
}

export const BannerButton = forwardRef(({path}: BannerButtonProps, ref) => {
    const navigate = useNavigate()
    const button = useRef(null)
    const typo = useRef(null)
    useImperativeHandle(ref, () => ({
      button,
      typo,
    }))

    return (
    <ShakyButton ref={button}
        onClick={() => navigate(path)}
        sx={{
            border: '0.25rem solid #f5bc38',
            borderRadius: 0,
            px: '25px',
        }}
        >
        <Typography ref={typo} sx={{ fontSize: {xs: '2.2rem !important', md: '4rem !important'}, fontWeight: 'light', letterSpacing: '.3rem', color: '#f5bc38',}}>
        </Typography>
        <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}>
            <Typography sx={{ fontSize: {xs: '2.2rem !important', md: '4rem !important'}, fontWeight: 'light', color: '#f5bc38',}}>_</Typography>
        </motion.span>
    </ShakyButton>
    )
  })