import "./header.scss";
import favicon from "../../../public/favicon.svg";

export default function Header({...props}) {
  return(
    <>
        <header className="header">
        <div className="container">
          <div className="header_header">
            <div className="header_logo">
              <img className="header_img-logo" src={favicon} alt="логотип"/> 
              </div>
            <div className="theme">
              {
                props.theme == "light" && 
                <span className="material-symbols-outlined header_theme-light" onClick={() => { props.hundleSetTheme()}}>
                  light_mode
                </span>
              }
              {
                props.theme == "dark" &&
                <span className="material-symbols-outlined header_theme-dark" onClick={() => { props.hundleSetTheme()}}>
                  dark_mode
                </span>
              }
              </div>
            </div>
          </div>
        </header>
    </>
  );
}