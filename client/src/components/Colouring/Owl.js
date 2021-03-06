import React, { useState } from "react"
import Palette from "./Palette"
import brushImage from "./brush.png"

const Owl = () => {

    const [fillColors, setFillColors] = useState(Array(30).fill("white"))
    const [currentColor, setCurrentColor] = useState('white')



    const paintColor = (event) => {
        const newColors = [...fillColors]
        newColors[event.target.id] = currentColor
        return setFillColors(newColors)
    }


    return (
        <div id="owl">

            <Palette setCurrentColor={setCurrentColor} currentColor={currentColor} />
            <div id="box-current-color">
            <div id="current-color" style={{ background: currentColor }} ><img className='brush' src={brushImage} /></div>
            </div>

            <div id="svg">
                <svg viewBox="-200 -40 1000 1000" preserveAspectRatio="xMinYMin" width="50em" height="50em" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                    <title>Owl Template</title>
                    <g id="svg_001" transform="translate(0 0)" display="inline">
                        <g id="svg_002" transform="matrix(0.849029 0 0 0.849029 65.2874 25.9633)">

                            <path id="0" fill={fillColors[0]} onClick={paintColor} className="cls-1" d="M220.7,508.46c-19.95,24.55-36.83,50.64-39.9,59.85S159.31,609.75,151.64,619,122.48,648.61,124,655.79s24.42-3,30-6a10,10,0,0,0,2.27-1.65c4.61-4.6-4.12,4.32,0,9.21s35.3-12.28,61.39-43,23-89,23-89Z" transform="translate(-122.43 -24.79)" />
                            <path id="1" fill={fillColors[1]} onClick={paintColor} className="cls-1" d="M379,552c18.21-11.29,22.82,19.74,35.09,35.69s31.33,36.08,81.66,47.5c34.67,7.49,33.57,16,32.74,19.09s-10,9.21-19.24,7.67-23-1.53-39.9-15.34c15.34,18.41,16.88,24.55,10.74,29.16s-9.09,3.07-34.47-21.49c-13.94-12.28-11.32-13-16.82-12.65s-19.87,13.55-26.5,14.63-17.37,7.23-22-2,3-13.35,13.78-17.42,8-12.34,4.78-15.88-32.53-36.84-37.05-51.65S379,552,379,552h0" transform="translate(-122.43 -24.79)" />
                            <path id="2" fill={fillColors[2]} onClick={paintColor} className="cls-1" d="M392.6,640.45c4.85,0,6.14,7.67,3.07,10.74-1.47,1.46-4.36,3.18-7.68,6.14-3.65,3.25-6.14,7.67-7.67,7.67s0-6.14,0-13.81S391.06,640.45,392.6,640.45Z" transform="translate(-122.43 -24.79)" />
                            <path id="3" fill={fillColors[3]} onClick={paintColor} className="cls-1" d="M467.8,660.4c3.07-3.07,10.74,1.53,13.81,6.14s1.54,16.88,1.54,16.88-12.74-7.51-15.35-15.35C466.27,663.47,466.27,661.93,467.8,660.4Z" transform="translate(-122.43 -24.79)" />
                            <path id="4" fill={fillColors[4]} onClick={paintColor} className="cls-1" d="M510.77,648.12c-1.53,3.07,0,6.14,3.07,7.67s13.82,1.54,15.35,1.54,4.61,1.53,4.61,1.53,1.53-1.53-3.07-7.67-7.68-7.67-12.28-7.67S510.77,648.12,510.77,648.12Z" transform="translate(-122.43 -24.79)" />
                            <path id="5" fill={fillColors[5]} onClick={paintColor} className="cls-1" d="M305.11,562.17c26.1-4.6,26.56,19.23,30.16,35.71s7.7,35.38,20.49,47.17,46.86,27.06,51.06,32.72,10.21,14.29,1.83,18.41-16,2.59-26.8-5.09-24.55-18.41-24.55-18.41,24.76,24.53,24.55,29.16-2.66,10.18-9,9.69-21.08-2.58-28.29-18.42-1.08-17.36-16.42-23.5S280.56,671.14,279,665s-.39-15.88,6.14-16.88,27.63-3.07,23-16.88c-7.39-22.18-22.24-61.42-4.6-69.07S305.11,562.17,305.11,562.17Z" transform="translate(-122.43 -24.79)" />
                            <path id="6" fill={fillColors[6]} onClick={paintColor} className="cls-1" d="M361.9,695.7c.62-4.3,9.21-1.54,15.35,4.6s5.26,15.35,5.26,15.35S360.37,706.44,361.9,695.7Z" transform="translate(-122.43 -24.79)" />
                            <path id="7" fill={fillColors[7]} onClick={paintColor} className="cls-1" d="M397.2,680.35c-3.07,1.54-6.14,7.62,0,10.72s6.45-2.39,18.42,6.16c0,0-1.25-10.62-7.68-13.81S400.27,678.82,397.2,680.35Z" transform="translate(-122.43 -24.79)" />
                            <path id="8" fill={fillColors[8]} onClick={paintColor} className="cls-1" d="M291.3,649.65c3.07,1.54,1.54,10.75-3.07,12.28s-15.48,6-15.48,6,1.5-11.93,6.95-15.08S288.23,648.12,291.3,649.65Z" transform="translate(-122.43 -24.79)" />
                            <path id="9" fill={fillColors[9]} onClick={paintColor} className="cls-1" d="M392.6,178.48c65.06,2.55,113.57,3.07,121.24,15.35s12.28,27.62,16.89,50.64,30.69,102.83,9.21,178S435.57,583.66,348.09,594.4s-127.39-6.14-130.46-13.81-15.35-32.23-1.53-78.27,38.13-185.76,49-214.9,12.4-33.74,23.14-59.83S314.32,175.41,392.6,178.48Z" transform="translate(-122.43 -24.79)" />
                            <path id="10" fill={fillColors[10]} onClick={paintColor} className="cls-1" d="M412.55,163.13c-16.78,2.4-41.44,18.42-53.72,21.49s-33.76,21.48-38.37,36.83,4.61,33.77,9.21,43c3.15,6.28,33.62,40.81,38.37,93.62,2.2,24.51-1.24,53.27-15.35,84.41-35.3,82.88-50.65,82.88-59.85,96.69s-21.49,36.84-20,43,7.68,13.82,58.33,6.14S457.06,566.78,515.38,467,509.24,227.59,497,210.71,423.29,161.6,412.55,163.13Z" transform="translate(-122.43 -24.79)" />
                            <path id="11" fill={fillColors[11]} onClick={paintColor} data-name="head shadow" className="cls-1" d="M398.74,255.22c23-9.85,29.16,15.34,58.32,24.55s36.83,12.28,53.71-6.14-12.27-53.71-12.27-53.71l-82.88-52.19L319,189.82,309.72,246l18.42,23,17.55,20.16s20.82-.21,30-7.88S388,259.82,398.74,255.22Z" transform="translate(-122.43 -24.79)" />
                            <path id="12" fill={fillColors[12]} onClick={paintColor} className="cls-1" d="M394.13,295.12c9.21-3.07,17.4,4.34,23,13.81,7.3,12.31,10.75,13.82,20,13.82s30.69-21.49,43-20S500,315.07,498.5,335s-5.75,52.34.19,53S513,377.28,523.05,378s-3.07,41.44-18.41,67.53-63.88,93.77-98.54,105.7c-27.32,9.41-30.39,1.73-30.39-15.15-12.27,16.88-43,35.3-44.5,27.63s5.06-21.49,24-55.25,37.49-87.33,38.19-120.4C401.81,322.75,375.76,302.11,394.13,295.12Z" transform="translate(-122.43 -24.79)" />
                            <path id="13" fill={fillColors[13]} onClick={paintColor} className="cls-1" d="M406.41,43.42c79.81-3.07,145.8,72.13,145.8,124.31s-20,82.88-47.57,86-41.15,11.72-85.81-39.42c-14.1-16.32-13.95-11.23-29.3,5.66s-39.91,66.31-96.69,23c-30.47-23.23-30.76-74.28-24.56-102.83C273.63,115.45,326.6,46.49,406.41,43.42Z" transform="translate(-122.43 -24.79)" />
                            <path id="14" fill={fillColors[14]} onClick={paintColor} className="cls-1" d="M401.81,77.18c36.89-2.21,79.8,9.21,105.9,29.16,18.31,14,22.2,46.39,15,69.43-10.41,33.4-41.11,41.08-58.75,35.77-11.64-3.51-35.18-19.1-35.18-19.1s8.57-14.07,0-29.36-38.12-15.3-45.6,4.65c-4.41,13.82.2,24.56.2,24.56s-18,26.71-56.59,17.19-43.17-61.7-37-81.65S325.07,81.79,401.81,77.18Z" transform="translate(-122.43 -24.79)" />
                            <path id="15" fill={fillColors[15]} onClick={paintColor} data-name="wing base" className="cls-1" d="M317.39,278.24c50.78,11.72,56.79,81.34,55.25,96.69s-15.34,57.25-35.3,86.94-62.92,85-105.89,103.37-39.91,13.81-30.7-32.23,22.46-107.27,23.51-144.95,10.25-86.8,31.74-103.68S297.44,273.63,317.39,278.24Z" transform="translate(-122.43 -24.79)" />
                            <path id="16" fill={fillColors[16]} onClick={paintColor} className="cls-1" d="M303.58,408.69s18.86-3.18,27.41,3.39c15.56,12,4.82,41.12-9,59.54s-64.46,73.67-78.28,76.74-9.21-13.81-6.14-16.88-13.81,18.41-23,12.28,8.35-70.75,13.38-89.86-1.13-77.44,37.27-77.44C294.37,376.46,303.58,408.69,303.58,408.69Z" transform="translate(-122.43 -24.79)" />
                            <path id="17" fill={fillColors[17]} onClick={paintColor} className="cls-1" d="M326.6,318.14s14.62-4.6,21.12,0,24.19,24.72,12.28,69.92c-2.34-4.77-10.08-44.53-21.12-50s-19.86-.36-19.86-.36-7.77-21.12-21.58-27.26-36.35,0-36.35,0S262.54,282.15,299,289C323.53,293.59,326.6,318.14,326.6,318.14Z" transform="translate(-122.43 -24.79)" />
                            <path id="18" fill={fillColors[18]} onClick={paintColor} className="cls-1" d="M312.56,357.51a37.79,37.79,0,0,1,26.1,6.82c12.5,9.06,14,46.4,6.33,60-9.15-34.26-9.18-37.08-18.39-44.76s-20.49-3.07-20.49-3.07-9.56-19.32-22.16-25.77-26.94-4.29-34.35,0,4.62-26.64,37.92-20.46C305.11,333.49,312.56,357.51,312.56,357.51Z" transform="translate(-122.43 -24.79)" />
                            <path id="19" fill={fillColors[19]} onClick={paintColor} className="cls-1" d="M140.89,654.26a258.53,258.53,0,0,0,30.7-26.09,145.34,145.34,0,0,0,15.35-18.42c7.07-10,11.31-18.6,12.27-21.49s.53,4.68-6.13,16.89c-4.16,7.6-14.53,20.66-16.89,23C170.05,634.31,150.1,652.72,140.89,654.26Z" transform="translate(-122.43 -24.79)" />
                            <circle id="20" fill={fillColors[20]} onClick={paintColor} className="cls-1" cx="228.36" cy="129.28" r="25.7" />
                            <circle id="21" fill={fillColors[21]} onClick={paintColor} className="cls-1" cx="238.62" cy="121.45" r="6.47" />
                            <circle id="22" fill={fillColors[22]} onClick={paintColor} className="cls-1" cx="340.4" cy="129.28" r="25.7" />
                            <circle id="23" fill={fillColors[23]} onClick={paintColor} className="cls-1" cx="350.66" cy="121.45" r="6.47" />
                            <path id="24" fill={fillColors[24]} onClick={paintColor} className="cls-1" d="M426.36,170.8c0,3.07-9.21,46-18.42,46S387.48,178.11,388,172.34,394.77,157,406.41,157C418.69,157,426.36,167.73,426.36,170.8Z" transform="translate(-122.43 -24.79)" />
                            <path id="25" fill={fillColors[25]} onClick={paintColor} className="cls-1" d="M407.17,111.6S415.62,80.25,454,63.37,504.64,49.56,518.45,45s28.77-7.67,30.5-20c-1.14,18.42-4.41,24.56-7.48,27.63s1.54,0,3.07,3.07,0,10.74-16.88,18.41-40.49,13.6-57.85,22.15-53.19,45.05-63.4,43.85-36-31.6-55.62-41.12S280.56,74.11,276,64.9s-3.2-13.66-3.2-13.66-7.54-10.89-4.47-23.17c7.67,6.14,7.22,14.1,44.28,20.1s57,19.8,66.22,25.94S406.39,90.78,407.17,111.6Z" transform="translate(-122.43 -24.79)" />
                            <path id="26" fill={fillColors[26]} onClick={paintColor} className="cls-1" d="M473.09,63.17c-3.15,2.39,7,12.48,31.55,4.8s31.24-14.88,34.8-23.55c-6.69,1.07-4.11,2.07-22.53,5.14S481.45,56.84,473.09,63.17Z" transform="translate(-122.43 -24.79)" />
                            <path id="27" fill={fillColors[27]} onClick={paintColor} className="cls-1" d="M343.48,63.37c1.38,2.74-10.74,10.74-35.3,3.07s-32.92-22.9-31-22.58c3.77.61,15.48,5.24,21.21,6.16C313.46,52.45,340.15,56.7,343.48,63.37Z" transform="translate(-122.43 -24.79)" />
                            <path id="28" fill={fillColors[28]} onClick={paintColor} className="cls-1" d="M344.56,75.79s-30.24-3.21-47.12-10.89-21.49-10.74-23-12.27S282,62.9,308.16,70.81,344.56,75.79,344.56,75.79Z" transform="translate(-122.43 -24.79)" />
                            <path id="29" fill={fillColors[29]} onClick={paintColor} className="cls-1" d="M540.61,53.59c4.29-4.77-13,9.78-29.84,14.38s-33.92,8.48-37.68,8.85,23.87.36,42.29-7.31S539.74,54.54,540.61,53.59Z" transform="translate(-122.43 -24.79)" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Owl