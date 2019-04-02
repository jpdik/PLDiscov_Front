import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import consts from '../consts'

export function login(values) {
    return submit(values, `${consts.API_URL}/login`)
}

export function signup(values) {
    return submit(values, `${consts.API_URL}/signup`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data },
                ])
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.msg)
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.defaults.headers.common['authorization'] = `Bearer ${token}`
            axios.post(`${consts.API_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}

export function checkPurchase(data) {
    return dispatch => {
        axios.post(`${consts.API_URL}/checkPurchase`, { data })
            .then(resp => {
                dispatch({ type: 'USER_FETCHED', payload: resp.data })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.msg)
            })
    }
}