import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div></div>
      <div>
        <div>
          <button onClick={() => history.push("/add-expense")}>
            Add-expense
          </button>
        </div>
        <div>
          <button onClick={() => history.push("/add-category")}>
            Add-category
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
