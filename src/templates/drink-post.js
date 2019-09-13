import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';



class DrinkPost extends Component {
 render() {



   const{name, cocktailImage, imageTall, isName1Word, ingridents, aboutDrink,steps, css} = this.props.data.contentfulDrink;


   var strip1Style ={
     backgroundColor:`${css.strip1}`

   }
   var strip2Style ={
      backgroundColor:`${css.strip2}`

   }
   var colorStyle ={
      color:`${css.color}`

   }

   return(
     <div className="mainWrapper container-fluid">


     <div className="drinkNameWrap">
     <div className="strip" style={strip1Style}></div>
     <div className="description"  style={ isName1Word ? { right: 40+`px`} : {display : 'block'} }   dangerouslySetInnerHTML={{__html:aboutDrink.childMarkdownRemark.html}}/>
      <h1 style={colorStyle}>{name}</h1>
     </div>
     <div className="buildWrap" style={ imageTall ? { height: `auto`} : {display : 'block'} }>
     <img src={cocktailImage.file.url} alt={name}/>
        <div className="buildInfoWrap">
        <div className="strip2" style={strip2Style}></div>
         <div className="ingridentWrap">
          <h3>INGRIDENTS</h3>
           <ul className="ingridentList">
             {ingridents.map((ingrident, i)=> <li key={i}>{ingrident}</li>)}
           </ul>
         </div>
         <div className="stepWrap">
          <h3>STEPS</h3>
           <ul className="stepList">
             {steps.map((step, i)=> <li key={i}>{step}</li>)}
           </ul>
         </div>
        </div>
     </div>
     </div>
   )
   // ...
 }

}
DrinkPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default DrinkPost;
export const pageQuery = graphql `
query drinkPostQuery($slug: String!){
  contentfulDrink(slug: {eq: $slug}){
    name
    slug
    steps
    imageTall
    isName1Word
       cocktailImage {
         id
         file {
           url
         }
       }
    css {
          color
          strip1
          strip2
        }

    ingridents
    aboutDrink {
          childMarkdownRemark {
            html
          }
        }



  }
}`
