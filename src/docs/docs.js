import React, { useState, useEffect } from 'react';
import Doccomp from "./doccomp/doccomp";
import "./docs.css";
import docinfo from "./docsInfo.json";
import Slides from "../main/slider/slides";
import profs from "./profession.json";
import axios from 'axios';

const Doctors = () => {
  const [docinfonew, setDocinfonew] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/doctors')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://medcenter/doctors');
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

  useEffect(() => {
    const formatDocInfo = () => {
      const formattedDocInfo = [];
      docinfo.forEach((elem, index) => {
        const row = Math.floor(index / 4);
        if (!formattedDocInfo[row]) {
          formattedDocInfo[row] = [];
        }
        formattedDocInfo[row].push(elem);
      });
      setDocinfonew(formattedDocInfo);
    };
    formatDocInfo();
  }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
  console.log("this is the fetch data", data);
  return (
    <div className="bgc">
      <a href="/" className="ttl">Գլխավոր</a>
      <p className="ttl1">/ Բժիշկներ</p>
      <p className="ttls">Բժիշկներ</p>
      <div className="ends">
        <input placeholder="Անուն, ազգանուն" className="names" />
        <div className="searchdocs">
          <Slides data={profs} links="/doctors" />
        </div>
        <button className="srch">
          <img src="searchs.png" className="imgs" />
        </button>
      </div>
      <div className="containerdoc">
        {docinfonew.map((row, index) => (
          <div key={index} className="doccopmrow">
            {row.map((doc, docIndex) => (
              <Doccomp key={docIndex} data={doc} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Doctors;