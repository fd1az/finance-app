import React, { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

function Totals(props) {
  let total = 0;
  const [totalDisp, setTotal] = useState(
    props.totalItems.map(item => (total += item.importe))
  );
  useEffect(() => {
    console.log(total);
  });

  return (
    <div className="totals-div">
      <p className="h2 quicksand text-center">Saldo Total</p>
      <p className="h4 quicksand text-center">{formatter.format(total)}</p>
    </div>
  );
}

export default Totals;
