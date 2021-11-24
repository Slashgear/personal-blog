import styled from 'styled-components'
import { Button } from './button.component'

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:focus-visible ~ ${Button} {
    box-shadow: 0 0 0 3px var(--primary-300);
  }

  // fallback for older browsers
  &:focus ~ ${Button} {
    box-shadow: 0 0 0 3px var(--primary-300);
  }

  // no focus ring on browsers that support :focus-visible
  &:focus:not(:focus-visible) ~ ${Button} {
    box-shadow: var(--switch-button-shadow);
  }

  &:checked ~ svg {
    color: var(--font-color);
  }

  // ICON SUN

  &[value='light'] {
    ~ svg {
      max-width: calc(0.7 * var(--switch-button-size));
      max-height: calc(0.7 * var(--switch-button-size));
    }

    ~ svg > #sun-rays {
      transform-origin: center;
    }

    &:not(:checked) ~ svg > #sun-rays {
      transform: rotate(45deg);
      transform-origin: center;
      stroke-width: 0.5;
    }
  }

  &[value='light']:checked ~ svg,
  &[value='auto']:checked ~ svg {
    color: #facc15;
  }

  // ICON MOON

  &[value='dark'] {
    ~ svg > .star {
      transform-origin: bottom;
    }

    &:not(:checked) ~ svg > .star {
      transform: rotate(-45deg);
      opacity: 0;
    }
  }

  &:not(:checked) + ${Button} {
    visibility: hidden;

    &:hover {
      visibility: visible;
      opacity: 0.2;
    }
  }
`
