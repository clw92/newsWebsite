import React from 'react'
import Link from 'next/link'
import Nav from "../styled-components/Nav.module.scss"
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from "../components/context/AuthContext";
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Buttons from "../styled-components/Button.module.scss"


export default function Navbar() {

const [auth, setAuth] = useContext(AuthContext);


function logOut() {
   setAuth(null);
   window.location.href = "http://localhost:3000/";

}



    return (
        <div>
            <div className={Nav.nav}>
         <div class={Nav.menu}>
            <Link href="/">
            <svg id={Nav.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 43">
               <g id="Group_40" data-name="Group 40" transform="translate(-57 89)">
                  <rect id="Rectangle_7" data-name="Rectangle 7" width="114" height="43" transform="translate(57 -89)" fill="#fff"/>
                  <g id="Group_12" data-name="Group 12" transform="translate(91.2 -83.762)">
                     <text id="Y" transform="translate(-0.2 11.763)" font-size="12" font-family="YuGothic-Bold, Yu Gothic" font-weight="700">
                        <tspan x="0" y="0">Y</tspan>
                     </text>
                     <text id="L" transform="translate(17.8 11.763)" font-size="12" font-family="YuGothic-Bold, Yu Gothic" font-weight="700">
                        <tspan x="0" y="0">L</tspan>
                     </text>
                     <text id="N" transform="translate(35.8 11.763)" font-size="12" font-family="YuGothic-Bold, Yu Gothic" font-weight="700">
                        <tspan x="0" y="0">N</tspan>
                     </text>
                  </g>
                  <text id="YOUR_LATEST_NEWS" data-name="YOUR LATEST NEWS" transform="translate(85 -56)" font-size="5" font-family="YuGothic-Bold, Yu Gothic" font-weight="700">
                     <tspan x="0" y="0">YOUR LATEST NEWS</tspan>
                  </text>
               </g>
            </svg>
            </Link>
            <a id={Nav.burger} href="#">
               <svg   enable-background="new 0 0 510 510" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg">
                  <g>
                     <path d="m322.5 302.58v-8.414c0-54.681-44.486-99.167-99.167-99.167h-11.666c-54.681 0-99.167 44.486-99.167 99.167v8.414c-17.459 6.192-30 22.865-30 42.42s12.541 36.228 30 42.42v1.747c0 33.544 27.29 60.833 60.833 60.833h88.334c33.543 0 60.833-27.29 60.833-60.833v-1.747c17.459-6.192 30-22.865 30-42.42s-12.541-36.228-30-42.42zm-180-8.413c0-38.139 31.028-69.167 69.167-69.167h11.666c38.139 0 69.167 31.028 69.167 69.167v5.833h-150zm119.167 125.833h-88.334c-16.723 0-30.378-13.383-30.822-30h149.979c-.445 16.617-14.1 30-30.823 30zm45.833-60h-180c-8.271 0-15-6.729-15-15s6.729-15 15-15h180c8.272 0 15 6.729 15 15s-6.728 15-15 15z"/>
                     <path d="m142.5 0v90h-120v420h390v-75h75v-435zm30 36.645 142.28 53.355h-142.28zm-120 443.355v-360h330v360zm405-75h-45v-310.395l-172.28-64.605h217.28z"/>
                  </g>
               </svg>
            </a>
            <ul className={Nav.ul}>
             
               <li>
                  <Link href="/">
                     <a>Home</a>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <a>Articles</a>
                  </Link>
               </li>
             

               {auth ? (
				<>
					<Link href="/dashBoard"><li className={Buttons.dashboard} >DASHBOARD</li></Link>|<li>Welcome {auth.user.email}</li>|<button onClick={logOut}>Log out</button>
				</>
			) : (
				<Link href="/login">Login</Link>
			)}
            
            
              
           
               
             
                  
              
               
            </ul>
         </div>
      </div>
        </div>
    )
}
