import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
import Main from '../components/main/Main'

const Home = () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <title>Leco</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/static/normalize.css" />
      <link rel="stylesheet" href="/static/fonts.css" />
      <link rel="stylesheet" href="/static/main.css" />
    </Head>
  <Header />
  <Main />
  </div>
)

export default Home
