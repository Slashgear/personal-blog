import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet/es/Helmet'
import React from 'react'
import styled from 'styled-components'

import pictureOfMe from '../assets/picture_of_me.jpg'

const title = `Resume | Antoine Caron`
const description = `This is my resume in which you can find some of my professional experiences.`

const Me = styled.img`
  display: block;
  height: 300px;
  width: auto;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    margin: 1.5rem 10px 0;
    float: right;
  }
`

const Resume = styled.div`
  li {
    margin-bottom: 0;
  }
`

export default () => {
  return (
    <Resume
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'var(--textNormal)',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Link to="/">Back to blog</Link>
      <Helmet
        htmlAttributes={{
          lang: 'en_US',

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
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: 'website',
          },
          {
            property: 'og:locale',
            content: 'en_US',
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            property: 'fb:app_id',
            content: '235346886871248',
          },
        ]}
      />
      <h1 style={{ color: 'var(--header)' }}>Antoine Caron</h1>

      <Me src={pictureOfMe} alt="picture of me" />

      <h2>Profile</h2>
      <p>
        Professional Frontend developer with a passion for his job. Very
        involved in the subjects I work on either for myself or for the
        companies I collaborate with. I have expertise in different areas
        related to my job but I love and always want to challenge myself by
        learning new things.
      </p>

      <h2>Professional experiences</h2>

      <h3>M6web / Bedrock Streaming - Frontend Developer</h3>
      <i>Since 2017 as Consultant first, then as an intern, Lyon (France)</i>

      <p>
        I was able to participate in the challenge of migrating a consumer
        video-on-demand streaming platform that has over 16 million active
        users, into a white label platform distributed in multiple countries for
        multiple clients. Thanks to a solid E2E and unit test stack, I was able
        to participate in the development of many user features that are now
        visible on sites like <a href="https://6play.fr">6play</a>,{' '}
        <a href="https://salto.fr">Salto</a>,{' '}
        <a href="https://videoland.com">Videoland</a>. By integrating a team of
        6 developers working in ScrumBan, we were able to improve our product
        while keeping the same code base. The frontend pole to which I belong is
        composed of a hundred developers and directed by{' '}
        <a href="https://twitter.com/kenny_dee">Kenny Dits</a>, I am by my
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
        <li>Integration of a multi-client Atomic Design System.</li>
        <li>
          Maintenance of the stability of the application and implementation of
          a monitoring and alerting stack
        </li>
        <li>Optimization of application performance</li>
        <li>
          Publication of technical articles, Writing of technical documentation
        </li>
        <li>Maintenance of Bedrock's open-source tools</li>
        <li>Leading of technical and transversal subjects to the company</li>
        <li>Training and coaching of junior profiles</li>
        <li>
          Creation of webpack plugins for the management of a white label site
        </li>
        <li>
          Setting up of <i>Bedrock Academy</i> in order to onboard in a simpler
          and faster way the new people of the company.
        </li>
        <li>
          Organization, design and realization of the migration of the project
          infrastructure in AWS with Terraform in discussion with{' '}
          <a href="https://twitter.com/yverry">Yann Verry</a>'s teams.
        </li>
        <li>
          Introduction of SEO solutions to improve the performance of the sites
          and the content of the platforms.
        </li>
        <li>
          Setting up a Cloud based CI/CD process with Jenkins and AWS Codebuild
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
          Accompaniment of students in the professional project: reading resume,
          help them find an internship
        </li>
        <li>Supervision of internships</li>
        <li>Creation of automatic evaluation tools</li>
        <li>Participation to evaluation jury</li>
      </ul>

      <h3>Zenika - IT consultant</h3>
      <i>2016-2019, Lyon (France)</i>
      <p>
        I was a consultant in this service company with which I carried out
        various missions:
      </p>
      <ul>
        <li>
          Supporting clients in the development of resilient and interactive web
          applications.
        </li>
        <li>
          Participate in the animation of the Zenika frontend developers
          community (events, conferences, workshops).
        </li>
        <li>
          Conduct technical trainings for customers (VueJS, Testing subjects,
          Git best practices)
        </li>
      </ul>

      <h2>Education</h2>
      <p>
        I have a degree in computer science engineering from the{' '}
        <a href="https://polytech.univ-lyon1.fr/">
          University Polytechnic School of Lyon
        </a>{' '}
        since 2016. It is in this university, part of the{' '}
        <a href="https://www.univ-lyon1.fr/">Claude Bernard University</a>, that
        I have been invited to give various courses à des niveaux Master 1 or
        Master 2.
      </p>
    </Resume>
  )
}
