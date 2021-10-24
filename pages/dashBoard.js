import React from 'react'
import NewsArticles from "../styled-components/Article.module.scss"
import Buttons from "../styled-components/Button.module.scss"
import Layout from '../components/layout/Layout';
import Link from 'next/link'





let url = "https://peaceful-stream-60012.herokuapp.com/articles/";

export default function DashBoard( { data } ) {

 return (

  <Layout>
    
    <div className={NewsArticles.articles}>
      <div id="jumpToArticles" class="articles">
      
      <div className="createNewContainer">
     <h1>DASHBOARD</h1>

     <Link href={'/createArticle'}>
          <a className={Buttons.btnReadMore}>CREATE NEW ARTICLE</a>
          </Link>
   

</div>

       
         </div>
      <div className={NewsArticles.articles__gridContainer}>
  
        {data.map((articles) => {
      return (

<>
     
        
           
        <div className={NewsArticles.article__card}>
            
           <img className={NewsArticles.article__card__img} src={articles.featureimage.url}></img>
        
        
    
           <div className={NewsArticles.article__card__bottom}>
            <h3>{articles.title}</h3>

       

           <Link key={articles.id} href={'/author/' + articles.id}>
             <p> by <strong> {articles.writer}</strong></p>
          </Link>


          <div className={NewsArticles.label}>
              {articles.label}
            </div>
          
      
            <div className={Buttons.deleteUpdate__btns }>
          
          <Link key={articles.id} href={'/delete/' + articles.id}>
          <a className={Buttons.btnReadMore}>DELETE</a>
          </Link>

          <Link key={articles.id} href={'/edit/' + articles.id}>
          <a className={Buttons.btnReadMore}>UPDATE</a>
          </Link>

      </div>

       </div>
        
   
      
      </div>
    </>
      ) 
    
      })}
           
              
     </div>
     </div>

   </Layout>
 )
  


   

  



 
}




export async function getServerSideProps() {
  
    const res = await fetch(url)
    const data = await res.json()
 
   
    return {
       props:  {data:data} 
       } 
  }
  
 
  