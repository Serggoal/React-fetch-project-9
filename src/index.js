import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./output.css"

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="btn
        ml-2.5 bg-primary text-white border-0 px-4 py-2 min-w-150 text-base rounded cursor-pointer transition-opacity ease-in-out shadow-333xl hover:opacity-80
        active:shadow-222xl active:translate-y-px disabled:opacity-40" 
        onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className="ml-2.5 mt-2 text-3xl">Нужно залогиниться!</h2>
        <button className="btn
        ml-2.5 bg-secondary border-0 px-4 py-2 min-w-150 text-base rounded cursor-pointer transition-opacity ease-in-out shadow-333xl hover:opacity-80 mx-2.5
        active:shadow-222xl active:translate-y-px disabled:opacity-40" 
        onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
