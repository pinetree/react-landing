import React from 'react'
import Header from './Header'
import Content from './Content'

const Top = props => (
  <section className="top-sec">
    <div className="video-b" ref="main-video" />
    <Header />
    <Content />
  </section>
)

export default Top
