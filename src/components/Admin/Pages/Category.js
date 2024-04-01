import React, { useContext, useState } from "react";
import "../Pages/CSS/Category.css";
import { Context } from "../Context/Context";
import Roles from "../Roles/Roles";
import Navbar2 from "../Navbar2";
import Sidebar2 from "../Sidebar2";

function Category({ Toggle = false, ...props }) {
  const [toggle1, setToggle1] = useState(true);

  const Toggle1 = () => {
    setToggle1(!toggle1);
  };

  console.log(Toggle);
  console.log(props);
  const { all_details } = useContext(Context);
  return (
    <div>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle1 && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar2 Toggle={Toggle1} />
            </div>
          )}
          {toggle1 && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar2 Toggle={Toggle1} />
            <div className="item-category">
              <div className="category-details">
                {all_details.map((item, i) => {
                  if (props.category === item.category) {
                    return (
                      <div className="role-card" key={i}>
                        <Roles
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          specialization={item.specialization}
                          email={item.email}
                          no={item.no}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
