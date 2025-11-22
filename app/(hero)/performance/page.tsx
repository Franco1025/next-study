import Hero from "../../components/hero";
import homeSrc from '../../../public/img/performance.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'performance'
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altText='performance' content='performance'/>
  )
}
