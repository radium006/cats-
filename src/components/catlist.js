import React, {Component} from 'react';
import faker from 'faker';
import { connect } from 'react-redux'

import * as actionCreators from '../reducers/actionCreators'

class CatList extends Component{
    
    constructor(props){
        super(props)
    }

    
   

    render() {
        
        var catList = this.props.catImageURLs.map((cat) => {
            return <img src = {cat} />
        })
        

        return(
            catList
        )
    }
}

const mapStateToProps = (state) => {
    return {
       catImageURLs : state.catImageURLs
    } 
  }

  
   
export default connect(mapStateToProps)(CatList)