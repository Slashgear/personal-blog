import styled from 'styled-components'

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  transition: background 100ms;

  // for hover
  &::before {
    content: '';
    position: absolute;
    width: var(--switch-button-size);
    height: var(--switch-button-size);
    background: var(--font-color);
    opacity: 0;
    border-radius: 50%;
    transition: opacity 100ms;
  }

  &:hover::before {
    opacity: 0.05;
  }

  svg {
    max-width: calc(0.6 * var(--switch-button-size));
    max-height: calc(0.6 * var(--switch-button-size));
    width: 100%;
    height: auto;
    z-index: 1;
    color: var(--icon-inactive-color);
    transition: color 100ms;

    > * {
      transition: color 100ms, transform 200ms, opacity 100ms;
    }
  }

  &:first-child {
    margin-left: var(--switch-padding);
  }
  &:last-child {
    margin-right: var(--switch-padding);
  }
`
