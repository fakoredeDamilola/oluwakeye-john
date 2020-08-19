import React from "react"
import styled from "styled-components"
import Button from "../components/button"
import Card from "../components/card"

const ProjectListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectItem = styled(Card)`
  padding: 2.5rem 10px;
  text-align: center;
`

const ProjectItemHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-family: arial;
`

const ProjectButton = styled(Button)`
  padding: 0.2rem 1rem;
  margin: 0 5px;
`

const projects = [
  {
    name: "Lens Chat",
    description:
      "Lens Chat is a video chat application built with webRTC, socket.io and nodejs",
    live: "https://lens-chat.netlify.app",
  },
  {
    name: "Eaveswall",
    description:
      "A society and campus blog built with Gatsby deployed on Netlify and has dynamism built-in",
    live: "https://eaveswall.com",
  },
  {
    name: "Viz Movies",
    description:
      "A movie website, similar to netflix... Without the download button",
    live: "https://vizmovies.netlify.app",
  },
  {
    name: "Ecommerce App",
    description: "An ecommerce website built with gatsby and snipcart.",
    live: "https://oluwakeye-ecommerce.netlify.app",
  },
  {
    name: "Chat app",
    description:
      "A collaborative project that debut a chat application built with NodeJs and WebSockets",
    live: "https://oluwakeye-chat.herokuapp.com",
  },
]
// 🤐😷🤕🤒🤮🤢🤧🥵🥶😴💤😈👿👹👺💩👻💀☠👽🤖🎃😺😸😹😻😼😽🙀😿😾👐🤲🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌🤘🤟👌🤏👈👉👆👇☝✋🤚🖐🖖👋🤙💪🦾🖕✍🤳💅🦵🦿🦶👄🦷👅👂🦻👃👁👀🧠🦴👤👥🗣👶👧🧒👦👩🧑👨👩‍🦱🧑‍🦱👨‍
const ProjectList = ({ number }) => {
  return (
    <ProjectListContainer>
      {projects.slice(0, number).map((project, index) => (
        <ProjectItem key={index}>
          <ProjectItemHeading>{project.name}</ProjectItemHeading>
          <p>{project.description}</p>
          <ProjectButton
            as="a"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            View Site
          </ProjectButton>
        </ProjectItem>
      ))}
    </ProjectListContainer>
  )
}

export default ProjectList
