import React from "react";

function Trade(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="trade-id">{props.trade.id}</td>
            <td>{props.trade.stock}</td>
            <td>{props.trade.method}</td>
            <td>{props.trade.quantity}</td>
            <td>{props.trade.profitLoss}</td>
            <td className="td-blank" onClick={() => props.deleteHandler(props.trade.id)}>
              <button>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Trade;
