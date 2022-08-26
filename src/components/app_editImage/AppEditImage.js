import React from 'react';
import { useState } from 'react';
import Buttons from './settings/Buttons';
import Previsu from './Previsu'
import { useEffect } from 'react';
import BigImage from './BigImage';
import Settings from './settings/Settings';
import Filter from './settings/Filter';
import Size from './settings/Size';

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



  return (
    <div className='appEditImage'>
      <h1>Retouche Image</h1>

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
  );
};

export default AppEditImage;