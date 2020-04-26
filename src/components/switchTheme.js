import React from 'react'
import useDarkMode from 'use-dark-mode'
import Toggle from './toggle'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

export const SwitchTheme = () => {
  const darkMode = useDarkMode(false)

  return (
    <Toggle
      icons={{
        checked: (
          <img
            src={moon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
        unchecked: (
          <img
            src={sun}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
      }}
      checked={darkMode.value}
      onChange={darkMode.toggle}
    />
  )
}
