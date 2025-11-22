import Hero from "../../components/hero";
import homeSrc from '../../../public/img/scale.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'scale'
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altText='scale' content='scale'/>
  )
}