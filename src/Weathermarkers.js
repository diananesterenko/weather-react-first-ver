import React, { useState } from "react";
import "./Weathermarkers.css";

export default function Weathermarkers(props){
    const [category, setCategory] = useState('main');
   function chooseCategory(categoryp){
    setCategory(categoryp)
    console.log(category);
    return category;
   }
        let state={
        categories:[
            {
                key:'main',
                name:'Main'
            },{
                key:'sun',
                name:'Sun'
            },{
                key:'wind',
                name:'Wind'
            },
            {
                key:'all',
                name:'All'
            }
        ]
    }
    if(category=='all'){
    return( 
       
        <section className="weather-markers ">
            <div className="categories">
                {state.categories.map(el=>(
                    <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel">
                    <span > Wind <img className='wind' src='https://img.icons8.com/?size=512&id=105029&format=png' alt="wind"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="wind">{props.value.wind} </div>
                </div>
            </div>
        
            <div className="col2 row" >
                <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-droplet" style= {{color: '#212121'}}></i>
                    <span >Humidity<img className='humidity' src='https://img.icons8.com/?size=512&id=sqkiO6Akiuxj&format=png' alt="humidity"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="humidity">{props.value.humidity}</div>
                </div> 
            </div>

            <div className="col2 row" >
                <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-temperature-three-quarters" style= {{color: '#212121'}}></i>
                    <span >Feels like <img className='feels' src='https://img.icons8.com/?size=512&id=37802&format=png' alt="feels"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="feels">{props.value.feels}</div>
                </div>
            </div>
            
            <div className="col2 row">
                <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-sun" style= {{color: '#212121'}}></i>
                    <span >Sunrise <img className='sunrise' src='https://img.icons8.com/?size=512&id=lDDjS4BvtYQu&format=png' alt="sunrise"/></span> 
                </div>
                <div className="col-7">
                    <div className="value" id="sunrise">{props.value.sunrise}</div>
                </div>
            </div>
        
            <div className="col2 row">
                <div className="col-5 markersLabel">
                    <i className="fa-regular fa-moon" style= {{color: '#212121'}}></i>
                    <span >Sunset <img className='sunrise' src='https://img.icons8.com/?size=512&id=3455&format=png' alt="sunset"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="sunset">{props.value.sunset}</div>
                </div>
            </div>
            <div className="col2 row" >
                <div className="col-5 markersLabel" >
                        <i className="fa-solid fa-temperature-three-quarters" style= {{color: '#212121'}}></i>
                        <span >Pressure <img className='feels' src='https://img.icons8.com/?size=512&id=1418&format=png' alt="pressure"/></span>
                </div>
                <div className="col-7">
                        <div className="value" id="feels">{props.value.pressure} hPa</div>
                </div>
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel">
                        <i className="fa-regular fa-moon" style= {{color: '#212121'}}></i>
                        <span >Visibility <img className='feels' src='https://img.icons8.com/?size=512&id=986&format=png' alt="sunset"/></span>
                </div>
                <div className="col-7">
                        <div className="value" id="sunset">{props.value.visibility/1000} km</div>
                </div>
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel">
                    <span > Deg <img className='feels' src='https://img.icons8.com/?size=512&id=11704&format=png' alt="wind"/></span>
                 </div>
                <div className="col-7">
                    <div className="value" id="wind">{props.value.deg} ° </div>
                </div>
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel">
                    <span > Clouds <img className='feels' src='https://img.icons8.com/?size=512&id=650&format=png' alt="wind"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="wind">{props.value.cloud} % </div>
                </div>
            </div>
    </section>
    )}
    if(category=='main'){
    return( 
                       
        <section className="weather-markers ">
            <div className="categories">
                {state.categories.map(el=>(
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
                 ))}
            </div>             
            <div className="col2 row" >
                <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-droplet" style= {{color: '#212121'}}></i>
                    <span >Humidity<img className='humidity' src='https://img.icons8.com/?size=512&id=sqkiO6Akiuxj&format=png' alt="humidity"/></span>
                </div>
                 <div className="col-7">
                     <div className="value" id="humidity">{props.value.humidity}</div>
                </div> 
                </div>
                
            <div className="col2 row" >
                <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-temperature-three-quarters" style= {{color: '#212121'}}></i>
                    <span >Feels like <img className='feels' src='https://img.icons8.com/?size=512&id=37802&format=png' alt="feels"/></span>
                </div>
                <div className="col-7">
                     <div className="value" id="feels">{props.value.feels}</div>
                </div>
            </div>
            <div className="col2 row" >
                 <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-temperature-three-quarters" style= {{color: '#212121'}}></i>
                     <span >Pressure <img className='feels' src='https://img.icons8.com/?size=512&id=1418&format=png' alt="pressure"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="feels">{props.value.pressure} hPa</div>
                    </div>
                </div>
                            
                            
        </section>
    )}
    if(category=='sun'){
    return( 
        <section className="weather-markers ">
            <div className="categories">
                {state.categories.map(el=>(
                    <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
                    ))}
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel" >
                    <i className="fa-solid fa-sun" style= {{color: '#212121'}}></i>
                    <span >Sunrise <img className='sunrise' src='https://img.icons8.com/?size=512&id=lDDjS4BvtYQu&format=png' alt="sunrise"/></span> 
                </div>
                <div className="col-7">
                    <div className="value" id="sunrise">{props.value.sunrise}</div>
                </div>
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel">
                    <i className="fa-regular fa-moon" style= {{color: '#212121'}}></i>
                    <span >Sunset <img className='sunrise' src='https://img.icons8.com/?size=512&id=3455&format=png' alt="sunset"/></span>
                </div>
                <div className="col-7">
                    <div className="value" id="sunset">{props.value.sunset}</div>
                </div>
            </div>
            <div className="col2 row">
                <div className="col-5 markersLabel">
                    <i className="fa-regular fa-moon" style= {{color: '#212121'}}></i>
                    <span >Visibility <img className='feels' src='https://img.icons8.com/?size=512&id=986&format=png' alt="sunset"/></span>
                </div>
                <div className="col-7">
                     <div className="value" id="sunset">{props.value.visibility/1000} km</div>
                </div>
            </div>
                                           
        </section>
)}
     if(category=='wind'){
        return( 
            <section className="weather-markers ">
                <div className="categories">
                    {state.categories.map(el=>(
                     <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
                    ))}
                 </div>
                <div className="col2 row">
                    <div className="col-5 markersLabel">
                        <span > Wind <img className='wind' src='https://img.icons8.com/?size=512&id=105029&format=png' alt="wind"/></span>
                    </div>
                    <div className="col-7">
                    <div className="value" id="wind">{props.value.wind} </div>
                     </div>
                </div>                                         
                <div className="col2 row">
                    <div className="col-5 markersLabel">
                        <span > Deg <img className='feels' src='https://img.icons8.com/?size=512&id=11704&format=png' alt="wind"/></span>
                    </div>
                    <div className="col-7">
                        <div className="value" id="wind">{props.value.deg} ° </div>
                    </div>
                    </div>
                <div className="col2 row">
                    <div className="col-5 markersLabel">
                        <span > Clouds <img className='feels' src='https://img.icons8.com/?size=512&id=650&format=png' alt="wind"/></span>
                    </div>
                    <div className="col-7">
                        <div className="value" id="wind">{props.value.cloud} % </div>
                    </div>
                </div>                                             
            </section>
            )
    }
}