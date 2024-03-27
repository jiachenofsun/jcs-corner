
import {PageContainer} from '@/app/theme'
import {SectionBanner} from '../organisms/SectionBanner'
import {VHSBanner} from '../organisms/VHSBanner'
import {TechyBanner} from '../organisms/TechyBanner'

export const Home = (): JSX.Element => {
  return (
    <PageContainer>
      <VHSBanner />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/photos-banner.jpg`} 
        path='/photos' 
        text="Photos" 
      />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/doodles-banner.jpg`} 
        path='/doodles' 
        text="Doodles" 
      />
      <TechyBanner />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/about-banner.jpg`} 
        path='/about' 
        text="About" 
      />
    </PageContainer>
  )
}





