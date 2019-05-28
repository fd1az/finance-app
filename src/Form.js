import React from "react";
import useForm from "./useForm";

const Form = props => {
  const { values, handleChange, handleSubmit } = useForm(addNewItem);

  function addNewItem() {
    console.log(values);
    props.onNewItem(values);
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Motivo</label>
                <div className="control">
                  <input
                    onChange={handleChange}
                    value={values.motivo || ""}
                    className="input"
                    type="motivo"
                    name="motivo"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Importe</label>
                <div className="control">
                  <input
                    onChange={handleChange}
                    value={values.importe || ""}
                    className="input"
                    type="importe"
                    name="importe"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-outline-dark mt-3 mb-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
