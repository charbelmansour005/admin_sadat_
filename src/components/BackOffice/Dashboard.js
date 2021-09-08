import { useState, useEffect } from "react";
import "../../App.css";
import "../../styles/Dashboard.css";
import Comparative from "./Comparative";
import Customers from "./Customers";
import MenuAnalysis from "./MenuAnalysis";
import Summary from "./Summary";
import Today from "./Today";




const Dashboard = () => {

    const [tDay, setToday] = useState(false)
    const [summary, setSummary] = useState(false)
    const [menu, setMenu] = useState(false)
    const [cust, setCustomer] = useState(false)
    const [compara, setComparative] = useState(false)
    
    let openSummary = () => {
        setSummary(true)
        setToday(false)
        setMenu(false)
        setCustomer(false)
        setComparative(false)
    }
    let openToday = () => {
        setSummary(false)
        setToday(true)
        setMenu(false)
        setCustomer(false)
        setComparative(false)
    }
    let openMenu = () => {
        setSummary(false)
        setToday(false)
        setMenu(true)
        setCustomer(false)
        setComparative(false)
    }
    let openCustomer = () => {
        setSummary(false)
        setToday(false)
        setMenu(false)
        setCustomer(true)
        setComparative(false)
    }
    let openComparative = () => {
        setSummary(false)
        setToday(false)
        setMenu(false)
        setCustomer(false)
        setComparative(true)
    }

    useEffect(() => {
        setSummary(true)
    }, []);
    return (

        <div className="main">
            <div>
                <div className="dash-title">
                    Dashboard
                </div>
            </div>
            <div>

                <div>
                    <div style={{ display: 'flex', marginTop: 25, marginLeft: 10, alignItems: 'center', flexDirection: 'row' }}>
                        <div>
                            <select className="dash-branch" defaultValue="All Branches">
                                <option defaultValue selected >
                                    All Branches
                                </option>
                                <option>
                                    Branch1
                                </option>
                                <option>
                                    Branch2
                                </option>
                            </select>
                        </div>
                        <div >
                            <input className="dash-date" type="date"></input>
                        </div>

                        <div>
                            <button className="btn-search" type="submit" value="Search">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 25 }}>
                <div style={{ display: 'flex' }}>


                    <div className="dash-net-sales">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Net sales
                            </label>
                            <label className="dash-sale-result">
                                11234546
                            </label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Gross Sales
                            </label>
                            <label className="dash-sale-result">
                                31231231
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Avg Checks
                            </label>
                            <label className="dash-sale-result">
                                123123123123
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Avg by Customer
                            </label>
                            <label className="dash-sale-result">
                                312312312321312
                            </label>
                        </div>

                    </div>
                    <div className="dash-net-sales">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                MTD
                            </label>
                            <label className="dash-sale-result">
                                11234546
                            </label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                LYMTD
                            </label>
                            <label className="dash-sale-result">
                                31231231
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                YTD
                            </label>
                            <label className="dash-sale-result">
                                123123123123
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                LYYTD
                            </label>
                            <label className="dash-sale-result">
                                312312312321312
                            </label>
                        </div>
                    </div>
                    <div className="dash-net-sales">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Tax Summary
                            </label>
                            <label className="dash-sale-result">
                                11234546
                            </label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Discount Summary
                            </label>
                            <label className="dash-sale-result">
                                31231231
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Paid in
                            </label>
                            <label className="dash-sale-result">
                                123123123123
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Paid Out
                            </label>
                            <label className="dash-sale-result">
                                312312312321312
                            </label>
                        </div>
                    </div>
                    <div className="dash-net-sales">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Customer Aged
                            </label>
                            <label className="dash-sale-result">
                                11234546
                            </label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Voids Summary
                            </label>
                            <label className="dash-sale-result">
                                31231231
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Refunds Summary
                            </label>
                            <label className="dash-sale-result">
                                123123123123
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label className="dash-sale-title">
                                Customer Served
                            </label>
                            <label className="dash-sale-result">
                                312312312321312
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '50%', border: '1px solid lightgray', marginTop: 25, marginLeft: 25, width: '70%' }} >
                <div className="dash-other">
                    <div>
                        <button onClick={() => openSummary()} className="btn-dash" type="submit" value="Summary">Summary</button>
                    </div>

                    <div>
                        <button onClick={() => openMenu()} className="btn-dash" type="submit" value="Menu">Menu Analysis</button>
                    </div>
                    <div>
                        <button onClick={() => openComparative()} className="btn-dash" type="submit" value="Comparative">Comparative</button>
                    </div>
                    <div>
                        <button onClick={() => openCustomer()} className="btn-dash" type="submit" value="Customers">Customers</button>
                    </div>
                    <div>
                        <button onClick={() => openToday()} className="btn-dash" type="submit" value="Today">Today</button>
                    </div>
                </div>

                {
                    tDay ?
                        <div>
                            <Today />
                        </div> : null
                }
                {
                    summary ?
                        <div>
                            <Summary />
                        </div> : null
                }
                {
                    menu ?
                        <div>
                            <MenuAnalysis />
                        </div> : null
                }
                {
                    cust ?
                        <div>
                            <Customers />
                        </div> : null
                }
                {
                    compara ?
                        <div>
                            <Comparative />
                        </div> : null
                }
            </div>


        </div>
    )
}
export default Dashboard;