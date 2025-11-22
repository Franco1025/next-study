import Hero from "../../components/hero";
import homeSrc from '../../../public/img/reliability.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'reliability'
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altText='reliability' content='reliability'/>
  )
}