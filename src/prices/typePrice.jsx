import React from 'react'

class TypePrice extends React.Component {
    render() {
        if (this.props.type == 3)
            return (
                <div className="card mb-5">
                    <img className="card-img-top" src="img/sales/pldiscov-gold.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.label ? this.props.label : ''} Completo</h5>
                        <ul className="card-text">
                            <li>Todos os generos;</li>
                            <li>300 musicas na lista;</li>
                            <li>1000 buscas por dia;</li>
                        </ul>
                    </div>
                    {this.props.children}
                </div>
            )
        else if (this.props.type == 2)
            return (
                <div className="card mb-5">
                    <img className="card-img-top" src="img/sales/pldiscov-silver.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.label ? this.props.label : ''} Médio</h5>
                        <ul className="card-text">
                            <li>Todos os generos;</li>
                            <li>100 musicas na lista;</li>
                            <li>200 buscas por dia;</li>
                        </ul>
                    </div>
                    {this.props.children}
                </div>
            )
        else if (this.props.type == 1)
            return (
                <div className="card mb-5">
                    <img className="card-img-top" src="img/sales/pldiscov-bronze.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.label ? this.props.label : ''} Simples</h5>
                        <ul className="card-text">
                            <li>Todos os generos;</li>
                            <li>40 musicas na lista;</li>
                            <li>80 buscas por dia;</li>
                        </ul>
                    </div>
                    {this.props.children}
                </div>
            )
        else
            return (
                <div className="card mb-5">
                    <img className="card-img-top" src="img/sales/pldiscov-normal.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.label ? this.props.label : ''} Normal</h5>
                        <ul className="card-text">
                            <li>Não pode escolher genero;</li>
                            <li>20 musicas na lista;</li>
                            <li>10 buscas por dia;</li>
                        </ul>
                    </div>
                </div>)
    }
}

export default TypePrice