import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  background: var(--clr-grey-1);
  padding: 1rem 0;
`

const GalleryContainer = styled.div`
  line-height:0;
   -webkit-column-count:4;
   -webkit-column-gap:0px; 
   -moz-column-count:4;
   -moz-column-gap:0px;
   column-count:4;
   column-gap:0px;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 800px) {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
   
    img {
    height: 40vw;
    }
   } 
}
`

const GalleryFlex = () => {
  return (
    <Wrapper>
      <GalleryContainer>
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery1.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery2.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery9.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery4.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery5.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery6.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery7.webp"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery8.webp"
          alt="image"
        />
      </GalleryContainer>
    </Wrapper>
  )
}

export default GalleryFlex
