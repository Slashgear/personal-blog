import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'

const title = 'Resume | Antoine Caron'
const description =
  'This is my resume in which you can find some of my professional experiences.'

const Me = styled(Img)`
  display: block;
  height: 300px;
  width: auto;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    margin: 1.5rem 10px 0;
    float: right;
  }

  @media print {
    float: right;
    height: 200px;
  }
`

const GoBackToSite = styled(Link)`
  @media print {
    display: none;
  }
`

const ResumeWrapper = styled.div`
  ul {
    margin-left: 30px;
  }

  li {
    margin-bottom: 0;
  }

  i {
    font-weight: bold;
  }

  @media print {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }
  }

  @page {
    margin: 0.5cm;
  }
`

const Resume = () => {
  const picture = useStaticQuery(graphql`
    {
      img: file(
        relativePath: { eq: "picture_of_me.jpg" }
        sourceInstanceName: { eq: "static_images" }
      ) {
        childImageSharp {
          fixed(quality: 60, height: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <ResumeWrapper
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'var(--textNormal)',
        maxWidth: '1100px',
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <GoBackToSite to="/">Back to blog</GoBackToSite>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          prefix:
            'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#',
        }}
        title={title}
        meta={[
          {
            property: 'og:site_name',
            content: 'Antoine Caron',
          },
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:locale',
            content: 'en_US',
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
          {
            property: 'fb:app_id',
            content: '235346886871248',
          },
        ]}
      />
      <h1 style={{ color: 'var(--header)' }}>Antoine Caron</h1>

      <Me
        className="picture-of-me"
        loading="lazy"
        fadeIn
        fixed={picture.img.childImageSharp.fixed}
        alt="picture of me"
      />

      <h2>Profile</h2>
      <p>
        Professional Frontend developer passionate about his job. Very involved
        in the subjects I work on either for myself or for the companies I
        collaborate with. I have expertise in different areas related to my job
        but I am always ready to challenge myself and learn new things.
      </p>

      <h2>Professional experiences</h2>

      <h3>M6web / Bedrock Streaming - Frontend Developer</h3>
      <i>Since 2017 as contractor first, then as an employe, Lyon (France)</i>

      <p>
        I was able to participate in the challenge of migrating a consumer
        video-on-demand streaming platform that has over 16 million active
        users, into a white label platform distributed in multiple countries for
        several customers. Thanks to a solid E2E and unit test stack, I
        contributed to the development of many user features that are now
        visible on sites like <a href="https://6play.fr">6play</a>,{' '}
        <a href="https://salto.fr">Salto</a>,{' '}
        <a href="https://videoland.com">Videoland</a>. By integrating a team of
        6 developers working in ScrumBan, we were able to improve our product
        while keeping the same code base. I belong to the frontend pole which is
        composed of a hundred developers directed by{' '}
        <a href="https://twitter.com/kenny_dee">Kenny Dits</a>. I am by my
        experience and my skills brought to interact with people working in
        various contexts from TV to Mobile.
      </p>
      <p>
        The technical stack used is: React with server side rendering, Sass
        (migration to StyledComponent in progress), Monorepo with multi-package
        sharing across platforms, monitoring with NewRelic. We use jest for our
        unit and integration testing, WebdriverIo/CucumberJS for E2E.
      </p>

      <h4>Examples of technical missions</h4>

      <ul>
        <li>Integration of a multi-customer Atomic Design System.</li>
        <li>
          Maintain the stability of the application and implementation of a
          monitoring and alerting stack
        </li>
        <li>Optimization of application performance</li>
        <li>Publication of technical articles</li>
        <li>Writing technical documentation</li>
        <li>Maintain Bedrock's open-source tools</li>
        <li>Leading technical and transversal subjects across the company</li>
        <li>Training and coaching of junior profiles</li>
        <li>
          Creation of webpack plugins for the management of a white label site
        </li>
        <li>
          Setting up of <i>Bedrock Academy</i> for simpler and faster way the
          new people of the company
        </li>
        <li>
          Organization, design and realization of the migration of the project
          infrastructure in AWS with Terraform in discussion with{' '}
          <a href="https://twitter.com/yverry">Yann Verry</a>
          's teams
        </li>
        <li>
          Setting up SEO solutions to improve sites performance and platforms
          content.
        </li>
        <li>
          Defining a Cloud based CI/CD process with Jenkins and AWS Codebuild
        </li>
      </ul>

      <h3>Polytech Lyon - Lecturer/Professor at the University</h3>
      <i>Since 2016, Lyon (France)</i>

      <p>
        Supervision of groups of students (80 per year) in Master 1 and Master 2
        on different themes. Presentation of theoretical courses in the
        amphitheater, or in practical workshops.
      </p>

      <h4>Examples of courses</h4>
      <ul>
        <li>
          "Introduction to frontend development", two days workshop on
          Javascript and VueJS
        </li>
        <li>
          "Software quality and design pattern", 40 hours of course about
          testing, design patterns
        </li>
        <li>
          Introduction to "cloud" and the problematic of "environment", 30 hours
          workshop in order to let student setup CI/CD in the cloud
        </li>
        <li>
          Organization of events to meet students vs. different IT professions
        </li>
        <li>Studies of webservices solutions</li>
      </ul>

      <h4>What did I have to do for this job ?</h4>
      <ul>
        <li>Design and creation of interactive and open source courses</li>
        <li>
          Students support in their professional projects: reading resume, help
          them find an internship
        </li>
        <li>Supervision of internships</li>
        <li>Creation of automatic evaluation tools</li>
        <li>Member of evaluation jury</li>
      </ul>

      <h3>Zenika - IT contractor</h3>
      <i>2016-2019, Lyon (France)</i>
      <p>
        As a contractor in this service company I carried out various missions:
      </p>
      <ul>
        <li>
          Support customers in the development of resilient and interactive web
          applications.
        </li>
        <li>
          Participate in the animation of the Zenika frontend developers
          community (events, conferences, workshops).
        </li>
        <li>
          Lead technical trainings for customers (VueJS, Testing subjects, Git
          best practices)
        </li>
        <li>Conduct technical interviews</li>
      </ul>

      <h2>Education</h2>
      <p>
        I have a degree in computer science engineering from the{' '}
        <a href="https://polytech.univ-lyon1.fr/">
          University Polytechnic School of Lyon
        </a>{' '}
        since 2016. It is in this university, part of the{' '}
        <a href="https://www.univ-lyon1.fr/">Claude Bernard University</a>, that
        I have been invited to give various courses to Master 1 or 2.
      </p>
    </ResumeWrapper>
  )
}

export default Resume
