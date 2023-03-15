import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
const loadScripts = () => {
    const scripts = [
      '/src/js/loader.js',
      '/src/js/reveal.js',
      '/src/js/scrollanimation.js',
      '/src/js/trocacortedasimagens.js',
      '/src/js/navmodalmenu.js',
      '/src/js/hoverseta.js',
      '/src/js/socialmedia.js',
      '/src/js/menuhover.js',
      '/src/js/navbartransform.js'
    ];
    
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  };
export default function Home() {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
      fetch('/oldsite.html')
        .then(response => response.text())
        .then(data => setFileContent(data))
        .catch(error => console.error(error));
    }, []);
    
    useEffect(() => {
      if (fileContent) {
        loadScripts();
      }
    }, [fileContent]);
  return (
    <>
 
      <Head>
          <title>Arqué Lab</title>
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
   
          <meta name="referrer" content="no-referrer-when-downgrade"/>
          <meta name="keywords" content="keywordsHere"/>
          <meta name="description" content="A Arqué.Lab é uma agência de comunicação full service, com know-how tanto para B2B quanto para o B2C. Visando soluções estratégicas, temos foco e comprometimento com resultados desde a primeira etapa da criação." />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
          <meta name="robots" content="index, follow"/>
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"></meta>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="language" content="Portuguese"/>
          <link rel="icon" type="image/x-icon" href="/src/img/logonavbarsiimple.png"></link>
          <meta name="author" content="Amply, Grupo Ousía Arqué, Arqué lab"></meta>
          <meta name="facebook-domain-verification" content="da3asienvqcdm9j8f2dcv6vb20dr9i" />

          <link rel="icon" type="image/x-icon" href="/src/img/logonavbarsiimple.png"/>
          {/* <script key="reveal.js" src="/src/js/reveal.js"></script>
            <script key="scrollanimation.js" src="/src/js/scrollanimation.js"></script>
            <script key="trocacortedasimagens.js" src="/src/js/trocacortedasimagens.js"></script>
            <script key="navmodalmenu.js" src="/src/js/navmodalmenu.js"></script>
            <script key="hoverseta.js" src="/src/js/hoverseta.js"></script>
            <script key="socialmedia.js" src="/src/js/socialmedia.js"></script>
            <script key="menuhover.js" src="/src/js/menuhover.js"></script>
            <script key="navbartransform.js" src="/src/js/navbartransform.js"></script>
            <script key="loader.js" src="/src/js/loader.js"></script>*/}
        </Head> 

      <div
    dangerouslySetInnerHTML={{
      __html: fileContent
      
    }}
  />
    <Link href="/blog">
    </Link>
    </>
  )
}
