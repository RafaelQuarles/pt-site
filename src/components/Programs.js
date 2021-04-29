import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import programs from "../constants/onlineplans"
import styled, { css } from "styled-components"

const ProgramContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
`

const Program = styled.article`
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  min-height: 328px;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);

  :hover {
    background: var(--clr-grey-1);
    color: var(--clr-primary-9);
    p {
      color: var(--clr-primary-9);
    }
  }

  @media screen and (min-width: 1000px) {
    border-radius: var(--radius);
    padding: 2rem 1rem 1rem 1rem;
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

const ProgramTitle = styled.h4`
  font-size: 19px;
  line-height: 1.25;
  letter-spacing: 1.5px;
  font-weight: 700;
`

const ProgramPrice = styled.p`
  color: var(--clr-grey-1);
  font-size: 20px;
  font-weight: bolder;
  line-height: 0;
  overflow-wrap: break-word;
  -webkit-transition: var(--transition);
  transition: var(--transition);
`

const ProgramText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow-wrap: break-word;
  -webkit-transition: var(--transition);
  transition: var(--transition);
`

const Programs = () => {
  return (
    <section className="section bg-grey">
      <Title title="Coaching Packages" />
      <ProgramContainer className="section-center">
        {programs.map(program => {
          const { id, link, icon, title, price, text } = program

          return (
            <Link to={link}>
              <Program key={id}>
                {icon}
                <ProgramTitle>{title}</ProgramTitle>
                <Underline />
                <ProgramPrice>${price}</ProgramPrice>
                <ProgramText>{text}</ProgramText>
              </Program>
            </Link>
          )
        })}
      </ProgramContainer>
    </section>
  )
}

export default Programs
