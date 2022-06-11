import React from 'react';
import './list.css';

function List({data}) {
    // function currentDiv(n) {
    //     showDivs(slideIndex = n);
    //   }
      
      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("backgrounds");
        var dots = document.getElementsByClassName("ulList");
        if (n > x.length) {n = 1}    
        if (n < 1) {n = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[n-1].style.display = "block";  
        dots[n-1].className += " w3-red";
      }
    return (
        <center>

            <div class='slider'>
                {data.map((elem, index) => {
                    return (
                        <div>
                            <input checked id={'slide-' +(index+1)} name='active' type='radio' />
                            <img src={elem} className='slide' />
                            <nav className='dots'>
                                {data.map((elem, indexs)=> {
                                    return <label className='dot' for={'slide-' +(indexs+1)}></label>
                                })}
                                {/* <label class='dot' for='slide-1'></label>
                                <label class='dot' for='slide-2'></label>
                                <label class='dot' for='slide-3'></label>
                                <label class='dot' for='slide-4'></label> */}
                            </nav>
                        </div>
                    )
                })}
            </div>
        </center>
    );
}
export default List