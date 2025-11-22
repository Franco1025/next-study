import Hero from '../components/hero'
import homeSrc from '../../public/img/home.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Page() { 
  return (
    <Hero imgUrl={homeSrc} altText='Home' content='Professional Cloud Hosting'/>
  )
}
