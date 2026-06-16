import React from 'react'

// isme child se property parent me ja raha hai

const Nav = (props) => {

    function themeChanged(){
        props.setTheme('Dark')   
    }

  return (
    <div>
      <button onClick={themeChanged}>Change Theme</button>
    </div>
  )
}

export default Nav
