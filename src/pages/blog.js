import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
   <h1>BlogPage</h1>
    <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(post => (
      <li className={blogStyles.post}> 

        <Link 
          key={post.node.id}
          to={post.node.frontmatter.path}>
             <h1>{post.node.frontmatter.title}</h1>
             <p>{post.node.frontmatter.date}</p>
        </Link>
      </li>
    ))}  
    </ul>
   
     


  
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit:10
      sort: { fields: [frontmatter___date], order: ASC }
      filter:{frontmatter:{published:{eq: true}}}


    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default BlogPage
