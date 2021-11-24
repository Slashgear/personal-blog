import styled from 'styled-components'

export const Button = styled.span`
  width: var(--switch-button-size);
  height: var(--switch-button-size);
  background: var(--bg);
  border-radius: 50%;
  box-shadow: var(--switch-button-shadow);
  position: absolute;
  pointer-events: none;
  left: var(--switch-padding);
  top: calc(50% - var(--switch-button-size) / 2);
  transition: left 150ms var(--standard-easing), background 100ms;

  .dark-mode & {
    left: calc(var(--switch-padding) + var(--switch-button-size));
  }
`
