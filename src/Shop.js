import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [items, sertItems] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://learn.guidedao.xyz/api/student/products"
        );
        const data = await response.json();
        sertItems(data[0][0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="shop">
      {loader && <h2 className="ml-2.5 mt-2 text-2xl italic">Скоро появятся товары</h2>}
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <Item info={item} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
