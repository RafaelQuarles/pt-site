import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"

const GalleryContainer = styled.ul`
  background: var(--clr-grey-1);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
  overflow: hidden;
`

const Image = styled.li`
  z-index: 1;
  grid-column: span 2;
  max-width: 95%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 99%, 0% 50%);
  transform: scale(1);

  &:nth-child(5n + 1) {
    grid-column: 2 / span 2;
  }
  @media screen and (max-width: 1000px) {
    max-width: 130%;
    width: 130%;
  }
`

const GalleryHex = () => {
  return (
    <GalleryContainer>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery1.webp"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery2.webp"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery3.webp"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery4.webp"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery5.webp"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery6.webp"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery7.webp"
          alt="image"
        />
      </Image>
    </GalleryContainer>
  )
}

export default GalleryHex
