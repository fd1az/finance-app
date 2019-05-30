import React, { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

function Balance(props) {
  const balance = props.balance;
  return (
    <div>
      <h2 className="h2 text-center quicksand">Balance</h2>
      <div className="transparent m-2 rounded">
        {balance.map(item => {
          if (item.tipo === "earn") {
            return (
              <li
                key={item.motivo}
                className="earn col-9 float-left bg-info text-white rounded m-1 text-capitalize p-2 d-flex justify-content-between"
              >
                <p className="mb-0">{item.motivo}</p>
                <p className="mb-0">{formatter.format(item.importe)}</p>
              </li>
            );
          }
          return (
            <li
              key={item.motivo}
              className="loss col-9 float-right bg-danger text-white rounded m-1 text-capitalize p-2 d-flex justify-content-between"
            >
              <p className="mb-0">{item.motivo}</p>
              <p className="mb-0">{formatter.format(item.importe)}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Balance;
