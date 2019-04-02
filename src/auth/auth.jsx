import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { login, signup, logout } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import If from '../common/operator/if'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'
import { validateToken } from '../auth/authActions'
import TypePrice from '../prices/typePrice';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }
    onSubmit(values) {
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }
    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`
            return (<div><div className="my-login-page">
                <section className="h-100" >
                    <div className="container h-100" >
                        <div className="row justify-content-md-center h-100" >
                            <div className="card-wrapper" >
                                <div className="brand">
                                    <img src="img/logo.png" />
                                </div>
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {`Bem vindo ${user.user}`}
                                        </h4>
                                        <TypePrice type={user.type} label="Tipo de conta:"/>
                                        <div className="form-group no-margin">
                                            <a href="#/" className="btn btn-primary btn-block" onClick={this.props.logout}>
                                                Sair
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div></div>)
        } else if (!user && !validToken) {
            return (<div className="my-login-page">
                <section className="h-100" >
                    <div className="container h-100" >
                        <div className="row justify-content-md-center h-100" >
                            <div className="card-wrapper" >
                                <div className="brand">
                                    <img src="img/logo.png" />
                                </div>
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">{loginMode ? 'Entrar' : 'Registrar'}</h4>
                                        <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                                            <Field component={Input} type="input" name="name"
                                                placeholder="Nome" icon='user' hide={loginMode} />
                                            <Field component={Input} type="email" name="email"
                                                placeholder="E-mail" icon='envelope' />
                                            <Field component={Input} type="password" name="password"
                                                placeholder="Senha" icon='lock' />
                                            <Field component={Input} type="password" name="confirm_password"
                                                placeholder="Confirmar Senha" icon='lock' hide={loginMode} />

                                            <div className="form-group no-margin">
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    {loginMode ? 'Entrar' : 'Registrar'}
                                                </button>
                                            </div>

                                            <div className="margin-top20 text-center">
                                                {loginMode ? 'Novo usuário?' : 'Já é cadastrado?'}
                                                <a href="javascript:;" onClick={() => this.changeMode()}>
                                                    {loginMode ? ' Registrar aqui!' : ' Entrar aqui!'}
                                                </a>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Messages />
                </section>
            </div>)
        } else {
            return false
        }
    }
}
Auth = reduxForm({ form: 'authForm' })(Auth)
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup, validateToken, logout },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Auth)