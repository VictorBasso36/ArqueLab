
import Link from 'next/link'
import styles from '@/styles/components/blogPostList/PostList.module.css'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';

import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import axios from 'axios'
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const domain = 'https://www.arquelab.com.br/';




export default function PostList(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = props.posts.slice(startIndex, endIndex);
    console.log(currentPosts)
  return (
    <>
        <div className={styles.MainPostList}>
            <div className={styles.ContainerPostList}>
                {currentPosts != '' ?
                // existe posts
                <>
                {currentPosts.map((post, index) => {
                    if(index === 0){
                        return(
                            <>
                            <Link key={index} style={{textDecoration:"none", color:"unset", width: '100%', textDecoration: 'none', color: 'unset'}} href={"blog/post/" + post.id}>
                            <div className={styles.LastedPost}>
                                <div className={styles.LastedPostImg}style={{
                                    
                                    backgroundImage:  `url('${post.image_url}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'}} >
                                   
                                </div>
                                
                                <div className={styles.LastedPostConteudo}>
                                    <p>{format(new Date(post.created_at), "d 'de' MMMM, yyyy.", { locale: ptBR })}</p>
                                    <h2>{post.title}</h2>
                                    <p>{JSON.parse(post.content).Descricao}Descricao aqui</p>
                                </div>
                            </div>
                            </Link>
                            </>
                        )
                        
                    }
                })}
                <div className={styles.AllCarders}>
                    {currentPosts.map((post, index) => {
                
                               
                            if(index != 0){
                                return(
                                <>
                                    <Link key={post.id} style={{textDecoration:"none", color:"unset"}} href={"blog/post/" + post.id}>
                                    <article className={styles.BlogCarder}>
                                    
                                        
                                        <div className={styles.CardPhoto} style={{
                                            backgroundImage: `url('${post.image_url}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'}} 
                                        >
                                        
                                        </div>
                                        <p>{format(new Date(post.created_at), "d 'de' MMMM, yyyy.", { locale: ptBR })}</p>
                                        <h2>{post.title}</h2>
                                        <p>{JSON.parse(post.content).Descricao}</p>
                                    </article>
                                    </Link>
                                </>
                                 )
                          }
                    })}
                </div>
                <div className={styles.paginationHere}>
                    {/* paginação 4 item por pagina */}
                   <Pagination count={props.totalPages} shape="rounded"  onChange={handlePageChange} boundaryCount={1} color="primary" /> 
                </div>
                </>
                :
                //não existe
                <>
                    <h2 className={styles.IfZero}>Em breve diversos artigos por aqui.</h2>
                </>
                }
                {/* loop map baseado nos dados de posts da api, o primerio item de cada pagina é denrizado diferente do resto, a cada paginação sempre vai ser aassim */}
                {/* loop aqui primeiro item */}
            </div>
        </div>
    </>
    
  )
}

