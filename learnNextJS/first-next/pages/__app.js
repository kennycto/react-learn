import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {

  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <p>I'm i'm from _app 3</p>
        <Component {...pageProps} />
      </Container>
  	)
  }
}