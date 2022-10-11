import axios from "axios";
import { useEffect, useState } from "react";
import { BsShare } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(({ data }) => {
        setProducts(data.products);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    !loading && (
      <div className="cards">
        {products.map((el) => (
          <div key={el.id} className="card">
            <div className="img">
              <img src={el.thumbnail} alt="" />
            </div>
            <div className="caption">
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <span>
                Price: <strong>${el.price}</strong>
              </span>
            </div>
            <div className="footer">
              <div className="btn-add-cart">
                <MdOutlineAddShoppingCart />
                <h5>Add To Cart</h5>
              </div>
              <div className="btn-share">
                <BsShare />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
