import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import Card from "../components/Card"

const ProjectsContainer = styled.div`
  margin: 3rem 0;
`

const ProjectsHeading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`

const ProjectList = styled.div`
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

const ButtonWrapper = styled.div`
  text-align: center;
`

const projects = [
  // {
  //   name: "Chat App",
  //   description: "A real-time chat app built with nodejs, socketio.",
  //   live: "https://oluwakeye-chat.netlify.app",
  //   code: "",
  // },
  {
    name: "Eaveswall",
    description: "Eaveswall is a univeristy blogging platform.",
    live: "https://eaveswall.com",
    code: "",
  },
  {
    name: "Video App",
    description:
      "A video chat application built with webRTC, socket.io and nodejs",
    live: "https://lens-chat.netlify.app",
    code: "",
  },
]

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeading>🚀 My Works</ProjectsHeading>

      <ProjectList>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectItemHeading>{project.name}</ProjectItemHeading>
            <p>{project.description}</p>
            <ProjectButton as="a" href={project.live} target="_blank">
              View Site
            </ProjectButton>
            {/* <ProjectButton as="a" href="#">
              View Code
            </ProjectButton> */}
          </ProjectItem>
        ))}
      </ProjectList>
      <ButtonWrapper>
        <Button>View More</Button>
      </ButtonWrapper>
    </ProjectsContainer>
  )
}

export default Projects
