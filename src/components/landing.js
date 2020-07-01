import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import TypeWriter from "./typewriter"
import Button from "./Button"
import { Link } from "gatsby"

const LandingContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-flow: column wrap;
  }
  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`

const LandingImage = styled.div`
  flex-basis: 30%;
  @media (max-width: 768px) {
    text-align: center;
  }
  /* background-color: grey; */
  align-self: center;
  flex: 1;
`

const Image = styled(Img)`
  border-radius: 50%;
`

const LandingText = styled.div`
  flex-basis: 70%;
  flex: 3;
`

const Landing = () => {
  const data = useStaticQuery(graphql`
    query LandingQuery {
      avatar: file(absolutePath: { regex: "/john2.jpeg/" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <LandingContainer>
      <LandingImage>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Oluwakeye John"
          style={{ width: "150px", height: "150px" }}
        />
      </LandingImage>
      <LandingText>
        <h1>
          👋 <TypeWriter text="Hi There!" />
        </h1>
        <p>
          Hi, I'm Marc, a happily married, 30-something-year-old full-stack web
          developer 💻I am doing freelance work 🚀 based in Luxembourg 🇱🇺, but I
          do work remotely for international clients.
        </p>
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <Link to="/contact">
            <Button>Hire Me</Button>
          </Link>
          <Button>Download CV</Button>
        </div>
      </LandingText>
    </LandingContainer>
  )
}

export default Landing
