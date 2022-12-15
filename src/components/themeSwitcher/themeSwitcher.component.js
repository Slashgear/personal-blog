import React, {useCallback, useEffect, useState} from 'react'
import useSound from 'use-sound'

import { Moon } from './icon/moon'
import { Sun } from './icon/sun'

import { Switcher } from './styles/switcher.component'
import { Button } from './styles/button.component'
import { Input } from './styles/input.component'
import { Label } from './styles/label.component'
import { VisuallyHidden } from '../visuallyHiddent.component'

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [lightOn] = useSound('/switch-on.mp3')
  const [lightOff] = useSound('/switch-off.mp3')

  useEffect(() => {
      document.body.classList.add('dark-mode');
  }, [])
  const updateTheme = useCallback(
    (event) => {
      const theme = event.target.value
      switch (theme) {
        case 'light':
          setDarkMode(false)
          document.body.classList.add('light-mode')
          document.body.classList.remove('dark-mode')
          lightOn()
          break
        case 'dark':
          setDarkMode(true)
          document.body.classList.add('dark-mode')
          document.body.classList.remove('light-mode')
          lightOff()
          break
        default:
          break
      }
      if(window.gtag) {
          window.gtag("event", "click", { category: 'SwitchTheme', label: theme,})
      }
    },
    [darkMode, lightOn, lightOff]
  )

  return (
    <Switcher role="radiogroup" aria-label="Theme" data-testid="theme-switcher">
      <Label title="light">
        <VisuallyHidden>Switch to light mode</VisuallyHidden>
        <Input
          type="radio"
          name="theme"
          value="light"
          aria-label="light"
          checked={darkMode === false}
          onChange={updateTheme}
        />
        <Button />
        <Sun />
      </Label>

      <Label title="dark">
        <VisuallyHidden>Switch to dark mode</VisuallyHidden>
        <Input
          type="radio"
          name="theme"
          value="dark"
          aria-label="dark"
          checked={darkMode === true}
          onChange={updateTheme}
        />
        <Button />
        <Moon />
      </Label>
    </Switcher>
  )
}
