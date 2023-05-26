import './App.css';
import miCara from './components/imagenes/perfil.png';
import OfMain from "./components/body";
import OfMainAboutMeDes from "./components/bodyAboutMeDes";
import logo from './components/imagenes/1200px-Los_Angeles_Lakers_logo.svg.webp';
import OfMainTitles from './components/bodyMyTitles';
import OfMainWorkExperience from './components/bodyWorkExperience';
import OfMainHabilities from './components/bodyHabilities';
import OfMainLenguages from './components/bodyLenguages';
import OfMainFormulario from './components/bodyFormulario';


function App() {
  return (
    <div className='fondo--main'>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <br />
            <img className="imagen--picture" src={miCara} alt=" " style={{ width: "300px" }} />
            <OfMain className="main--letra" />
            <br />
            <br />
            <br />
            <img className="logos--aplicaciones" src={logo} alt=" " />
          </div>
          <div className="col-2" />
          <div className="col-5">
            <div className="row">
              <OfMainAboutMeDes />
              <br />
              <OfMainTitles />
              <br />
              <OfMainWorkExperience />
              <br />
              <OfMainHabilities />
              <br />
              <OfMainLenguages />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <OfMainFormulario />
    </div>
  );
}
export default App;








