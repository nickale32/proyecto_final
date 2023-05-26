import React from "react";

function AboutMeDes(props) {
  return (
    <div className='information--aboutMe' style={{ textAlign: 'center' }}>
      <br/>
      <h4>{props.aboutMe}</h4>
      <hr className='linea--hr1'/>
      <p>{props.text}</p>
    </div>
  );
}

const myinfoAboutMe = {
  aboutMe: 'PERFIL',
  text: 'estudio en la universidad de Manizales 5º semestre, juego baloncesto, soy asesor comercial',
};

function CurriculumAboutMeDes(props) {
  return (
    <div>
      <AboutMeDes
        aboutMe={props.aboutMe}
        text={props.text}
      />
    </div>
  );
}

function OfMainAboutMeDes() {
  return (
    <div>
      <CurriculumAboutMeDes
        aboutMe={myinfoAboutMe.aboutMe}
        text={myinfoAboutMe.text}
      />
    </div>
  );
}

export default OfMainAboutMeDes;
