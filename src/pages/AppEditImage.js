import { useEffect, useState } from 'react';
import Buttons from '../components/app_editImage/settings/Buttons';
import Previsu from '../components/app_editImage/Previsu'
import BigImage from '../components/app_editImage/BigImage';
import Settings from '../components/app_editImage/settings/Settings';
import Filter from '../components/app_editImage/settings/Filter';
import Size from '../components/app_editImage/settings/Size';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppEditImage = () => {

  // select the type of setting. (setting by buttons)
  const [mode, setMode] = useState("réglages")

  //image import by user
  const [imageSrc, setImageSrc] = useState("")

  //to set the size and the position of the image
  const [size, setSize] = useState({width : 0, height : 0, posX: 50, posY: 50})

  // to set "settings" of the image
  const [settings, setSettings] = useState({brightness: 100, contrast: 100, saturate: 100, color: 0})

  //filter section
  const [filter, setFilter] = useState({blur: 0, mirror: false, sepia: 0, border: 0, negative: false})

  //to change the position of the main bloc
  const [mainPosition, setMainPosition] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
        <h1>Retouche Image</h1>
        <div className='appEditImage'>
          <div className='main-cont '>
              <section className='main '>
                  <div className={mainPosition ? "main__elem main--detached" : "main__elem"}>
                      <i className=" detached-icon fa-solid fa-arrow-up-right-from-square" onClick={()=>setMainPosition(!mainPosition)}></i>
                      <Buttons mode={mode} setMode={setMode} />
                      {mode == "réglages" && <Settings settings={settings} setSettings={setSettings} />}
                      {mode == "filtres" && <Filter filter={filter} setFilter={setFilter} />}
                      {mode == "taille" && <Size size={size} setSize={setSize} />}
                  </div>

                  <div className='main__elem'>
                      <Previsu imageSrc={imageSrc}  setImageSrc={setImageSrc} setSize={setSize} size={size} settings={settings}/>
                  </div>
              </section>
          </div>

          {
            imageSrc && <BigImage imageSrc={imageSrc} size={size} settings={settings} filter={filter} />
          }
        </div>
      <Footer />
    </>
  );
};

export default AppEditImage;