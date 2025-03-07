import React, { useState, useEffect } from 'react';
import First from './firstrow/li';
import './header.css';
import axios from 'axios';

const Top = () => {
  const [menulist, setmenulist] = useState([]);
  const [formattedmenulist, setFormattedmenulist] = useState([]);
  const [info, setInfo] = useState([
    { name: "Հայաստանի մասին", link: "/about-armenia" },
    { name: "Բժշկական տուրիզմ", link: "/medical-tourism" },
    { name: "Գլխավոր", link: "/" },
    { name: "Պացիենտի համար", link: "/for-patient" },
    { name: "Բժշկի համար", link: "/for-doctor" },
    { name: "ՀՏՀ", link: "/faq" }
  ]);
  const [img, setImg] = useState([
    "about-us",
    "our-team",
    "doctors",
    "service",
    "news",
    "gallery",
    "contacts",
    "about-armenia",
    "medical-tourism",
    "for-patient",
    "for-doctor",
    "faq",
    "foreigners",
    "how-to-get-us",
    "why-apply-to-us"
  ]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/menu');
        setmenulist(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctors();
  }, []);



  return (
    <div>
      {img.map((elem) => {
        return window.location.href.includes(elem) ? <img src={`./top/${elem}.jpg`} className="topimg" /> : ""
      })}
      <nav className="firstN">
        <a className="logo" href={"/"}><img className="logos" src="logo.png" /></a>
        <p className="upers">Նաիրի<br />բժշկական կենտրոն</p>
        <div className="abouts">
          {info.map((elem) => {
            return (
              <First text={elem.name} link={elem.link} />
            )
          })}
        </div>
        <select className="lenguages">
          <option id="Հայերեն" value="Հայերեն">Հայերեն</option>
          <option id="English" value="English">English</option>
          <option id="Русский" value="Русский">Русский</option>
        </select>
      </nav>

      <nav className="secondN">
        <ul className="menu">
          {menulist.map((elem) => {
            return (
              <First text={elem.name} link={elem.url} size={'uper'} />
            )
          })}
        </ul>
        <form className="searchTop" method="get" action="https://www.google.com/search">
          <input type="search" name="q" placeholder="Search" className="inpTop" />
          <button type="submit" className="searchbut">
            <img className="search" src="search.png" alt="Search" />
          </button>
        </form>
      </nav>
    </div>
  )
}

export default Top;