import React from 'react'
import Head from 'next/head'
import Header from '../components/header/header'

const Home = () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <title>Leco</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/style/normalize.css" />
      <link rel="stylesheet" href="/style/fonts.css" />
      <link rel="stylesheet" href="/style/main.css" />
    </Head>
  <Header />
  </div>
)

export default Home
