import React, {Component} from 'react';
import faker from 'faker';
import './kingcat.css';
import { connect } from 'react-redux'

import * as actionCreators from '../reducers/actionCreators'

class KingCat extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            imageURL: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350"
        }
    }

    handleImageClicked = () => {
        console.log("sss")
        this.props.IncrementCats(this.state.imageURL)
    }
    
    render(){
        return(
            <div className = 'Cat-container'>
                <div>
                    <img onClick={this.handleImageClicked} src={this.state.imageURL}/>
                </div>
                <div>
                    <h3>This is a cat</h3>
                    <h3>Click to see more</h3>
                </div>
                <button onClick={this.props.IncrementCats}>Add Cats</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      catCount : state.catCount
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        IncrementCats: (cat) => dispatch(actionCreators.addCat(cat))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KingCat);