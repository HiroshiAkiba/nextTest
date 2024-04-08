import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>LangCat</h1>
      <h2>Language Learning Through Television</h2>
      <Link href="/shows">Shows</Link>
      <ProductCard></ProductCard>
    </main>
  )
}
