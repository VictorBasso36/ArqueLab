import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/components/blogPage/BlogPage.module.css'
import Link from 'next/link'
import BlogNavbar from '../../../../components/blogNavBar'
import BlogFooter from '../../../../components/blogFooter'
import { useRouter } from 'next/router'
import axios from 'axios'
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function blogPost({post, category, random}) {
  const postingBlog = JSON.parse(post.substring(post.indexOf('{')));
  const handleClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);

  }
  return (
    <>  

    

    <Head>
        <title>{postingBlog.title}</title>
        <meta name="referrer" content="no-referrer-when-downgrade"/>
        <meta name="keywords" content="keywordsHere"/>
        <meta name="description" content="description here" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <link rel="icon" type="image/x-icon" href="/src/img/logonavbarsiimple.png"></link>
        <meta name="author" content="Amply, Grupo Ousía Arqué, Arqué lab"></meta>
    </Head>

    <BlogNavbar/>
        <div className={styles.postarea}>
            <div className={styles.MainAreaMenu}>
              <Link href="/blog">
                 <div className={styles.patternbutton}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVR4nO3YMQoCMRBG4TmardVuoWyhF7ew0WMoPAlKLHRLkcy8D9LvTx5bJEKSfgiYgevrbCMzYAFuvF2j0NjmEoXG3lrekQ2w/zL2DhwiGxyLNzs8zBgzHh5mjBkPDzPGjIeHGWPGw8OMMePhUSzjeeXBbYmMeD6Q1xhbdfBcKukG2K38tI6RFY7uvOl0MO/OvNPBvDvzTgfz7sw7Hcy7M+90MO/OvNOhaN7LysPgFMVGnyMzPkefIjtgajfbxgKbf3+PpPirB1J+L/rBDVpYAAAAAElFTkSuQmCC"/>
                 </div>
                 <p>Artigos</p>
              </Link> 
            </div>
       
            <div className={styles.postareacontainer}>
              <div className={styles.divContent}>
                <pre className={styles.BlogConteudoAqui} dangerouslySetInnerHTML={{__html: JSON.parse(postingBlog.content).body}}>
               
                </pre>
                <div className={styles.MySocialMedia}>

                  
                    <div>
                      <svg className={styles.ShareButton}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 64 64"
                        version="1.1"
                        viewBox="0 0 64 64"
                        xmlSpace="preserve"
                      >
                        <circle cx="22" cy="16" r="8"></circle>
                        <circle cx="48" cy="32" r="8"></circle>
                        <circle cx="22" cy="48" r="8"></circle>
                        <path d="M44.25 37.772L28.609 46.997 26.391 43.669 40.922 32.78z"></path>
                        <path d="M27.966 16.733L44.092 28.289 41.929 31.654 24.721 21.78z"></path>
                      </svg>
                    </div>
                  <Link href="https://www.instagram.com/arque.lab/" target="_blank">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                      >
                        <path d="M9.998 3C6.139 3 3 6.142 3 10.002v10C3 23.861 6.142 27 10.002 27h10C23.861 27 27 23.858 27 19.998v-10C27 6.139 23.858 3 19.998 3h-10zM22 7a1 1 0 110 2 1 1 0 010-2zm-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://www.facebook.com/agenciaarquelab" target="_blank">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                      >
                        <path d="M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h10v-9h-3v-3h3v-1.611C16 9.339 17.486 8 20.021 8c1.214 0 1.856.09 2.16.131V11h-1.729C19.376 11 19 11.568 19 12.718V14h3.154l-.428 3H19v9h5a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
                      </svg>
                    </div>
                  </Link>
                  <div onClick={handleClick} style={{cursor: 'pointer'}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO2aMU4CQRSGv0pJjInADShgTwG1lIYaGtTaypNQWgMehCto5Q00HGAjZpNn8goIaHbnwfJ/yWt35tuZnXn7ZkAIIYQQ4oi5AjoVR4sj4AZYAjmwSRAroBspvEwk6uMNuIyaxrl1Yg28VhwfTrofIdxzHVgkaO/JtTcmgMx1YJ5YeEIAmYSr5d694DvOYISvgRdgBlxwBsLhZH8UbgJD4KHCmAIDoBEtfAt8JUxO3m3bDBFuAp8BGdkqSngYIFvEN9COEJ4ECW+sjxL+LxrhHWhKo28YLVpolUbbEtqHUeJBiWRKLbejxIMTTTza7sFFkfzZxaPVoGo1wthP9q7GioJb7YS7dtazrbFZHYWxglnfCmi/xbSRK6XWTngfEkYjjKY0+oY5mUVrHLhKl376cAiDINncrmUkp2FnPamFQ080e3vS0LJHdm5XqsJpJbjAFjKNhRBCCCE4hB8jNE0KUl3tZgAAAABJRU5ErkJggg=="></img>
                  </div>
                     
                </div>
              </div>
              
              <div className={styles.itensRecomendados}>
                <h3>Outros Artigos:</h3>
                {random.map((random, index) => {
                  return(
                    <Link href={"/blog/post/" + random.id}>
                    <div key={index} className={styles.Recomendacao}>
                        <div className={styles.OutrosArtigosPhoto} style={{
                                            backgroundImage: `url('${random.image_url}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'}} >
                        </div>
                        <h4>{random.title}</h4>
                    </div>
                    </Link>
                    
                  )

                })}
                <Link href="https://api.whatsapp.com/send/?phone=5511994740494&text=Ol%C3%A1%21+Naveguei+pelo+site+da+Arqu%C3%A9.Lab+e+j%C3%A1+estou+pronto%28a%29+para+a+minha+abdu%C3%A7%C3%A3o%21+Por+onde+come%C3%A7amos%3F&type=phone_number&app_absent=0" target="_blank">
                  <div className={styles.myContato}>
                    <p>Contato</p> 
                  </div>
                </Link>
                <div className={styles.ConvertHere}>
                  <div className={styles.ConvertHereContainer}>
                    <h2>NEWSLETTER</h2>
                    <p>Assine nossa newsletter e <span>fique por dentro</span> dos nossos lançamentos.</p>
                    <form action=" ">

                      <input type="text" placeholder="Seu Nome" />
                      <input type="email" placeholder="Seu Email"/>
                      <button >Assinar</button>

                    </form>
             

                  </div>
                  </div>
              </div>
            </div>
        </div>
                  {console.log(category)}
        {category != ''  &&

          <>
          <div className={styles.PostRelacionados} >
            <h2>Artigos <br />
            <span>Relacionados</span></h2>

          </div>
          <div className={styles.AllCarders}>
                      {category.map((category, index) => {
                  
                                
                              
                                  return(
                                  <>
                                      <Link key={category.id} style={{textDecoration:"none", color:"unset"}} href={"/blog/post/" + category.id}>
                                      <article className={styles.BlogCarder}>
                                      
                                          
                                          <div className={styles.CardPhoto} style={{
                                              backgroundImage: `url('${category.image_url}')`,
                                              backgroundSize: 'cover',
                                              backgroundPosition: 'center'}} 
                                          >
                                          
                                          </div>
                                          <p>{format(new Date(category.created_at), "d 'de' MMMM, yyyy.", { locale: ptBR })}</p>
                                          <h2>{category.title}</h2>
                                          <p>{JSON.parse(category.content).Descricao}</p>
                                      </article>
                                      </Link>
                                  </>
                                  )
                            
                      })}
          </div>
        </> 
      }
 
    <BlogFooter/>
    </>
  )
}
export async function getStaticPaths() {
  const apiUrl = 'https://amplycms.com.br/api/blog/showAll';
  const response = await axios.post(apiUrl, { domain: 'https://www.arquelab.com.br/' });
  const posts = response.data;

  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const apiUrl = 'https://amplycms.com.br/api/blog/showIndex';
  const response = await axios.post(apiUrl, { id: params.id });
  const post = response.data;
  const dataFetch = JSON.parse(post.substring(post.indexOf('{')))

  let category = [];

  try {
    const apiUrlCategoria = 'https://amplycms.com.br/api/blog/showCategoryDomain';
    const responseCategoria = await axios.post(apiUrlCategoria, { 
      domain: dataFetch.domain,
      categoria: dataFetch.categoria
    });
    category = responseCategoria.data;
  } catch (error) {
    console.error(error);
  }

  

  let random = []
  try{
    const apiUrlrandom = 'https://amplycms.com.br/api/blog/showAllRandom';
    const responserandom = await axios.post(apiUrlrandom, { 
      domain: dataFetch.domain,
    });
    random = responserandom.data
  } catch (error) {
    console.error(error);
  }



  return {
    props: {
      post,
      category,
      random
    }
  }
}

