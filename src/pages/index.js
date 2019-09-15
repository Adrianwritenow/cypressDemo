import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Splash from '../container/splash.js';



const DrinkPost =({node}) =>{
  return(

    <li>
    <img src={node.cocktailImage.file.url} alt={node.name}/>
    <Link to={node.slug}> {node.name}</Link>
    </li>

  )
}
const IndexPage = ({data}) => (
  <div class="mainWrapper">
  <Splash/>


  <ul className="drinkList">
    {data.allContentfulDrink.edges.map((edge)=> <DrinkPost node={edge.node}/>)}
  </ul>
  </div>
)

export default IndexPage
export const pageQuery = graphql`
query pageQuery{
  allContentfulDrink (filter:{
    node_locale: {eq:"en-US"}
  }) {
    edges{
      node{
        name
        slug
        isName1Word
           cocktailImage {
             id
             file {
               url
             }
           }


      }
    }
  }

}`
