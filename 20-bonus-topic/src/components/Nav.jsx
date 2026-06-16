import React from 'react'

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
