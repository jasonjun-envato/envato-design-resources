import React, { useState } from "react"
import PropTypes from "prop-types"
import { ReactSVG } from "react-svg"
import styled, { css } from "styled-components"
import * as style from "styles/styled"

const OuterContainer = styled.div``

const InnerContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 100%;
  position: relative;
`

const LogoVarName = styled.small`
  display: block;
  color: ${style.color.neutral400};
  font-size: ${style.fontSize.xs};
  line-height: ${style.textLineHeight.normal};
  margin-bottom: 12px;
`

const LogoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 32px;
  grid-gap: 2px;
`

const LogoDisplay = styled.div`
  background: ${style.color.neutral60};
  border-radius: 4px 4px 0 0;
  ${props =>
    props.darkCanvas &&
    css`
      background: ${style.color.neutral700};
    `}

  display: inline-grid;
  justify-items: center;
  align-items: center;
  padding: 8%;

  .logo-wrapper {
    div {
      display: flex;
      justify-content: center;
    }
  }

  svg {
    ${props =>
      props.size === "compact"
        ? css`
            width: 35%;
          `
        : props.size === "large"
        ? css`
            width: 100%;
          `
        : props.size === "small"
        ? css`
            width: 50%;
          `
        : css`
            width: 75%;
          `}
  }
`

const LogoControl = styled.div`
  display: flex;
  background: ${style.color.neutral80};
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`

const LogoButton = styled.button`
  display: flex;
  align-items: center;
  color: ${style.color.neutral400};
  font-size: ${style.fontSize.xs};
  font-weight: 600;
  letter-spacing: ${style.textLetterSpacing.tight};
  height: 100%;
  padding: 0 12px;
  transition: all 0.12s ease-out;

  &:hover {
    background-color: ${style.color.neutral100};
  }

  ${props =>
    props.download &&
    css`
      cursor: s-resize;
    `}

  ${props =>
    props.copy &&
    css`
      margin-left: auto;
      cursor: copy;
    `}
`

const LogoFrame = props => {
  const { varName, fileName, darkCanvas, size, children } = props
  const [copyLabel, setCopyLabel] = useState("COPY")
  const [copyStatus, setcopyStatus] = useState(null)

  const copySvgCode = e => {
    e.preventDefault()

    // Get SVG code
    const svgCode = document
      .querySelector(`.logo-wrapper.${fileName} svg`)
      .outerHTML.toString()

    // Copy to clipboard
    const el = document.createElement("textarea")
    el.value = svgCode
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false
    console.log("el:" + el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }

    // Copy label update
    setCopyLabel("Copied!")

    setTimeout(() => {
      setCopyLabel("COPY")
    }, 1200)
  }

  return (
    <OuterContainer>
      <LogoVarName>{varName}</LogoVarName>
      <InnerContainer>
        <LogoBox>
          <LogoDisplay darkCanvas={darkCanvas ? true : false} size={size}>
            <ReactSVG
              src={`/logos/${fileName}.svg`}
              afterInjection={(error, svg) => {
                if (error) {
                  console.error(error)
                  return
                }
              }}
              className={`logo-wrapper ${fileName}`}
            />
          </LogoDisplay>
          <LogoControl>
            <LogoButton as="a" href={`/logos/${fileName}.png`} download>
              PNG
            </LogoButton>
            <LogoButton as="a" href={`/logos/${fileName}.svg`} download>
              SVG
            </LogoButton>

            <LogoButton onClick={copySvgCode} copy>
              {copyLabel}
            </LogoButton>
          </LogoControl>
        </LogoBox>
      </InnerContainer>
    </OuterContainer>
  )
}

LogoFrame.propTypes = {
  varName: PropTypes.string.isRequired,
  darkCanvas: PropTypes.bool,
  fileName: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default LogoFrame
