import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LazyHero from 'react-lazy-hero';
import Button from '@material-ui/core/Button';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
   	   <LazyHero 

         	   imageSrc="https://unsplash.it/2000/1000" 
         	   minHeight="75vh"
         	   parallaxOffset="100"
         	   color="forestgreen"
         	   style={{ 
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'

                }}>
                      <h1>Generic Startup Hype Headline</h1>
      				<Button variant="contained" color="primary">
      				Hello
      				</Button>
        </LazyHero>

        
       
  </Layout>
)


export default IndexPage
