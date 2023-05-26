import React from "react";

function Habilities(props){
    return(
      <div className='information--habilities'>
        <h4>{props.Habilities}</h4>
        <hr className='linea--hr1'/>
        <ul>
          <li><p>{props.workGroup}</p></li>
          <li><p>{props.responsability}</p></li>
          <li><p>{props.collaboration}</p></li>
        </ul>
      </div>
    );
  }
const myInfoHabilities={
    Habilities:'Habilidades',
    workGroup:'Trabajo en equipo',
    responsability:'Responsabilidad',
    collaboration:'Colaboracion'
  }

function CurriculumHabilities(props){
    return(
        <div>
            <Habilities
            Habilities={props.Habilities}
            workGroup={props.workGroup}
            responsability={props.responsability}
            collaboration={props.collaboration}
            />
        </div>
    );
}
function OfMainHabilities(){
    return(
        <div>
            <CurriculumHabilities
            Habilities={myInfoHabilities.Habilities}
            workGroup={myInfoHabilities.workGroup}
            responsability={myInfoHabilities.responsability}
            collaboration={myInfoHabilities.collaboration}
            />
        </div>
    );
}

export default OfMainHabilities;