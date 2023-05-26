import React from "react";

function PersonalInfo(props) {
  const infoStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif", // Cambia la fuente a tu preferencia
  };

  const nameStyle = {
    fontFamily: "Verdana, sans-serif", // Cambia la fuente a tu preferencia
    fontSize: "24px", // Cambia el tamaño de fuente a tu preferencia
    fontWeight: "bold",
  };

  const paragraphStyle = {
    fontFamily: "Arial, sans-serif", // Cambia la fuente a tu preferencia
    fontSize: "16px", // Cambia el tamaño de fuente a tu preferencia
    fontWeight: "normal",
  };

  return (
    <div className='information--personal' style={infoStyle}>
      <br />
      <h3 style={nameStyle}>{props.name}</h3>
      <br />
      <p className="negrita--parrafo" style={paragraphStyle}>{props.email}</p>
      <p className="negrita--parrafo" style={paragraphStyle}>{props.phone}</p>
      <p className="negrita--parrafo" style={paragraphStyle}>{props.address}</p>
      <p style={paragraphStyle}>{props.ownDescription}</p>
    </div>
  );
}

const myInfo = {
  name: 'Nick Alejandro Villa Galvis',
  email: 'Nickalejandro@gmail.com',
  phone: '+57 322-555-30-82',
  address: 'Manizalez-Caldas-Colombia',
  ownDescription: 'Me gusta el baloncesto, soy alegre, me gusta programar',
};

function CurriculumInfoMain(props) {
  return (
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

function OfMain() {
  return (
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

