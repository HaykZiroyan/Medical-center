import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
// import docinfo from "../docsInfo.json";
import "./docnumbers.css";
// import calls from "./contacts/call.png";
// import advice from "./contacts/advice.png";
import check from "./contacts/check-in.png";
import messege from "./contacts/messege.png";
import opinion from "./contacts/opinion.png";

import Slider from "../../slider/slider"

import Recaptcha from "react-recaptcha";
import Recaptchas from "./recaptchas.js"

function Docnums()  { 
   const [docinfo, setDocInfo] = useState([]);
   useEffect(() => {
      const fetchDoctors = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/doctors');
          setDocInfo(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchDoctors();
    }, []);
      return (
         <div className="docpages">
            <div className="leftpart">
               <a href="/" className="ttl">Գլխավոր /</a>
               <a href="/doctors" className="ttl">Բժիշկներ</a>
               <span className=""> / 
               {
                   docinfo.map(elem => {
                     if (elem.id == window.location.pathname.split('/').slice(-1)[0]) {
                        return (
                           elem.name
                        )
                     }
                  })
               }
               </span>

            {
               // console.log(window.location.pathname.split('/').slice(-1))
               docinfo.map(elem => {
                  if (elem.id == window.location.pathname.split('/').slice(-1)[0]) {
                     return (
                        <div key={elem.id} className='doctorelem'>
                           <div className='profile'> 
                              <img src={elem.profile} className='profileimg'/>
                           </div>
                           <div className='docinfo'>
                              <h4>{elem.name}</h4>
{
                             elem.profession ?
                                
                                <div className='seperate'>
                                   <p className='details'>Մասնագիտություն </p>
                                   <p className='info'> {elem.profession}</p>
                                </div>
                                :""
                          }
                          {
                           elem.position ? 
                              <div className='seperate'>
                                 <p className='details'>Պաշտոն </p>
                                 <p className='info'> {elem.position}</p>
                              </div>   :""
                          }
                             
                           </div>
                        </div>
                     )
                  }
               })
               

               // docinfo.map((elem) => {
               // if(elem.link == (window.location.pathname).substring((window.location.pathname).lastIndexOf("/") + 1, (window.location.pathname).length)) {
               //    return   <div className="leftpart">
               //                <a href="/" className="ttl">Գլխավոր</a>

               //             </div>
               // }})
            }
            </div>

            <div className="rigthpart">
               <ul className="conts">
                  <li>
                     <a href="tel:+37410537500">
                        <img src={require("./contacts/call.png")} />
                        +374 10 53 75 00
                     </a>
                  </li>
                  <li>
                     <a href="#">
                     {/* onclick function */}
                     <img src={messege} />
                     Հաղորդագրություն 
                     </a>
                  </li>
                  {/* <li>
                     <a href="#">
                        <img src={require("./contacts/advice.png")} />
                        Խորհրդատվություն  
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <img src={check} />
                        Գրանցվել ընդունելության   
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <img src={opinion} />
                        Երկրորդ կարծիք   
                     </a>
                  </li> */}
               </ul>
               {/* <p>Մեկնաբանություններ</p>
               <input placeholder="Անուն Ազգանուն" /> <br />
               <input placeholder="Էլ հասցե" /> <br />
               <input placeholder="հեռախոս" /> <br />
               <textarea placeholder="թողնել մեկնաբանություն" /> */}
               {/* <Recaptchas /> */}
               {/* captcha */}
               <br />
               {/* <div className="btn">ուղարկել</div> */}

            </div>
         </div>


      )
   // }
}
export default Docnums