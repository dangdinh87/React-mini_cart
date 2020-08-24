import React from "react";

class App extends React.Component {
  render() {

    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead >
              <tr >
                <th />
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th className='text-center'>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            <tbody>
             {this.props.children}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default App;
