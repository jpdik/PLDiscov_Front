import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getGenres, getGenre } from '../common/operator/solvers'
import { selectGenre } from './dashboardActions'


class GenreList extends Component {

    constructor(props) {
        super(props)
    }

    renderOptions() {
        const genres = getGenres()
        return genres.map((value)  => (
            <option key={value} value={value}>{value}</option>
        ))
    }

    render(){
        const { selectGenre, genre } = this.props
        return (
            <div className="form-group">
                <select className="form-control" onChange={selectGenre} value={genre}>
                <option value=''>Selecione o gênero</option>
                {this.renderOptions()}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({genre: state.dashboard.genre})
const mapDispatchToProps = dispatch => bindActionCreators({ selectGenre }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GenreList)