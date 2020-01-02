import React from "react"
import styled from "styled-components"

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props =>
      props.size === "small"
        ? "auto-fit, minmax(180px, 1fr)"
        : "auto-fill, minmax(220px, 1fr)"}
  );
  grid-gap: 24px;
`

const FrameGrid = props => {
  const logoCount = props.children.length
  return (
    <ItemWrapper logoCount={logoCount} size={props.size}>
      {props.children}
    </ItemWrapper>
  )
}

export default FrameGrid
