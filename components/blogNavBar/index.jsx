
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react";
import styles from '@/styles/components/blogNavBar/NavBar.module.css'

var menu
export default function BlogNavbar() {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false);
    console.log(router.asPath)
    if(showMenu){
        menu=   <div onClick={() => setShowMenu(!showMenu)}  className={styles.modalmenu}>
                    <ul>
                        <a href="/"  rel="noreferrer" >{router.asPath  === "SITE" ? <span><li>SITE</li></span> : <li>SITE</li>}</a>
                        <a href="/blog"  rel="noreferrer" >{router.pathname.includes('/blog') ? <span><li>BLOG</li></span> : <li>BLOG</li>}</a>
                        <a href="/#contato"  rel="noreferrer" >{router.asPath  === "CONTATO" ? <span><li>CONTATO</li></span> : <li>CONTATO</li>}</a>
                        <a href="/#doisdoissec"  rel="noreferrer" >{router.asPath  === "SOBRE" ? <span><li>SOBRE</li></span> : <li>SOBRE</li>}</a>
                    </ul>
                </div>
    }
    else{
        menu=""
    }

  return (
    <nav className={styles.MainNavbar}>
        {menu}
        <div className={styles.ContainerMainNavbar}>
            
            <Link href="/">
                <div className={styles.LogoBlog}>
                {/* Site Cliente */}

                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 85 98"
                >
                <image
                    data-name="Logo arqué"
                    xlinkHref="data:img/png;base64,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"
                ></image>
                </svg>


                </div>
            </Link>
            <div className={styles.navList}>
                <ul>
                    <Link href="/" rel="noreferrer" >{router.asPath  === "SITE" ? <span><li>SITE</li></span> : <li>SITE</li>}</Link>
                    <Link href="/blog"  rel="noreferrer" >{router.pathname.includes('/blog') ? <span><li>BLOG</li></span> : <li>BLOG</li>}</Link>
                    <Link href="/#contato"  rel="noreferrer" >{router.asPath  === "CONTATO" ? <span><li>CONTATO</li></span> : <li>CONTATO</li>}</Link>
                    <Link href="/#doisdoissec"  rel="noreferrer" >{router.asPath  === "SOBRE" ? <span><li>SOBRE</li></span> : <li>SOBRE</li>}</Link>
                </ul>
            </div>

            <div  className={styles.Hambmenu} onClick={() => setShowMenu(!showMenu)}>
                <div className={styles.HambmenuContainer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </nav>
  )
}
