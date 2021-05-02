import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled, { css } from "styled-components"

const GalleryContainer = styled.ul`
  background: var(--clr-grey-1);
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;
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
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 99%, 0% 50%);
  transform: scale(1);
  transition: all 0.25s;

  &:nth-child(5n + 1) {
    grid-column: 2 / span 2;
  }
`

const Gallery = () => {
  return (
    <GalleryContainer>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery1.jpg"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery2.jpg"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery3.jpg"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery1.jpg"
          alt="image"
        />
      </Image>{" "}
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery1.jpg"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery2.jpg"
          alt="image"
        />
      </Image>
      <Image>
        <StaticImage
          width={600}
          height={600}
          src="../images/Gallery/gallery3.jpg"
          alt="image"
        />
      </Image>
    </GalleryContainer>
  )
}

export default Gallery
