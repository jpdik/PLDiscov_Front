import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">PLDiscov</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/prices">Preços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/about">Sobre</a>
                        </li>
                    </ul>
                    <a className="btn btn-primary" href="#/login" role="button">{this.props.auth.user ? this.props.auth.user.user : 'Login'}</a>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps)(Header)

/*export default props => (
    <nav classNameName="navbar navbar-expand-lg navbar-dark bg-primary">
        <img src="img/logo.png" alt="logo" width="45" classNameName="img-thumbnail" />
        <a classNameName="pl-3 navbar-brand" href="/#"><span classNameName="font-weight-bold align-middle">PLDiscov</span></a>

        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav mr-auto">
            <li classNameName="nav-item active">
                <a classNameName="nav-link" href="#/">Home</a>
            </li>
            </ul>
            <form classNameName="form-inline my-2 my-lg-0">
                <a classNameName="btn btn-secondary" href='#/about'>Sobre</a>
                <span classNameName="form-control mr-sm-2">Seja bem Vindo.</span>
            </form>
        </div>
    </nav>
    )*/