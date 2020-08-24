import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import * as messenger from "./../constants/messenger";
import * as action from "./../actions/index";

class CartContainer extends React.Component {
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCart(cart)}
        {this.showTotalResult(cart)}
      </Cart>
    );
  }

  showCart = (cart) => {
    let result = messenger.MSG_CARD_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteCart={this.props.onDeleteCart}
            onChangeMessage={this.props.onChangeMessage}
            updateQuanlity={this.props.onUpdateQuanlity}
          />
        );
      });
    }
    return result;
  };

  showTotalResult = (cart) => {
    let result = "";
    if (cart.length > 0) return (result = <CartResult cart={cart} />);
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        decription: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
      }).isRequired,
      quanlity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteCart : PropTypes.func.isRequired,
  onChangeMessage : PropTypes.func.isRequired,
  onUpdateQuanlity : PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteCart: (product) => {
      dispatch(action.deleteToCard(product));
    },
    onChangeMessage: (message) => {
      dispatch(action.changeMessage(message));
    },
    onUpdateQuanlity: (product,quanlity) => {
      dispatch(action.updateQuanlity(product,quanlity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
