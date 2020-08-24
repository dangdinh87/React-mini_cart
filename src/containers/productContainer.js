import React from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";
import * as action from "./../actions/index";

class ProductContainer extends React.Component {
  render() {
    let { products } = this.props;
    return <Products>{this.showProduct(products)}</Products>;
  }

  showProduct = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddCart={this.props.onAddCart}
            onChangeMessage={this.props.onChangeMessage}
          />
        );
      });
    }
    return result;
  };
}

ProductContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    decription: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onChangeMesage: PropTypes.func.isRequired,
  onAddCart : PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddCart: (product) => {
      dispatch(action.addToCard(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(action.changeMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
