import * as actionTypes from './actionTypes'

const initialState = {
    catCount: ["meow1"], 
    catImageURLs: [] 
  }
  
  const reducer = (state = initialState, action) => {
  
    if(action.type == actionTypes.ADD_CAT) {
      return {
        ...state,
        catCount: state.catCount.concat(action.cat), 
        catImageURLs: state.catImageURLs.concat(action.cat)
      }
    }
  
    return state
  }
  
  export default reducer
  