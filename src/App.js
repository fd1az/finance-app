import React, { useState } from "react";
import "./App.css";
import Totals from "./Totals";
import Form from "./Form";
import Items from "./Items";
import Balance from "./Balance";

function App() {
  const [items, setItems] = useState(Items);


  function handleNewItem(evt) {

    setItems([...items,{motivo: evt.motivo, importe: Number(evt.importe) }]);
    console.log(items);
    return items;
  }


  return (
    <div className="app-div">
      <p className="text-center lato300">
        con Financeapp podras llevar el control de tus ganancias y gastos de
        forma sencilla.
      </p>
      <Totals totalItems={items} />
      <Form earns={items} onNewItem={handleNewItem} />
      <Balance balance={items} />
    </div>
  );
}

export default App;
