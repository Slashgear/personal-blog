import './global.css'
import Typography from 'typography'
import gray from 'gray-percentage'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: ['Montserrat', 'Georgia', 'serif'],
  bodyFontFamily: ['Montserrat', 'Georgia', 'serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 500,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
      color: 'inherit',
      borderLeftColor: 'inherit',
      opacity: '0.8',
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    '@media only screen and (max-width:480px)': {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(1),
      color: 'var(--header)',
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: 'var(--textLink)',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    'a.anchor': {
      boxShadow: 'none',
    },
    hr: {
      background: 'var(--hr)',
    },
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)',
    },
    'p code': {
      fontSize: '1rem',
    },
    // TODO: why tho
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
    'li code': {
      fontSize: '1rem',
    },
    'blockquote.translation': {
      fontSize: '1em',
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
