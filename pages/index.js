import Head from 'next/head'
import { PrivateRoute, Home } from '../components'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrivateRoute>
        <Home />
      </PrivateRoute>
    </div>
  )
}
