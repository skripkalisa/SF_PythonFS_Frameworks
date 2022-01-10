import React, { Component } from 'react'
// import '../styles/styl/header.styl'

function Header(props: any) {
  return (
    <header>
      <ul>
        <a href="#1">
          <li>Link 1</li>
        </a>
        <a href="#2">
          <li>Link 2</li>
        </a>
        <a href="#3">
          <li>Link 3</li>
        </a>
      </ul>
    </header>
  )
}
export default Header
