import "./assets/styles/index.css";
import mainFoto from "./assets/foto/photo.png";
import { SiteNavbar } from "./sitebar/navbar";
import { SeaArch, DingDong } from "./iconsImgs/iconLogo";
import { Cards } from "./cards/card";
function App() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <SiteNavbar />
          <div className='col-9 mainSection'>
            <header className='d-flex justify-content-between'>
              <a className='logo__main_header  ' href='#'>
                Overview
              </a>
              <div className='logos__dearc_headers '>
                <span>
                  <SeaArch />
                </span>
                <span className='dingDong'>
                  <DingDong />
                </span>
                <span className='fotoMain'>
                  <span className='Jones'>Jones Ferdinand</span>{" "}
                  <img src={mainFoto} />
                </span>
              </div>
            </header>
            <ul className='card-lists list-unstyled '>
              <Cards />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
