import React, { useState, useEffect } from 'react';
import "./texts.css"
import axios from 'axios';


function Texts () {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/about-us');
            setTexts(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchDoctors();
      }, []);

    var a = 100
    const getids = (id) => {
        document.getElementById(id).classList.add("showen")
        document.getElementById(a).classList.remove("showen")
        document.getElementById(id + 900).classList.add("texted")
        document.getElementById(a + 900).classList.remove("texted")
        a = id
    }
    console.log(texts);
        return (
            <div>
                {texts.map((elem, key) => {
                    return (
                        <table id={key + 100} className={key + 100 ==a ? "aboutus showen" : "aboutus"}>
                            <tr>
                            <td className="text-col">
                                <img className="col-img" src={'/' + elem.image} />
                            </td>
                            <td className="text-col">
                                <p className="titls" href={elem.title}>{elem.title}</p>
                                <p className="abouttexts">{elem.textes}</p>
                            </td>
                            </tr>
                        </table>
                    )
                })}
                <div className="row rows flex">
                    {texts.map((elem, key) => {
                        return (
                            <div id={key + 1000} onClick={() => {getids(key + 100)}} className={key + 100 ==a ? "col cols texted" : "col cols"}>{elem.title}</div>
                        )
                    })}
                </div>
            </div>
        )
}
export default Texts