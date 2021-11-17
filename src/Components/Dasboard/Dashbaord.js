import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import useFirebase from "../../hooks/useFirebase";
import Myorder from "../Allorders/Myorder";
import Reviews from "../Reviews/Reviews";
import Addreviews from "../Addreviews/Addreviews";
import Pay from "../pay/Pay";
import ManageProduct from "../ManageProduct.js/ManageProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Allorders from "../Allorders/Allorders";
import AddProduct from "../AddProduct/AddProduct";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../../hooks/AdminRoute";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user, logout } = useFirebase();
  const { admin } = useAuth();
  
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">Pay</li>
              </Link>

              <Link to={`${url}/allorder`}>
                <li className="dashboard-menu mt-5">All Order</li>
              </Link>
              <Link to={`${url}/myorder`}>
                <li className="dashboard-menu mt-5">MyOrder</li>
              </Link>
              <Link to={`${url}/manageproduct`}>
                <li className="dashboard-menu mt-5">Manage Product</li>
              </Link>

              <Link to={`${url}/reviews`}>
                <li className="dashboard-menu mt-5">Reviews</li>
              </Link>
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5" onClick={logout}>Log Out</li>

                {admin && (
                  <>
                  
                  <Link to={`${url}/allorder`}>
                  <li className="dashboard-menu">Manage All Orders</li>
                    </Link>
                  <Link to={`${url}/addproduct`}>
                  <li className="dashboard-menu">Add A product</li>
                    </Link>
                  <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                    </Link>
                    <Link to={`${url}/manageproduct`}>
                  <li className="dashboard-menu">Manage Products</li>
                    </Link>
                    
                    </>
                  )}
                
                
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <Pay></Pay>
              </Route>
              <Route  path={`${path}/allorder`}>
                <Allorders></Allorders>
              </Route>
              <Route  path={`${path}/myorder`}>
                <Myorder></Myorder>
              </Route>
              <Route  path={`${path}/reviews`}>
                <Reviews></Reviews>
              </Route>
              <AdminRoute  path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute  path={`${path}/manageproduct`}>
                <ManageProduct></ManageProduct>
              </AdminRoute>
              <AdminRoute  path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              
              
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
