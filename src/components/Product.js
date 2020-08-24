import React from "react";
import { formatMoney } from "./../constants/function";
import * as Message from "./../constants/messenger";

class App extends React.Component {
  render() {
    let { product } = this.props;

    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt="" />
            <a href>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">{this.showRating(product.rating)}</ul>
            <p className="card-text">{product.decription}</p>
            <div className="card-footer">
              <span className="left">{formatMoney(product.price)} VNĐ</span>
              <span className="right">
                <a
                  href
                  className="btn-floating blue-gradient"
                  title
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onAddCart = (product) => {
    this.props.onAddCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CARD_SUCCESS);
  };
  showRating = (rating) => {
    let result = [];
    for (let i = 0; i < rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (let i = 5; i > rating; i--) {
      result.push(<i key={i} className="fa fa-star-o"></i>);
    }
    return result;
  };
}

export default App;
