import React, { useState, useEffect } from 'react' // Imports the React library and the useState and useEffect hooks from it.
import rgbToHex from './utils' // Imports a utility function called rgbToHex from a local file called utils.js.


// Defines the SingleColor component which receives four props: rgb, weight, index, and hexColor. These props are used to determine the color that will be displayed 
const SingleColor = ({ rgb, weight, index, hexColor }) => { 
  const [alert, setAlert] = useState(false) 
  const bcg = rgb.join(',') //concatenate rgb array values into a string and set the bg color accordingly
  const hex = rgbToHex(...rgb) //converting rgb array values into hexadecimal string
  const hexValue = `#${hexColor}` //defining hex color value as an input
  useEffect(() => { // Will be triggered when state changes. The effect will set alert to false after 3 seconds using a setTimeout function, and it will clear the timeout function using a return statement.
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true) //writing the hexadecimal value to get assign to the bg color
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>} 
    </article>
  )
}

export default SingleColor
