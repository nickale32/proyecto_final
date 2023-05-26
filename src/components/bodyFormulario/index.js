import React from "react";

function Formulario(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div className="ultimo--contenedor">
      <div className="row">
        <div className="col-12">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="name" name="name" className="form-control" />
                  <label htmlFor="name" className="">
                    {props.YourName}
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="email" id="email" name="email" className="form-control" />
                  <label htmlFor="email" className="">
                    {props.YourEmail}
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control" />
                  <label htmlFor="subject" className="">
                    {props.subject}
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label htmlFor="message">
                    {props.message}
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn--primary">
                {props.send}
              </button>
            </div>
          </form>
          <div className="status"></div>
        </div>
      </div>
    </div>
  );
}

const formularioInfo = {
  YourName: 'Nombre',
  YourEmail: 'Correo',
  message: 'Escribe un mensaje',
  subject: 'Objetivo',
  send: 'Enviar'
};

function CurriculumFormulario(props) {
  return (
    <div>
      <Formulario
        YourName={props.YourName}
        YourEmail={props.YourEmail}
        message={props.message}
        subject={props.subject}
        send={props.send}
      />
    </div>
  );
}

function OfMainFormulario() {
  return (
    <div>
      <CurriculumFormulario
        YourName={formularioInfo.YourName}
        YourEmail={formularioInfo.YourEmail}
        message={formularioInfo.message}
        send={formularioInfo.send}
        subject={formularioInfo.subject}
      />
    </div>
  );
}

export default OfMainFormulario;
