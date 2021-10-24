import React from 'react'
import NewsArticles from "../../styled-components/Article.module.scss"
import Layout from "../../components/layout/Layout"
import Link from 'next/link'
import Buttons from "../../styled-components/Button.module.scss"

let url = "https://peaceful-stream-60012.herokuapp.com/authors/";
export const getStaticPaths = async () => {
    const res = await fetch (url);
    const data = await res.json();

    const paths = data.map(article => {
        return {
            params: { individualAuthor: article.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps= async (context) => {
    const id = context.params.individualAuthor;
    
  
    const res = await fetch(url + id);
    const data = await res.json();
    
   

    return {
        props: {data:data}
    }

}



    
 
export default function Details({data}) {
    console.log(data)

    return (
   
        <Layout>
           
       
           <div className={NewsArticles.articles}>
             <div className={NewsArticles.articles__gridContainer}>
            
               {data.articles.map((articles) => {
             return (
       
                <div className={NewsArticles.article__card}>
            
                <img className={NewsArticles.article__card__img} src={articles.featureimage.url}></img>
             
             
         
                <div className={NewsArticles.article__card__bottom}>
                 <h3>{articles.title}</h3>
     
            
     
                  <p> by <strong> {articles.writer}</strong></p>
        
     
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