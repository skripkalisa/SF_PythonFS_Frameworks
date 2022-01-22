import React, { Component } from 'react'
// import '../styles/styl/footer.styl'

function Footer(props: any) {
  return (
    <footer>
      <h3 className="brand-name">Brand name</h3>
      <img
        src="https://dummyimage.com/150x150.png"
        alt=""
        className="circle responsive-img"
      />
      <ul className="footer-nav">
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
    </footer>
  )
}
export default Footer
