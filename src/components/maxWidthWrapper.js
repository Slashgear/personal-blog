import styled from 'styled-components'
import { rhythm } from '../utils/typography'

export const MaxWidthWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: var(--textNormal);
  background: var(--bg);
  transition: var(--bg-transition);
  max-width: 1000px;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
