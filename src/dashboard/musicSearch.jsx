import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue, search } from './dashboardActions'
import GenreList from './genreList'

class MusicSearch extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        
    }

    keyHandler(e) {
        const { search, clear, value } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(value) : search(value)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { value, genre, changeValue, search } = this.props
        return (
            <div className="form-row mt-5">
                <h2>Buscar</h2>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Digite os termos da busca"
                    onChange={changeValue}
                    onKeyUp={this.keyHandler}
                    value={value} />
                </div>
                <div className="form-group col-md-3">
                    <GenreList />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-outline-primary" onClick={() => search(value, genre)}>Buscar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({query: state.dashboard.query, value: state.dashboard.value, genre: state.dashboard.genre  })
const mapDispatchToProps = dispatch => bindActionCreators({ changeValue, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearch)