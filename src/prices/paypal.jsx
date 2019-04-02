import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { If } from '../common/operator/if'
import { checkPurchase } from '../auth/authActions'

class Paypal extends React.Component {

    render() {
        const onSuccess = (data) => {
            this.props.checkPurchase(data)
        }

        const onCancel = (data) => {
            this.props.checkPurchase(data)
        }

        const onError = (data) => {
            this.props.checkPurchase(data)
        }

        let env = 'sandbox';
        let currency = 'BRL';

        const client = {
            sandbox: 'AYh9E4jFqtYVDCXZRWBUskjoFOOJitun6rbkMAznDQB8nD6uFNc8HSeqRq1gnxsycmNSc8gC7atGcEH4',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        if (this.props.auth.user) {
            return (
                <div className="card-footer">
                    <button type="button" className="btn btn-primary btn-block">
                        Apenas <span className="badge badge-light">{`R$ ${this.props.value},00 / mês`}</span>
                    </button>
                    <div className=" mt-4 d-flex justify-content-center">
                        {(this.props.auth.user.type >= this.props.type) ?
                            <button type="button" className="btn btn-success btn-block">
                                Já possui
                            </button> :
                            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.value} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                        }
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="card-footer">
                    <button type="button" className="btn btn-primary btn-block">
                        Apenas <span className="badge badge-light">{`R$ ${this.props.value},00 / mês`}</span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-block">
                        Para comprar logue.
                    </button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ checkPurchase },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Paypal)