import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'
import {connect} from  'react-redux';


class Orders extends Component {


    componentDidMount () {
      this.props.onFetchOrders(this.props.token);
    }

    render() {
        let orders = <Spinner />

        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                return ( 
                    <Order 
                        key={order.id} 
                        uniqueId={order.id}
                        totalPrice={order.totalPrice}
                        name={order.orderData.name}
                        ingerdients={order.ingredients}/>
                );
            });
        }

        return  orders
        
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders,axios));