import React, { useState } from 'react';

const Filter = ({ filter, setFilter }) => {
    //-- Bloc scrolling when user use a fadder
    const [blocScroll, setBlocScroll] = useState(true)
    let timer

    const scrollOff = () => {
        if(window.innerWidth < 700) {
            document.querySelector('html').style.overflowY = "hidden"
            clearTimeout(timer) 
            if(blocScroll) {
                timer = setTimeout(() => {
                    setBlocScroll(true)
                    document.querySelector('html').style.overflowY = "scroll"
                }, 300)
            }
            setBlocScroll(false)
        }
    }
    //-- End bloc scrolling
    return (
        <div className='settings'>
            <h2>Filtres</h2>
            <div className='settings--filter'>
                <div className='bloc1'>
                    <label>Effet miroire</label>
                    <div 
                        onClick={() => setFilter({...filter, mirror: !filter.mirror})} 
                        className={filter.mirror ? "checkbox checkbox--active" : "checkbox"}>
                        <div className='elem'>
                            <div className='rec'></div>
                            <div className='circle'></div>
                        </div>
                    </div>
                </div>
                <div className='bloc1'>
                    <label>Négatif</label>
                    <div 
                        onClick={() => setFilter({...filter, negative: !filter.negative})} 
                        className={filter.negative ? "checkbox checkbox--active" : "checkbox"}>
                        <div className='elem'>
                            <div className='rec'></div>
                            <div className='circle'></div>
                        </div>
                    </div>
                </div>

                <div className='blocBigInput'>
                    <label >Effet vieilli : </label>
                    <input 
                        onChange={(e) => setFilter({...filter, sepia: parseInt(e.target.value)})} 
                        onInput={scrollOff}
                        type="range" 
                        min={0} max={100} 
                        value={filter.sepia} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setFilter({...filter, sepia: 0})}></i>
                </div>

                <div className='blocBigInput'>
                    <label >Arrondi : </label>
                    <input 
                        onChange={(e) => setFilter({...filter, border: parseInt(e.target.value)})} 
                        onInput={scrollOff}
                        type="range" 
                        min={0} max={50} 
                        value={filter.border} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setFilter({...filter, border: 0})}></i>
                </div>

                <div className='blocBigInput'>
                    <label >Flou : </label>
                    <input 
                        onChange={(e) => setFilter({...filter, blur: parseInt(e.target.value)})} 
                        onInput={scrollOff}
                        type="range" 
                        min={0} max={10} 
                        value={filter.blur} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setFilter({...filter, blur: 0})}></i>
                </div>
            </div>
        </div>
    );
};

export default Filter;