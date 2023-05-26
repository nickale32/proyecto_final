import React from "react";

function Languages(props) {
  return (
    <div className='information--languages' style={{ textAlign: 'center' }}>
      <hr className='linea--hr1' />
      <h4>{props.languages}</h4>
      <p>{props.Spanish}</p>
      <p>{props.English}</p>
    </div>
  );
}

const myInfoLanguages = {
  languages: 'Idiomas',
  English: 'Español: Avanzado'
};

function CurriculumLanguages(props) {
  return (
    <div>
      <Languages
        languages={props.languages}
        Spanish={props.Spanish}
        English={props.English}
      />
    </div>
  );
}

function OfMainLanguages() {
  return (
    <div>
      <CurriculumLanguages
        languages={myInfoLanguages.languages}
        Spanish={myInfoLanguages.Spanish}
        English={myInfoLanguages.English}
      />
    </div>
  );
}

export default OfMainLanguages;

  