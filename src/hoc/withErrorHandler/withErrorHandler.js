import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilary/Auxilairy';

const withErrorHandler = (WrappedComponent, axios) => {
    return  class extends Component {

        constructor () {
            super();
              this.requestInterceptor = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            })

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })

        }

        state = {
            error: null
        }

        componentDidMount () {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
          
        }

        errorConfirmed = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Aux>
                    <Modal show ={this.state.error} modalClosed={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        } 
    }
}

export default withErrorHandler;