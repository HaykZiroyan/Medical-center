import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import docinfo from "../docsInfo.json";
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

      return (
         <div className="docpages">
            {
               docinfo.map((elem) => {
               if(elem.link == (window.location.pathname).substring((window.location.pathname).lastIndexOf("/") + 1, (window.location.pathname).length)) {
                  return   <div className="leftpart">
                              <a href="/" className="ttl">Գլխավոր</a>
                              <a href="/doctors" className="ttl">/ Բժիշկներ</a>
                              <p className="ttl1">/ {elem.name}</p>
                              <p className="ttls">Բժիշկներ</p>
                              <div>
                                 <div> 
                                    <img src={require(("./" + elem.image))} />
                                 </div>
                                 <div>
                                    <p>{elem.name}</p>
                                    <table>
                                          { elem.texts.hasOwnProperty("prof") ? <tr><td className="upercases">Մասնագիտություն</td> <td>{elem.texts.prof}</td></tr> : console.log("no")}
                                          { elem.texts.hasOwnProperty("service") ? <tr><td className="upercases">Ծառայություն</td> <td>{elem.texts.service}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("surgeon") ? <tr><td className="upercases">Վիրաբույժ</td> <td>{elem.texts.surgeon}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("degree") ? <tr><td className="upercases">Գիտական աստիճան</td> <td>{elem.texts.degree}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("title") ? <tr><td className="upercases">Գիտական կոչում</td> <td>{elem.texts.title}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("position") ? <tr><td className="upercases">Պաշտոն</td> <td>{elem.texts.position}</td></tr> : console.log("no")}
                                          { elem.texts.hasOwnProperty("lanuages") ? <tr><td className="upercases">Լեզուներ</td> <td>{elem.texts.lanuages}</td></tr> : console.log("no")}
                                       
                                    </table>
                                 </div>
                                 <div>
                                    <Slider data={elem} />
                                 </div>
                              </div>

                           </div>
               }
            })}
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
                  <li>
                     <a href="#">
                     {/* onclick function */}
                        <img src={require("./contacts/advice.png")} />
                        Խորհրդատվություն  
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        {/* onclick function */}
                        <img src={check} />
                        Գրանցվել ընդունելության   
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        {/* onclick function */}
                        <img src={opinion} />
                        Երկրորդ կարծիք   
                     </a>
                  </li>
               </ul>
               <p>Մեկնաբանություններ</p>
               <input placeholder="Անուն Ազգանուն" /> <br />
               <input placeholder="Էլ հասցե" /> <br />
               <input placeholder="հեռախոս" /> <br />
               <textarea placeholder="թողնել մեկնաբանություն" />
               {/* <Recaptchas /> */}
               {/* captcha */}
               <br />
               <div className="btn">ուղարկել</div>

            </div>
         </div>


      )
   // }
}
export default Docnums