import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ArticleList from '../components/ArticleList'

const BlogIndex = ({ data, location }) => {

    const posts = data.allContentfulBlogPost.nodes;

    return (
      <Layout location={location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticleList posts={posts} />
      </Layout>
    )

}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
