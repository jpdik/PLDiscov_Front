import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'

import MusicSearch from './musicSearch'
import MusicList from './musicList'
import If from '../common/operator/if'
import Messages from '../common/msg/messages'
import axios from 'axios'

import { validateToken } from '../auth/authActions'

class Dashboard extends Component {

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render () {
        const hasMusics = this.props.dashboard.musics.length > 0
        const { user, validToken } = this.props.auth
        if (user && validToken)
            axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`
        return (
            <div className="container">
            <If test={!hasMusics}>
                <div className="row">
                    <div className="col-sm-8 offset-md-2">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="img/carousel-1.png" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="img/carousel-2.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="img/carousel-3.png" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </If>
            
            <MusicSearch />
            
            <If test={this.props.dashboard.query && !hasMusics}>
                <div className="mt-5 align-middle">
                    <div className="d-flex justify-content-center">
                        <img src="img/search.gif" alt="First slide" />
                    </div>
                    <div className="d-flex justify-content-center mt-3 mb-5">
                        <h1 className="font-weight-bold text-primary">Procurando musicas, aguarde</h1>
                    </div>
                </div>
            </If>

            <If test={!this.props.dashboard.query && !hasMusics}>
                <div className="d-flex justify-content-center">
                    <h4> Descubra  <a href="#/about">como funciona</a>.</h4>
                </div>
            </If>

            <If test={hasMusics}>
            <div className="mt-5">
                <h3> Músicas encontradas para: <b>{this.props.dashboard.query}</b></h3>
                <span>Quantidade de buscas já realizado: {this.props.dashboard.number_searchs}</span>
                <MusicList />
            </div>
            </If>

            <Messages />
        </div>
        )
    }
}


const mapStateToProps = state => ({ auth: state.auth, dashboard: state.dashboard })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)