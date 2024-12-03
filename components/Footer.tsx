"use client"
import React from 'react'
import { GithubLogo, LinkedinLogo, MailLogo, CvIcon } from "./icons"
import styles from './Footer.module.css'

export function Footer(){
  return(
    <footer className={styles.footer}>
    <div className={styles.footerIcons}>
      <a aria-label='Github' href="https://github.com/idiegoo" target="_blank">
        <GithubLogo className={styles.githubLogo} width={50} fill="#f8f8f8"/>
      </a>
      <a aria-label='Linkedin' href="https://linkedin.com/in/idiegoo" target="_blank">
        <LinkedinLogo className={styles.linkedinLogo} width={50} fill="#f8f8f8"/>
      </a>
      <a aria-label='Send me a mail' href="mailto:idiegoo.ra@gmail.com">
        <MailLogo className={styles.mailLogo} width={50} fill="#f8f8f8"/>
      </a>
      <a aria-label='CV' href="https://drive.google.com/file/d/1ccF-he3tSsm8j0h94_ES9ys4PhehIaPP/view?usp=sharing" target="_blank">
        <CvIcon className={styles.cvIcon} width={50} fill="#f8f8f8"/>
      </a>
    </div>
    ©{new Date().getFullYear()} Diego Ramirez
    </footer>
  )
}