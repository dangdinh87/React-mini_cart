import React from "react";

class CardResult extends React.Component {
  render() {
    let { cart } = this.props;
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền : </strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.formatMoney(this.totalMoney(cart))}</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-success waves-effect waves-light"
          >
            Thanh Toán &nbsp;
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
  totalMoney = (cart) => {
    let result = 0;
    if (cart.length > 0) {
      for (const i of cart) {
        result+= i.product.price * i.quanlity;
      }
    }
    return result;
  };
  formatMoney = (number) => {
    return number.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  };
}

export default CardResult;
