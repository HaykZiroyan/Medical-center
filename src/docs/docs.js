import React, { useState, useEffect } from 'react';
import Doccomp from "./doccomp/doccomp";
import "./docs.css";
import Slides from "../main/slider/slides";
import profs from "./profession.json";
import axios from 'axios';

const Doctors = () => {
  const [docInfo, setDocInfo] = useState([]);
  const [formattedDocInfo, setFormattedDocInfo] = useState([]);

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

  useEffect(() => {
    const formatDocInfo = () => {
      if (!docInfo.length) return;

      const formattedDocInfo = [];
      docInfo.forEach((elem, index) => {
        const row = Math.floor(index / 4);
        if (!formattedDocInfo[row]) {
          formattedDocInfo[row] = [];
        }
        formattedDocInfo[row].push(elem);
      });
      setFormattedDocInfo(formattedDocInfo);
    };
    formatDocInfo();
  }, [docInfo]);

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
        {formattedDocInfo.map((row, index) => (
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