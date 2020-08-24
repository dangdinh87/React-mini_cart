import React from "react";
import { formatMoney } from "./../constants/function";
import * as Message from "./../constants/messenger";

class App extends React.Component {
  
  onDeleteCart = (product) => {
    this.props.onDeleteCart( product);
    this.props.onChangeMessage(Message.MSG_DELETE_TO_CARD_SCCESS);
  };
  render() {
    let { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h6>
            <strong>{item.product.name}</strong>
          </h6>
        </td>
        <td>
          <h6>{formatMoney(item.product.price)} &nbsp;VNĐ</h6>
        </td>
        <td className="center-on-small-only ">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-sm purple-gradient btn-rounded"
              onClick={()=>this.updateQuanlity(item.product, -1 )}
            >
              <i class="fa fa-minus"></i>
            </button>
            <div
              type="button"
              class=" btn-sm mx-1  border border-dark rounded mb-0"
            >
              {item.quanlity}
            </div>
            <button
              onClick={()=>this.updateQuanlity(item.product, 1 )}
              type="button"
              class="btn btn-sm purple-gradient btn-rounded"
            >
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </td>
        <td>
          {formatMoney(item.product.price * item.quanlity)}
          &nbsp;VNĐ
        </td>
        <td>
          <button
            type="button"
            className="btn-floating peach-gradient border border-0 "
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Remove item"
            onClick={()=>this.onDeleteCart(item.product)}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
  updateQuanlity=(product,quanlity)=>{
    this.props.updateQuanlity(product,quanlity)
    this.props.onChangeMessage(this.props.item.quanlity >=1 ? Message.MSG_UPDATE_TO_CARD_SCCESS : Message.MSG_DELETE_TO_CARD_SCCESS);
  }
}




export default App;
