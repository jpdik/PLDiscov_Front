import React from 'react'
import Paypal from './paypal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Messages from '../common/msg/messages'
import TypePrice from './typePrice'

import { validateToken } from '../auth/authActions'

class Prices extends React.Component {

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken)
            axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`
        return (

            <div className="card-deck mt-5">
                <TypePrice type={1}>
                    <Paypal type={1} value={5} />
                </TypePrice>
                <TypePrice type={2}>
                    <Paypal type={2} value={10} />
                </TypePrice>
                <TypePrice type={3}>
                    <Paypal type={3} value={20} />
                </TypePrice>
                <Messages />
            </div>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Prices)