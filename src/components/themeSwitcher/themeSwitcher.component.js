import React, { useCallback } from 'react'
import useDarkMode from 'use-dark-mode'
import useSound from 'use-sound'

import { Moon } from './icon/moon'
import { Sun } from './icon/sun'

import { Switcher } from './styles/switcher.component'
import { Button } from './styles/button.component'
import { Input } from './styles/input.component'
import { Label } from './styles/label.component'
import { VisuallyHidden } from '../visuallyHiddent.component'

export const ThemeSwitcher = () => {
  const darkMode = useDarkMode()
  const [lightOn] = useSound('/switch-on.mp3')
  const [lightOff] = useSound('/switch-off.mp3')
  const updateTheme = useCallback(
    (event) => {
      const theme = event.target.value
      switch (theme) {
        case 'light':
          darkMode.disable()
          lightOn()
          break
        case 'dark':
          darkMode.enable()
          lightOff()
          break
        default:
          break
      }
      window.gtag("event", "click", { category: 'SwitchTheme', label: theme,})
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
          checked={darkMode.value === false}
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
          checked={darkMode.value === true}
          onChange={updateTheme}
        />
        <Button />
        <Moon />
      </Label>
    </Switcher>
  )
}
