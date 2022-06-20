import './App.css';
import React from 'react';
import Top from './header/header';
import Footer from './footer/footer';

import Generals from './main/general';
import About from './aboutus/aboutus';
import Team from "./ourTeam/ourTeam";
import Doctors from "./docs/docs";
import Services from "./services/services";
import News from "./news/news";

import Gallery from "./Gallery/Gallery";
import GalleryImgs from "./Gallery/galleryimg/galleryimg"

import Contacts from "./contacts/contacts"
import { Routes, Route, Link } from 'react-router-dom';
// import Docnum from './docs/docnumber/docnumber';
import Docnums from './docs/docnumber/docnumbers';
import Docroutes from "./docs/docroutes"
import docinfo from "./docs/docsInfo.json";

import gallerys from "./Gallery/gallery-pics.json"

import Armenia from "./armenia/armenia"

import Medtour from "./medicaltour/medicaltour"

import Patient from "./patient/patient"

import Fordoctor from "./fordoctor/fordoctor"

import Faq from "./faq/faq"

import Foreginers from "./foreginers/foreginers"

import Apply from "./apply/apply"

import Patientedu from "./patientedu/patientedu"

import Getus from "./getus/getus"

import Patstory from "./patstory/patstory"

import Secondopinion from "./opinion/opinion"

import Galleryvideo from "./Gallery/galleryvideo"

function App() {
  
  return (
    <>
        <Top />
          <Routes>
            <Route path="/" element={ <Generals />} />
            <Route path="/about-us" element={ <About />} />
            <Route path="/our-team" element={ <Team />} />
            <Route path="/doctors" element={ <Doctors />} />
          
            <Route path="doctors/:id" element={ <Docnums />} />
          {/* <Route path="doctors/98" element={ <Docnums />} /> */} 
          {/* {docinfo.map((elem) => {
            return <Route path={elem.link} element={ <Docnums data={elem} />} /> 
          })} */}

            <Route path="/service" element={ <Services />} />
            <Route path="/news" element={ <News />} />

            <Route path="/gallery" element={ <Gallery />} />
            <Route path="/gallery/images" element={ <GalleryImgs />} />
            <Route path="/gallery/videos" element={ <Galleryvideo />} />

            {/* {
              gallerys.map((elem) => {          
                return <Route path={`/gallery/images/${elem.link}`} element={ <Subgalleryimg data={elem.link} /> } />
              }) 
            } */}


            <Route path="/payment" element={ <Generals />} />
            <Route path="/contacts" element={ <Contacts />} />

            <Route path="/for-patient" element={ <Patient />} />
            <Route path="/for-patient/education" element={ <Patientedu />} />

            <Route path="/about-armenia" element={ <Armenia />} />

            <Route path="/medical-tourism" element={ <Medtour />} />
            <Route path="/patient-support" element={ <Medtour />} />

            <Route path="/for-doctor" element={ <Fordoctor />} />

            <Route path="/faq" element={ <Faq />} />

            <Route path="/foreginer" element={ <Foreginers />} />
            
            <Route path="/why-apply-to-us" element={ <Apply />} />

            <Route path="/how-to-get-us" element={ <Getus />} />

            <Route path="/patient-stories" element={ <Patstory />} />
            
            <Route path="/second-opinion" element={ <Secondopinion />} />
            {/* why-apply-to-us */}
        
        </Routes>
          {/* <Route path="/slider" component={Slider} /> */}

          
        <Footer />

    </>

  );
}

export default App;
