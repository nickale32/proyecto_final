import React from "react";

function PersonalInfo(props) {
    return (
      <div className='information--personal'>
        <br/>
        <h3>{props.name}</h3>
        <br/>
        <p className="negrita--parrafo">{props.email}</p>
        <p className="negrita--parrafo">{props.phone}</p>
        <p className="negrita--parrafo">{props.address}</p>
        <p>{props.ownDescription}</p>
      </div>
    );
}
const myInfo = {
    name: 'Edwin Camilo Valencia Bustamante',
    email: 'edcamilo2016@gmail.com',
    phone: '+57 313-5606-342',
    address: 'Manizalez-Caldas-Colombia',
    ownDescription: 'Apasionado con el constante aprendizaje, con el objetivo de sacar cada proyecto adelante, capaz de dar lo mejor de mi para el bien personal y comun, disfruto de mi crecimiento como persona, capaz de aceptar errores y iniciativa de mejorarlos.'
  };


function CurriculumInfoMain(props) {
    return(
      <div>
        <PersonalInfo
        name={props.name}
        email={props.email}
        phone={props.phone}
        address={props.address}
        ownDescription={props.ownDescription}
        />
      </div>
    );
  }

function OfMain(){
    return(
        <div>
            <CurriculumInfoMain
            name={myInfo.name}
            email={myInfo.email}
            phone={myInfo.phone}
            address={myInfo.address}
            ownDescription={myInfo.ownDescription}
            />
        </div>
    );
}

export default OfMain;
