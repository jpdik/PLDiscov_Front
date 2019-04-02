import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import consts from '../consts'

export const changeQuery = (value) => ({
    type: 'QUERY_CHANGED',
    payload: value
})

export const clear = () => ({
    type: 'CLEAR',
    payload: ''
})

export const search = (value, genre) =>{
        return [
            clear(),
            changeQuery(value),
            (dispatch) => {
                axios.get(`${consts.API_URL}/?query=${value}&genre=${genre}`).then(resp => {
                    dispatch({
                        type: 'BILLING_SEARCH_FETCHED',
                        payload: resp.data
                    })
                })
                .catch(e => {[
                    dispatch(clear()),
                    toastr.warning('Indisponível', e.response.data.msg)    
                    ]
                })
            }
        ]
}

export const changeValue = event => ({
    type: 'VALUE_CHANGED',
    payload: event.target.value
})

export const selectGenre = event => ({
    type: 'GENRE_SELECTED',
    payload: event.target.value
})