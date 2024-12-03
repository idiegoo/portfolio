"use client"
import React from 'react'
import { Fade }  from "react-awesome-reveal"
import {
  BootstrapLogo,
  AdobephotoshopLogo,
  CssLogo,
  GitLogo,
  HtmlLogo,
  JavaScriptLogo,
  NextJsLogo,
  NodeJsLogo,
  ReactJsLogo,
  TypeScriptLogo,
  WordPressLogo,
  MySqlLogo,
  NestJsLogo,
  TailwindCSSLogo,
  PostgreSQLLogo,
  PythonLogo
} from '../icons/index'
import styles from './toolsandtech.module.css'

function showText(i:number) {
  clearTimeout(timer)
  const svgList = document.querySelectorAll('svg')
  let tech = svgList[i].firstChild?.textContent!

  const toolsandtechTitle = document.getElementById('toolsandtech-title')

  toolsandtechTitle!.innerHTML = tech

  svgList[i]?.addEventListener('mouseover', () => {
    toolsandtechTitle!.style.color = document.getElementsByClassName('logo-title')[i].attributes[1].value // Access to color attribute
  }, false)
  svgList[i]?.addEventListener('mouseout', () => {
    toolsandtechTitle!.className = styles.toolsAndTechTitle;
  }, false)
}

var timer:any

function hideText() {
  timer = setTimeout(() => {
    document.getElementById('toolsandtech-title')!.innerHTML = "Tecnologías que uso"
  }, 500);
}

export function ToolsAndTech() {
  return (
    <div id='toolsandtech-global-list' className={styles.technologiesIcons}>
      <Fade delay={200} duration={1500} triggerOnce={true}>
        <h2 id='toolsandtech-title' className={styles.toolsAndTechTitle}>Tecnologías que uso</h2>
        <div id='toolsandtech-row-1' className={styles.technologiesIconsRow}>
          <HtmlLogo className={styles.htmlLogo} width={50} onMouseEnter={() => showText(0)} onMouseLeave={hideText} />
          <CssLogo className={styles.cssLogo} width={50} onMouseEnter={() => showText(1)} onMouseLeave={hideText} />
          <BootstrapLogo className={styles.bootstrapLogo} width={50} onMouseEnter={() => showText(2)} onMouseLeave={hideText} />
          <JavaScriptLogo className={styles.javascriptLogo} width={50} onMouseEnter={() => showText(3)} onMouseLeave={hideText} />
          <TypeScriptLogo className={styles.typescriptLogo} width={50} onMouseEnter={() => showText(4)} onMouseLeave={hideText} />
          <ReactJsLogo className={styles.reactLogo} width={50} onMouseEnter={() => showText(5)} onMouseLeave={hideText} />
        </div>
        <div id='toolsandtech-row-2' className={styles.technologiesIconsRow}>
          <MySqlLogo className={styles.mySqlLogo} width={50} onMouseEnter={() => showText(6)} onMouseLeave={hideText} />
          <NextJsLogo className={styles.nextJsLogo} width={50} onMouseEnter={() => showText(7)} onMouseLeave={hideText}/>
          <GitLogo className={styles.gitLogo} width={50} onMouseEnter={() => showText(8)} onMouseLeave={hideText}/>
          <NodeJsLogo className={styles.nodeJsLogo} width={50} onMouseEnter={() => showText(9)} onMouseLeave={hideText}/>
          <WordPressLogo className={styles.wordpressLogo} width={50} onMouseEnter={() => showText(10)} onMouseLeave={hideText}/>
          <AdobephotoshopLogo className={styles.adobephotoshopLogo} width={50} onMouseEnter={() => showText(11)} onMouseLeave={hideText}/>
        </div>
        <div id='toolsandtech-row-2' className={styles.technologiesIconsRow}>
          <NestJsLogo className={styles.nestJsLogo} width={50} onMouseEnter={() => showText(12)} onMouseLeave={hideText}/>
          <TailwindCSSLogo className={styles.tailwindCSSLogo} width={50} onMouseEnter={() => showText(13)} onMouseLeave={hideText}/>
          <PostgreSQLLogo className={styles.postgreSQLLogo} width={50} onMouseEnter={() => showText(14)} onMouseLeave={hideText}/>
          <PythonLogo className={styles.pythonLogo} width={50} onMouseEnter={() => showText(15)} onMouseLeave={hideText}/>
        </div>
      </Fade>
    </div>
  )
}