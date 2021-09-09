import { AppBar } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../App.css";
import "../../styles/Dashboard.css";
import Tables from "./Dashboards/Tables";




const Today = () => {
    return (
        <div className="dash-other" >
            <div>
                <div className="dash-main">
                    <div className="today-table">
                        <div style={{ width: 250, display: 'flex', justifyContent: 'center' }}>
                            <label className="dash-table">
                                Tables
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Open Tables
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    88
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Open Tables Total
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="today-table">
                        <div style={{ width: 250, display: 'flex', justifyContent: 'center' }}>
                            <label className="dash-table">
                                Guest
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Number of Guests
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    88
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Yearly nb of Guests
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Total nb of Guests
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    88
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Avg by Customer
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="today-table">
                        <div style={{ width: 250, display: 'flex', justifyContent: 'center' }}>
                            <label className="dash-table">
                                Delivery
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Delivery Orders
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Delivery charges
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    88
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Total Delivery
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="dash-reserv">
                    <div className="today-table">
                        <div style={{ width: 250, display: 'flex', justifyContent: 'center' }}>
                            <label className="dash-table">
                                Reservation
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Reservation Status
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    88
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Reserved Tables
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Available Tables
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Waiting Guests
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="today-table">
                        <div style={{ width: 250, display: 'flex', justifyContent: 'center' }}>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Reserved Seats
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    88
                                </label>
                            </div>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, backgroundColor: '	#F8F8F8', padding: 5 }}>
                            <div>
                                <label className="dash-sub-table" >
                                    Available Seats
                                </label>
                            </div>
                            <div style={{ marginRight: 5 }}>
                                <label className="dash-sub-table" >
                                    445457
                                </label>
                            </div>

                        </div>
                    
                       

                    </div>

                </div>

            </div>
            <div>
            </div>



        </div>
    )
}
export default Today;