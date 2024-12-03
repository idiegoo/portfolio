"use client"
import styles from './projects.module.css'
import { Fade } from 'react-awesome-reveal'
import ProjectsHead from './head'
import {Card} from '../../components/projects/cards'
import {
  GithubLogo,
  GoToWebsiteLogo } from '../../components/icons'
import {
  PortfolioPhoto,
  BadfairyPhoto,
  BingoPhoto,
  ApiRedPhoto,
  CoveritPhoto } from '../../components/projects/images/index'

export default function ProjectsPage(){
  return(
    <div className={styles.projectsContainer}>
      <ProjectsHead/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade triggerOnce={true}>
            <h1>Mis proyectos</h1>
            <h2>Desarrollados al 100% por mí</h2>
            <div className={styles.root}>
              <ul className={styles.cards}>
              <Card
                title='this.portfolio'
                description='Este es mi proyecto actual, hecho con React, estilizado con CSS Modules y toda la potencia del nuevo NextJS 14. Revisa mi código en GitHub!'
                src={PortfolioPhoto}
                alt='My portfolio screenshot'
                href='./'
                github={
                <a aria-label='portfolio Github' href="https://github.com/idiegoo/portfolio" target="_blank">
                  <GithubLogo className={styles.logo} width={40}/>
                </a>}
                goToWebsite={
                  <a aria-label='Portfolio' href='./'>
                    <GoToWebsiteLogo className={styles.logo} width={40}/>
                  </a>}
                />

              <Card
                title='MicroTracker'
                description='Aplicación web para saber en cuanto llega la micro, para esto consumí la API de RED y decidí hacerlo con Next.js, ya que las actuales páginas con este propósito estaban hechas con tecnologías antiguas'
                src={ApiRedPhoto}
                alt={'MicroTracker'}
                href='https://paraderored.vercel.app'
                github={
                  <a aria-label='MicroTracker Github' href='https://github.com/idiegoo/microtracker' target="_blank">
                    <GithubLogo className={styles.logo} width={40}/>
                  </a>
                }
                goToWebsite={
                  <a aria-label='MicroTracker Github' href='https://paraderored.vercel.app' target="_blank">
                    <GoToWebsiteLogo className={styles.logo} width={40}/>
                  </a>
                }
                />

              <Card
                title='Badfairy.cl'
                description='Mi primer eCommerce hecho con WordPress y su plugin WooCommerce, en este proyecto aprendí también sobre phpMyAdmin, cPanel, SMTP, etc'
                src={BadfairyPhoto}
                alt='Badfairy.cl'
                />

              <Card
                title='Bingo game'
                description='Juego hecho con JavaScript vanilla puro, el objetivo era pulir las skills de bucles, manipular el DOM, arrays, etc. dejando un poco de lado los estilos CSS'
                src={BingoPhoto}
                alt={'Bingo Vanilla Javascript'}
                href='https://idiegoo.github.io/bingo-vanilla-javascript/'
                github={
                  <a aria-label='Bingo vanilla JS Github' href="https://github.com/idiegoo/bingo-vanilla-javascript" target="_blank">
                    <GithubLogo className={styles.logo} width={40}/>
                  </a>
                }
                goToWebsite={
                  <a aria-label='Bingo vanilla JS' href='https://idiegoo.github.io/bingo-vanilla-javascript/' target="_blank">
                    <GoToWebsiteLogo className={styles.logo} width={40}/>
                  </a>
                }
                />

                <Card
                  title='Album cover generator'
                  description='Genera albumes descargables en PDF consumiendo la API de Spotify, hecho con Next, TailwindCSS y TypeScript'
                  src={CoveritPhoto}
                  alt='Album cover generator'
                  href='https://coverit.vercel.app/'
                  github={
                    <a aria-label='Coverit Github' href='https://github.com/idiegoo/albumcovergenerator' target="_blank">
                      <GithubLogo className={styles.logo} width={40}/>
                    </a>
                  }
                  goToWebsite={
                    <a aria-label='Coverit' href='https://coverit.vercel.app/' target="_blank">
                      <GoToWebsiteLogo className={styles.logo} width={40}/>
                    </a>
                  }
                  />
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}