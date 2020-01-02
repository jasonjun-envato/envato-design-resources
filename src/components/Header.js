import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import * as style from "styles/styled"
import Leaf from "src/images/leaf.svg"

const HeaderOuter = styled.header`
  background: ${style.color.grey800};
`
const HeaderInner = styled.div`
  ${style.MaxWidthStyle}
  color: #fff;
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;

  nav {
    ul {
      display: flex;

      li {
        margin-right: 32px;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          font-weight: 600;
          letter-spacing: ${style.textLetterSpacing.tight};
          opacity: 0.4;

          &.active {
            opacity: 1;
          }

          &.disabled {
            cursor: not-allowed;
          }
        }
      }
    }
  }
`

const SiteLogo = styled.div`
  a {
    display: flex;
    align-items: center;

    svg {
      fill: ${style.color.brand};
      margin-right: 4px;
    }

    h1 {
      font-weight: 800;
      letter-spacing: ${style.textLetterSpacing.tight};
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderOuter>
    <HeaderInner>
      <SiteLogo>
        <Link to="/">
          <Leaf /> <h1>{siteTitle}</h1>
        </Link>
      </SiteLogo>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" partiallyActive={true}>
              Logos
            </Link>
          </li>
          <li>
            <a className="disabled">Colors</a>
          </li>
          <li>
            <a className="disabled">Libraries</a>
          </li>
        </ul>
      </nav>
    </HeaderInner>
  </HeaderOuter>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
