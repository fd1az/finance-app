import React, { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

function Totals(props) {
  let total = props.totalItems.reduce((a, b) => ({importe: a.importe + b.importe}));

  return (
    <div className="totals-div">
      <p className="h2 quicksand text-center">Saldo Total</p>
      <p className="h4 quicksand text-center">{formatter.format(total.importe)}</p>
    </div>
  );
}

export default Totals;
