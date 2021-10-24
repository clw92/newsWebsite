import React from 'react'

import Layout from "../components/layout/Layout"
import ContactStyle from "../styled-components/Contact.module.scss"
import Button from "../styled-components/Button.module.scss"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios'
import useAxios from "../components/hooks/useAxios"
import { useRouter } from 'next/router'
import AuthContext from "../components/context/AuthContext";
import { useContext } from 'react';



const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	writer: yup.string().required("Writer is required"),
	label: yup.string().required("Label is required"),
	
	textlead: yup.string().required("Textlead is required"),

});


export default function editArticles({articles}) {
 
	const [updated, setUpdated] = useState(false);

	

    const [auth, setAuth] = useContext(AuthContext);

   /* const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});*/

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const http = useAxios();

  const router = useRouter()


    async function onSubmit(data) {
       
     
      

		try {
			const response = await http.post();
			console.log("response", response.data);
            setUpdated(true);
        
			
		} catch (error) {
			console.log("error", error);
		
            
		} finally {
		
		}
	}

 
    return (
        <Layout>
            
           <div>
                       
                 <section class={ContactStyle.contact}>
                 <form  className={ContactStyle.contactForm__container} onSubmit={handleSubmit(onSubmit)}>
                 {updated && <div className={Button.success}>The post was updated</div>}
                 {errors.content && <span className={Button.warning__mod}>{errors.content.message}</span>}
            
            <label>Title</label>
            <input {...register('title', { required: true })} />
        
         
            <label>Writer</label>
            <input {...register('writer', { required: true })} d/>
            {errors.writer && <span className={Button.warning__mod}>{errors.writer.message}</span>}
            <label>Label</label>
            <input {...register('label', { required: true })} />
            {errors.label && <span className={Button.warning__mod}>{errors.label.message}</span>}

            <label>Text lead</label>
            <textarea cols="30" rows="10" {...register('textlead', { required: true })} ></textarea>
            {errors.textlead && <span className={Button.warning__mod}>{errors.textlead.message}</span>}

            <label>Content</label>
            <textarea cols="30" rows="10" {...register('maincontent', { required: true })} ></textarea>

            <Media/>
        
          
            <button class={Button.btnReadMore}>CREATE</button>
        
            </form>
        </section>
        </div>


      </Layout>
    )
}

