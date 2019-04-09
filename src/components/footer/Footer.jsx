import React from 'react'
import Logo from 'components/logo'

import { COPYRIGHT_TEXT, AUTHOR_LABEL, AUTHOR_TEXT } from './types'

import './footer.scss'

function Footer() {
  return (
    <footer className="footer-wrapper">
      <section className="footer-top">
        <div className="container">
          <Logo />
        </div>
      </section>
      <section className="footer-copyright">
        <div className="container">
          <div className="level">
            <div className="level-left">{COPYRIGHT_TEXT}</div>
            <div className="level-right">
              <span className="label-text">{AUTHOR_LABEL}: </span>
              <span>{AUTHOR_TEXT}</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
