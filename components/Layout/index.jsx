import React, { Component } from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}
