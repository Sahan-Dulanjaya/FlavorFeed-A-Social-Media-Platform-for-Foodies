/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css";
import { FaUsers,FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import {AiFillHome} from "react-icons/ai";
import logo from '../img/icon_logolghite.png'
const AppHeader = ({ authenticated, onLogout }) => {
  return (
    <>
      <header aria-label="Page Header" className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h5 className="text-xl font-bold text-gray-900 ">

                <Link to="/" className="text-3xl text-white">
                  <img src={logo} style={{ height: "70px", width: "80px" }} />
                </Link>
              </h5>

            </div>
            <div>
              <h6 className="text-xl font-bold text-white "> Eat, Snap, Share!</h6>
            </div>
            <div className="flex items-center justify-end gap-4">
              <nav className="app-nav  text-white">
                {authenticated ? (
                  <ul>

                    <li>
                      <NavLink to="/home"><AiFillHome/></NavLink>
                    </li>

                    <li>
                      <NavLink to="/profile"><FaUserAlt/></NavLink>
                    </li>
                    <li>
                      <a onClick={onLogout}><IoLogOut/></a>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">Signup</NavLink>
                    </li>
                  </ul>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
