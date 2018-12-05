import * as actionTypes from './actionTypes'

export const addCat = (cat) => {
    return{
        type : actionTypes.ADD_CAT,
        cat : cat
    }
}