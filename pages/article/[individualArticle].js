import React from 'react'
import NewsArticles from "../../styled-components/Article.module.scss"
import Layout from "../../components/layout/Layout"

let url = "https://peaceful-stream-60012.herokuapp.com/articles/";
/*export const getStaticPaths = async () => {
    const res = await fetch (url);
    const data = await res.json();
console.log(data)
    const paths = data.map(article => {
        return {
            params: { individualArticle: article.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}*/

export const getServerSideProps = async (context) => {
    const id = context.params.individualArticle;
  
    const res = await fetch(url + id);
    const data = await res.json();

    return {
        props: {articles:data}
    }

}

export default function Details({articles}) {

console.log(articles.content)
 
    return (
        <Layout>
        <div className={NewsArticles.singelArticle}>
      
        <div className={NewsArticles.singelArticle__item}>
      
           <div>
           
            <h3>{articles.title}</h3>
            <p>
              by <strong> {articles.writer}</strong></p>
            <div className={NewsArticles.label}>
              {articles.label}
            </div>
            <img className={NewsArticles.item__img} src={articles.featureimage.url}></img>
            <div className={NewsArticles.para}>
           
           <div className={NewsArticles.textlead}>
           {articles.textlead}
           </div>

           <div className={NewsArticles.maincontent}>
           {articles.maincontent}
           </div>
         
          </div>
          </div>
          
      
          </div>

      
         
      
      </div>
      </Layout>
    )
}
