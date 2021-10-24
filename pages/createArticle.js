import React from 'react'
import NewsArticles from "../styled-components/Article.module.scss"
import Layout from "../components/layout/Layout"
import ContactStyle from "../styled-components/Contact.module.scss"
import Button from "../styled-components/Button.module.scss"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios'
import useAxios from "../components/hooks/useAxios"
import { useParams } from "react-router-dom";
import { useRouter } from 'next/router'
import Link from 'next/link'



let url = "https://peaceful-stream-60012.herokuapp.com/articles/";
const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});
/*export const getStaticPaths = async () => {
    const res = await fetch (url);
    const data = await res.json();

    const paths = data.map(article => {
        return {
            params: { createArticle: article.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}*/

/*export const getStaticProps = async (context) => {
    const id = context.params.createArticle;
  
    const res = await fetch(url + id);
    const data = await res.json();

    return {
        props: {articles:data}
    }

}*/




export default function editArticles({articles}) {
    const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);


    const schema = yup.object().shape({
        title: yup.string().required("Title is required"),
        writer: yup.string().required("Writer is required"),
        label: yup.string().required("Label is required"),
        content: yup.string().required("Content is required"),
    
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const http = useAxios();

 



  

    async function onSubmit(data) {
	
        console.log(data)


		try {
			const response = await http.post(data);
			console.log("response", response.data);
    
			
		} catch (error) {
			/*console.log("error", error);
			setUpdateError(error.toString());*/
		} finally {
		
		}
	}

 
    return (
        <Layout>
            
     
           <div>
                       
                 <section class={ContactStyle.contact}>
                 <form  className={ContactStyle.contactForm__container} onSubmit={handleSubmit(onSubmit)}>
                 {updated && <div className={Button.success}>Post was created</div>}
            
            <label>Title</label>
            <input {...register('title', { required: true })}  />
            {errors.title && <span className={Button.warning__mod}>{errors.title.message}</span>}
         
            <label>Writer</label>
            <input {...register('writer', { required: true })} />
            {errors.writer && <span className={Button.warning__mod}>{errors.writer.message}</span>}
            <label>Label</label>
            <input {...register('label', { required: true })}/>
            {errors.label && <span className={Button.warning__mod}>{errors.label.message}</span>}
            <label>Content</label>
            <textarea cols="30" rows="10" {...register('content', { required: true })}></textarea>
            {errors.content && <span className={Button.warning__mod}>{errors.content.message}</span>}
            <button class={Button.btnReadMore}>POST</button>
        
            </form>
        </section>
        </div>



      </Layout>
    )
}

