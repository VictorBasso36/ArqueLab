import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import BlogNavbar from '../../../components/blogNavBar'
import BlogTitle from '../../../components/blogTitle'
import BlogPostList from '../../../components/blogPostList'
import BlogFooter from '../../../components/blogFooter'
import axios from 'axios';
const domain = 'https://www.arquelab.com.br/';
const postsPerPage = 4;

export default function blog({posts, totalPages}) {
  return (
    <>
      <Head>
        <title>Blog Arqué Lab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
        <link rel="icon" type="image/x-icon" href="/src/img/logonavbarsiimple.png"></link>
      </Head>
      <BlogNavbar/>
      <main>
        <BlogTitle></BlogTitle>
        <BlogPostList posts={posts} totalPages={totalPages}/>
      </main>


      <BlogFooter/>
    
    </>
  )
}
export async function getStaticProps() {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/blog/showAll', { domain });
    const posts = response.data;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    console.log("meu teste")
    return {
      props: {
        posts,
        totalPages,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os posts', error);
    return {
      props: {
        posts: [],
        totalPages: 0,
        error: true,
      },
      revalidate: 1,
    };
  }
}
