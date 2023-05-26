import React from "react";

function Titles(props){
    return(
      <div className='information--degrees'>
        <h4>{props.titles}</h4>
        <hr className='linea--hr1'/>
        <ul>
          <li><p>{props.degree1}</p></li>
          <li><p>{props.school1}</p></li>  
          <li><p>{props.degree2}</p></li>    
          <li><p>{props.date}</p></li>   
        </ul>
      </div>
    );
  }

const myTitles ={
    degree1: 'Bachiller academico',
    degree2: 'Tecnico en instalaciones electricas residenciales',
    school1: 'Instituto Univercitario De Caldas',
    date: '07-12-2019'
}

function CurriculumTitles(props) {
    return(
        <div>
            <Titles
            titles={props.titles}
            degree1={props.degree1}
            school1={props.school1}
            degree2={props.degree2}
            date={props.date}
            />
        </div>
    );
}

function OfMainTitles(){
    return(
        <div>
            <CurriculumTitles
            titles={myTitles.titles}
            degree1={myTitles.degree1}
            school1={myTitles.school1}
            degree2={myTitles.degree2}
            school2={myTitles.school2}
            date={myTitles.date}
            />
        </div>
    );
}

export default OfMainTitles;