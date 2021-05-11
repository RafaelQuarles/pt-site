import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  background: var(--clr-grey-1);
  padding: 5rem 0;
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
    filter: grayscale(70%);
    width: 100% !important;
    height: auto !important;
  }
  img:hover {
   filter:none;
  }

  @media screen and (max-width: 800px) {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
   
    img {
    height: 130px !important;
  }
   } 
}
`

const GallerySlide = () => {
  return (
    <Wrapper>
      <GalleryContainer>
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery1.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery2.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery9.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery4.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery5.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery6.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery7.jpg"
          alt="image"
        />
        <StaticImage
          height={600}
          width={600}
          src="../images/Gallery/gallery8.jpg"
          alt="image"
        />
      </GalleryContainer>
    </Wrapper>
  )
}

export default GallerySlide
