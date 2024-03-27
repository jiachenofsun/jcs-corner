"use client"

import { PageContainer } from "@/app/theme"
import SectionBanner from "@/app/organisms/SectionBanner"
import VHSBanner from "@/app/organisms/VHSBanner"
import { TechyBanner } from "@/app/organisms/TechyBanner"

export default function Home() {
  return (
    <PageContainer>
      <VHSBanner />
      <SectionBanner
        bgurl={"/media/photos-banner.jpg"}
        path="/photos"
        text="Photos"
      />
      <SectionBanner
        bgurl={"/media/doodles-banner.jpg"}
        path="/doodles"
        text="Doodles"
      />
      <TechyBanner />
      <SectionBanner
        bgurl={"/media/about-banner.jpg"}
        path="/about"
        text="About"
      />
    </PageContainer>
  )
}
