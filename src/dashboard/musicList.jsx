import React from 'react'
import { connect } from 'react-redux'
import If from '../common/operator/if'

const MusicList = props => {

    const renderRows = () => {
        const list = props.musics || []
        return list.map(music => (
            <tr key={music._id}>
                <th className="align-middle text-center" scope="row">{music._id+1}</th>
                <td className="align-middle text-center">{music.artista}</td>
                <td className="align-middle text-center">{music.musica}</td>
                <td className="align-middle text-center">{music.genero}</td>
                <td className="align-middle text-center" height="80">
                    <If test={music.preview_url.indexOf('spotify') != -1}>
                        <iframe src={music.preview_url} width="300" height="80" frameBorder="0" allowTransparency="true" />
                    </If>
                    <If test={music.preview_url.indexOf('spotify') == -1}>
                        <span>{music.preview_url}</span>
                    </If>
                </td>
                <td className="align-middle text-center" height="80"><a href={music.lyrics_url} className="btn btn-outline-success" type="submit">Ver musica</a></td>
            </tr>
        ))
    }

    return (
        <table className="table table-striped mt-2">
            <thead>
                <tr className="bg-dark text-white">
                    <th scope="col">#</th>
                    <th className="text-center" scope="col">Artista</th>
                    <th className="text-center" scope="col">Música</th>
                    <th className="text-center" scope="col">Genero</th>
                    <th className="text-center" scope="col">Player</th>
                    <th className="text-center" scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({musics: state.dashboard.musics})

export default connect(mapStateToProps)(MusicList)