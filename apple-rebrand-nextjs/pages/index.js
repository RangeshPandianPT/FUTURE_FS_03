import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Reimagined</title>
        <meta name="description" content="Rebranding Apple with modern design" />
      </Head>
      <Hero />
    </div>
  )
}