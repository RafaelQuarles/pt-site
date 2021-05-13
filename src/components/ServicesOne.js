import React from "react"
import Title from "./Title"
import services from "../constants/onlineservices"

import styled, { css } from "styled-components"

const ServiceContainer = styled.section`
  background: var(--clr-grey-1);
  padding: 1rem 2rem;
  margin: 0 auto;
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    padding: 2rem 15vw 1rem 15vw;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 20vw 1rem 20vw;
  }
`

const Service = styled.article`
  background: var(--clr-grey-1);
  color: var(--clr-grey-10);
  padding: 1rem 0rem;
  margin-bottom: 2rem;
  border-radius: 0;
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);

  @media screen and (min-width: 1000px) {
    border-radius: var(--radius);
    padding: 1rem 1.5rem;
  }
`

const Underline = styled.div`
  width: 4rem;
  height: 0.1rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
  }
`

const ServiceTitle = styled.h4`
  font-size: 19px;
  line-height: 1.25;
  letter-spacing: 1.5px;
  font-weight: 700;
`

const ServiceText = styled.p`
  color: var(--clr-grey-5);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow-wrap: break-word;
  -webkit-transition: var(--transition);
  transition: var(--transition);
`

const ServicesOne = () => {
  return (
    <ServiceContainer>
      <Title title="About Program" />

      {services.map(service => {
        const { id, icon, title, text } = service

        return (
          <Service key={id}>
            {/* {icon} */}
            <ServiceTitle>{title}</ServiceTitle>
            <Underline />
            <ServiceText>{text}</ServiceText>
          </Service>
        )
      })}
    </ServiceContainer>
  )
}

export default ServicesOne
