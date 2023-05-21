import React, { useState, useEffect } from "react"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaBalanceScale, FaShoppingCart, FaDonate, FaSyncAlt, FaMoneyBillAlt, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillHome,AiFillDashboard } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { FaUserAlt,FaHandHoldingUsd,FaHandHoldingWater,FaHandHolding } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export default function sidebar() {

    return (
        <div >
            <SideNav style={{
                background: '#0E1E2B', width: '2vh'
            }}
            >
                <div style={{ paddingTop: '2vh', paddingLeft: '1vh' }}><h5 style={{color:'white'}}><br/><br/><br/><br/><br/><br/>  </h5>
                </div>


                <div style={{ paddingTop: '3vh', paddingLeft: '2vh' }}>

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/",
                        }}
                    >
                        <NavItem eventKey="budget">


                            <NavIcon>
                                <br/>
                                <AiFillDashboard style={{ width: '1.75em' }} />
                            </NavIcon>

                        </NavItem>
                    </Link><br />
                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/home",
                        }}
                    >
                        <NavItem eventKey="budget">


                            <NavIcon>
                                <br/>
                                <AiFillHome style={{ width: '1.75em' }} />
                                <br/>
                            </NavIcon>


                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/users",
                        }}
                    >
                        <NavItem eventKey="users">


                            <NavIcon>
                                <HiUserGroup style={{ width: '1.75em' }} />
                            </NavIcon>


                        </NavItem>
                    </Link><br /><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/shared",
                        }}
                    >
                        <NavItem eventKey="budget">


                            <NavIcon>
                                <BiShare style={{ width: '1.75em' }} />
                            </NavIcon>


                        </NavItem>
                    </Link><br />



                </div>
            </SideNav>

        </div>
    );
}
