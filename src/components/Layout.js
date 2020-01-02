import React from "react"
import PropTypes from "prop-types"
import SEO from "components/seo"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring } from "react-spring"
import styled from "styled-components"
import * as style from "styles/styled"

import Header from "components/Header"
import * as MdxComps from "components/MdxComps"

const GlobalStyle = style.GlobalStyle

const PageTitle = styled.h1`
  font-size: ${style.fontSize.xl5};
  font-weight: 800;
  line-height: ${style.textLineHeight.tight};
  letter-spacing: ${style.textLetterSpacing.tight};
  margin-top: 96px;
  margin-bottom: 16px;
`

const PageDesc = styled.div`
  color: ${style.color.grey500};
  max-width: 540px;
  margin-bottom: 72px;
`

const FooterOuter = styled.footer`
  display: block;
  background: ${style.color.grey40};
  margin-top: 128px;
  border-top: 1px solid ${style.color.grey80};
`

const FooterInner = styled.div`
  ${style.MaxWidthStyle}
  display: flex;
  justify-content: space-between;
  padding-top: 72px;
  padding-bottom: 72px;
  font-size: ${style.fontSize.sm};
  color: ${style.color.grey400};

  p {
    margin-right: 32px;
  }

  button {
    font-weight: 600;
    transition: all 0.12s linear;

    &:hover {
      color: ${style.color.grey700};
    }
  }
`

const ContentWrapper = styled.main`
  ${style.MaxWidthStyle}
`

const components = {
  h2: MdxComps.H2,
  h3: MdxComps.H3,
}

const Layout = props => {
  const frontmatter = props.pageContext.frontmatter
  const children = props.children
  const [, setY] = useSpring(() => ({ y: 0 }))

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={frontmatter.title} />
      <div>
        <ContentWrapper>
          <PageTitle>{frontmatter.title}</PageTitle>
          <PageDesc>{frontmatter.description}</PageDesc>
          <MDXProvider components={components}>{children}</MDXProvider>
        </ContentWrapper>
        <FooterOuter>
          <FooterInner>
            <p>
              © 2019 Envato Pty Ltd. Trademarks and brands are the property of
              their respective owners.
            </p>
            <button
              onClick={() => {
                setY({
                  y: 0,
                  reset: true,
                  from: { y: window.scrollY },
                  onFrame: props => window.scroll(0, props.y),
                })
              }}
            >
              ↑ Back to top
            </button>
          </FooterInner>
        </FooterOuter>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
