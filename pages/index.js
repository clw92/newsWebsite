import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout/Layout';
import HomePage from '../styles/Home.module.scss'
import Buttons from "../styled-components/Button.module.scss"
import NewsArticles from "../styled-components/Article.module.scss"
import filterStyle from "../styled-components/Contact.module.scss"
import Image from 'next/image'
import { useState } from "react"





let url = "https://peaceful-stream-60012.herokuapp.com/articles/"




function Home({data}) {
  // the log here will happen in the browser console
  const [filter, setFilter] = useState("");



  const searchText = (event) => {
    setFilter(event.target.value);
  }

  let dataSearch = data.filter(item => {
    return  item.title.toString().toLowerCase().includes(filter.toString().toLowerCase())||item.writer.toString().toLowerCase().includes(filter.toString().toLowerCase())||item.label.toString().toLowerCase().includes(filter.toString().toLowerCase())
      
  })







 
  return (
   
 <Layout>
    
  <section id="jumpToHome" class="landing">
    <main className={HomePage.landing__container}>
      <div id="home" className={HomePage.landing__content}>
        <div className={HomePage.leadline}>
          <h1>
            YOUR LATEST NEWS
          </h1>
        </div>
          <p>Get the latest news in one place</p>
          <a className={Buttons.CTA} href="#jumpToArticles">Read More</a>
      </div>
    </main>
  </section>

  <div className={NewsArticles.articles}>
    <div id="jumpToArticles" class="articles">
      <h2>YOUR LATEST ARTICLES</h2>
      <input className={filterStyle.input} type="text" placeholder="search by title, writer or category" value={filter} onChange={searchText} />
      
    </div>
    <div className={NewsArticles.articles__gridContainer}>
  
      {dataSearch.map((articles) => {
      return (

      <div className={NewsArticles.article__card}>
          <img className={NewsArticles.article__card__img} src={articles.featureimage.url}></img>
        <div className={NewsArticles.article__card__bottom}>
          <h3>{articles.title}</h3>
          <Link key={articles.id} href={'/author/' + articles.author.id}>
            <p className={NewsArticles.writer} ><button> {articles.writer}</button></p>
          </Link>
          <div className={NewsArticles.label}>
            {articles.label}
          </div>
          <Link key={articles.id} href={'/article/' + articles.id}>
            <a className={Buttons.btnReadMore}>Read More</a>
          </Link>
        </div>
      </div>
    
      ) 
    
      })}
           
    </div>
     </div>
    </Layout>
  );
  
 }



export async function getServerSideProps() {

  const res = await fetch(url)
  const data = await res.json()
  
  return { props: { data } }
}

export default Home;