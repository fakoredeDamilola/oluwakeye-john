import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Share from "../components/share"
import ColoredTags from "../components/coloredTags"

import {
  FaRegCalendarAlt as Calendar,
  FaRegClock as Clock,
} from "react-icons/fa"

const FeaturedImage = styled(Img)`
  border-radius: 10px;
  max-height: 350px;
  margin: 2rem 0;
`

const BlogContainer = styled.div``

const BlogPostHeading = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  font-family: sans-serif;
`

const BlogSection = styled.section`
  color: ${({ theme }) => theme.blogTextNormal};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: ${({ theme }) => theme.textNormal};
  }
  a:hover {
    text-decoration: underline;
  }
`

const BlogDetails = styled.p`
  color: ${({ theme }) => theme.lightText};
`

const RelatedBlog = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const featuredImage = post.frontmatter.featuredImage
  const ttr = post.timeToRead
  const tags = post.frontmatter.tags

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogContainer>
        <BlogPostHeading>{post.frontmatter.title}</BlogPostHeading>
        <BlogDetails>
          <Calendar /> {post.frontmatter.date}
          {` `}&nbsp;{` `}
          <Clock /> {ttr} min read
          {` `}&nbsp;{` `}
          <Link to="/about">By Oluwakeye John</Link>
        </BlogDetails>
        {tags && tags.length !== 0 && <ColoredTags icon tags={tags} />}
        {featuredImage && (
          <FeaturedImage
            fluid={featuredImage.childImageSharp.fluid}
          ></FeaturedImage>
        )}
        <BlogSection style={{ marginBottom: "3rem" }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </BlogSection>
        <Share />
        <Bio />
      </BlogContainer>

      <RelatedBlog>
        <div>
          {previous && (
            <Link to={`/blog` + previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={`/blog` + next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </RelatedBlog>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
