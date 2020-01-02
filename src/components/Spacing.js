import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SpacingComp = styled.div`
  width: auto;
  height: ${props => props.height}px;
`

const Spacing = props => {
  const { size } = props
  return <SpacingComp height={size} />
}

export default Spacing

Spacing.propTypes = {
  size: PropTypes.number.isRequired,
}
