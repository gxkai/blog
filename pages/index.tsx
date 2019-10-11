import React from 'react'
import { NextPage } from 'next'

import '../assets/css/app.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header />

      <h1 className="hljs">hello world</h1>

      <Footer />
    </div>
  )
}

export default IndexPage
