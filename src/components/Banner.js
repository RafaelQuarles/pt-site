import React from "react"
import styled from "styled-components"
import { FaDumbbell } from "react-icons/fa"

const BannerContainer = styled.div`
  background: var(--clr-grey-1);
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 0;
  padding: 0.5rem 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  min-height: 2rem;
`

const BannerText = styled.h4`
  margin: 0;
  font-weight: 100;
`

const BannerIcon = styled.div`
  font-size: 25px;
  margin: 0 0.5rem;
`

const Banner = () => {
  return (
    <BannerContainer>
      <BannerIcon>
        <FaDumbbell />
      </BannerIcon>
      <BannerText> 1-On-1 Online Coaching & Custom Fitness Programs</BannerText>
      <BannerIcon>
        <FaDumbbell />
      </BannerIcon>
    </BannerContainer>
  )
}

export default Banner
