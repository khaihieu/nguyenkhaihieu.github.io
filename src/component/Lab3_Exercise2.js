import React, { Component } from 'react'
import { useState } from "react";

function Lab3_Exercise2(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
        return (
         
            <div class="container" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', marginTop: '10px', padding: '7px'}}>
                <div class="rows">
                <div className="container"></div>
              <div id="exTab2" className="container" >	
                <ul className="nav nav-tabs"  style={{marginBottom: '30px'}}>
                  <li className={toggleState === 1 ? "lit active" : "lit"}
                         onClick={() => toggleTab(1)}>
                    <a  data-toggle="tab">Design</a>
                    
                  </li >
                  <li className={toggleState === 2 ? "lit active" : "lit"}
                         onClick={() => toggleTab(2)}>
                             <a  data-toggle="tab">Implement</a>
                  </li>

                </ul>
                <div className="tab-content "style={{padding: '0 10px'}} >
                  <div  className={toggleState === 1 ? "tab-pane active" : "tab-pane"} >
                  <a className="dowloads" style={{color: '#fff'}} href="tenmplate\ex2.html" download>Dowload
                  <i class="fas fa-download" style={{marginLeft: '6px'}}></i>
                  </a>
                  <div className="single-gallery-image" style={{background: 'url(img/b5.png)',    width: '994px' ,height: '428px'}} />
                         </div>
                  <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"}>
                  <a href="tenmplate\ex2.html" target="_blank" className="ex1" style={{color: '#fff', textDecoration: 'none',margin: '0 420px'}}> Go to Implement</a>
                  </div>
              
                </div>
              </div>
              <hr />
          
                </div>
                </div>
            
        )
    };
    export default Lab3_Exercise2;