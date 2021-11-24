import styled from 'styled-components'

export const Switcher = styled.span`
  --switch-height: 2.5em;
  --switch-padding: 0.25em;
  --switch-button-size: calc(var(--switch-height) - 2 * var(--switch-padding));
  --standard-easing: cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--font-color);
  width: calc(2 * var(--switch-button-size) + 2 * var(--switch-padding));
  height: var(--switch-height);
  background: var(--switch-background-color);
  box-shadow: var(--switch-shadow);
  position: relative;
  display: inline-flex;
  border-radius: calc(var(--switch-height) / 2);
  transition: background 150ms var(--standard-easing);

  --primary-300: #93c5fd;
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;

  .light-mode & {
    --font-color: var(--grey-600);
    --icon-inactive-color: var(--grey-400);
    --switch-background-color: var(--grey-100);
    --switch-shadow: inset 0px 0px 0.125em rgba(0, 0, 0, 0.06),
      inset 0px 0px 0.0625em rgba(0, 0, 0, 0.04);
    --switch-button-shadow: 0px 0px 0.125em rgba(0, 0, 0, 0.06),
      0px 0px 0.0625em rgba(0, 0, 0, 0.04);
  }

  .dark-mode & {
    --font-color: var(--grey-50);
    --icon-inactive-color: var(--grey-300);
    --switch-background-color: var(--grey-500);
    --switch-shadow: inset 0px 0px 0.125em rgba(0, 0, 0, 0.16),
      inset 0px 0px 0.0625em rgba(0, 0, 0, 0.24);
    --switch-button-shadow: 0px 0px 0.125em rgba(0, 0, 0, 0.16),
      0px 0px 0.0625em rgba(0, 0, 0, 0.14);
  }
`
