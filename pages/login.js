import React from 'react'
import Layout from '../components/layout/Layout'
import ContactStyle from "../styled-components/Contact.module.scss"
import Button from "../styled-components/Button.module.scss"
import axios from 'axios'
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../components/context/AuthContext";



let url = "https://peaceful-stream-60012.herokuapp.com/auth/local";



const schema = yup.object().shape({
	identifier: yup.string().required("Username is required"),
	password: yup.string().required(" Password is required"),
});


export default function login() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const [submitting, setSubmitting] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true)
        setLoginError(null)

        try {
		    const response = await axios.post(url,data);
			setAuth(response.data)
            
            if(response) {
                
                window.location.href = "ttps://peaceful-stream-60012.herokuapp.com/dashBoard";
        }
            
		} catch (error) {
            if(!auth){
                setLoginError(true)
            }
          } finally {
			setSubmitting(false)
        }
    }

   
   
    
    return (
        <Layout>
            <div>
                <section className={ContactStyle.contact}>

                <form  className={ContactStyle.contactForm__container} onSubmit={handleSubmit(onSubmit)}>

                <h1>Dashboard login</h1>
                {loginError && <div className={Button.warning}>Wrong credentials </div>}
                <input {...register('identifier', { required: true })} />
                {errors.identifier && <span className = {Button.warning__mod} >{errors.identifier.message}</span>}


                <input type="password" {...register('password', { required: true })} />
                {errors.password && <span span className = {Button.warning__mod}>{errors.password.message}</span>}

                <a href=""><button className={Button.btnReadMore} >{submitting ? "Loggin in..." : "Login"}</button></a>
                </form>
                </section>
            </div>
        </Layout>
    )
}







