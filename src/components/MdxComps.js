import React from "react"
import styled, { css } from "styled-components"
import * as style from "styles/styled"

const HeadingStyle = css`
  color: ${style.color.grey800};
  font-weight: 600;
  letter-spacing: ${style.textLetterSpacing.tight};
`

const StyledH2 = styled.div`
  h2 {
    ${HeadingStyle}
    font-size: ${style.fontSize.xl2};
    margin-bottom: 16px;
  }
`

export const H2 = props => {
  return (
    <StyledH2>
      <h2 {...props} />
      <hr />
    </StyledH2>
  )
}

const StyledH3 = styled.div`
  h3 {
    ${HeadingStyle}
    font-size: ${style.fontSize.lg};
  }
`

export const H3 = props => {
  return (
    <StyledH3>
      <h3 {...props} />
    </StyledH3>
  )
}
