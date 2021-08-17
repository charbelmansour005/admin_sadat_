import { useState, useEffect } from 'react'
import history from '../history'
import '../../App.css';
import add from '../../assets/add.png'
import minus from '../../assets/minus.png'
import Categories from '../Setup/category/Categories';
import Currency from '../Setup/currency/Currency';
import SalesItem from '../Setup/salesItem/SalesItem';
import Payment from '../Setup/payment/Payment';
import VoidReason from '../Setup/voidreason/VoidReason';
import Header from './Header';

const Home = (props) => {
    const [isDashboard, setDashboard] = useState(false)
    const [isHomeSub, setHomeSub] = useState(false)

    const [names, setNames] = useState([])
    const [isBackOffice, setBackOffice] = useState(false)
    const [isStock, setStockBack] = useState(false)
    const [stock, setStock] = useState(false)
    const [isAccounting, setAccounting] = useState(false)
    const [isReservation, setIsReservation] = useState(false)
    const [reservation, setReservation] = useState(false)
    const [isAccount, setIsAccount] = useState(false)
    const [isDigital, setDigital] = useState(false)
    const [digital, setDig] = useState(false)
    const [isSetup, setIsSetup] = useState(false)
    const [setupBack, setSetupBack] = useState(false)
    const [isEmployee, setEmployee] = useState(false)
    const [employeeBack, setEmployeeBack] = useState(false)
    const [isCustomer, setCustomer] = useState(false)
    const [customerBack, setCustomerBack] = useState(false)
    const [isCalendar, setCalendar] = useState(false)
    const [calendarBack, setCalendarBack] = useState(false)
    const [isSales, setIsSales] = useState(false)
    const [isGroup, setIsGroup] = useState(false)
    const [isDivision, setIsDivision] = useState(false)
    const [isCategory, setIsCategory] = useState(false)
    const [isvoid, setIsVoid] = useState(false)
    const [voidReason, setVoid] = useState(false)
    const [isPayment, setIsPayment] = useState(false)
    const [isReport, setIsReport] = useState(false)
    const [isEod, setIsEod] = useState(false)
    const [sales, setSales] = useState(false)
    const [category, setCategory] = useState(false)
    const [payment, setPayment] = useState(false)
    const [iscurrency, setIsCurrency] = useState(false)
    const [currency, setCurrency] = useState(false)
    useEffect(() => {
        goToBackOffice()
        return () => {
        }
    }, [])

    let goToBackOffice = () => {

        const itemarray = [{
            "id": 1,
            "name": "hala"
        }, {
            "id": 2,
            "name": "birabak"
        }, {
            "id": 3,
            "name": "ya 8ale"
        }, {
            "id": 4,
            "name": "w fik"
        }, {
            "id": 5,
            "name": "eh whek"
        }, {
            "id": 6,
            "name": "kifak"
        }]
        itemarray.map(data => {
            names.push(
                <option value={data.name}>{data.name}</option>
            )
        })

        checkBackOffice()





    }
    let goToStock = (e) => {
        e.preventDefault()

        checkStock()
        setNames([])


    }
    let goToAccounting = (e) => {
        e.preventDefault()
        setAccounting(true)
        checkAccounting()
    }
    let goToReservation = (e) => {
        e.preventDefault()
        setReservation(true)

        checkReservation()
    }
    let goToDigital = (e) => {
        e.preventDefault()
        setDigital(true)
        checkDigital()

    }
    let goToSetup = (e) => {
        e.preventDefault()
        setIsSetup(true)
        checkSetup()
    }
    let checkSetup = () => {
        if (isSetup === false) {
            setIsSetup(true)
        }
        else {
            setIsSetup(false)
        }
    }
    let goToEmployees = (e) => {
        e.preventDefault()
        setEmployee(true)
        checkEmployee()
    }
    let checkEmployee = () => {
        if (isEmployee === false) {
            setEmployee(true)
        }
        else {
            setEmployee(false)
        }
    }
    let goToCustomer = (e) => {
        e.preventDefault()
        setCustomer(true)
        checkCustomer()
    }
    let checkCustomer = () => {
        if (isCustomer === false) {
            setCustomer(true)
        }
        else {
            setCustomer(false)
        }
    }
    let goToCalendar = (e) => {
        e.preventDefault()
        setCalendar(true)
        checkCalendar()
    }
    let checkCalendar = () => {
        if (isCalendar === false) {
            setCalendar(true)

        }
        else {
            setCalendar(false)
        }
    }
    let goToSales = (e) => {
        e.preventDefault()
        history.push("/SalesItem")
        setSales(true)
        setIsGroup(false)
        setIsDivision(false)
        setIsCategory(false)
        setIsPayment(false)
        setCategory(false)
        setPayment(false)
        setIsVoid(false)
        setVoid(false)
        setIsCurrency(false)
        setCurrency(false)

    }
    let goToGroups = (e) => {
        e.preventDefault()
        setIsSales(false)
        setIsGroup(true)
        setIsDivision(false)
        setIsCategory(false)
        setIsPayment(false)
        setCategory(false)
        setPayment(false)
        setVoid(false)
        setIsVoid(false)
        setIsCurrency(false)
        setCurrency(false)
    }
    let goToDivisions = (e) => {
        e.preventDefault()
        setIsSales(false)
        setIsGroup(false)
        setIsCategory(false)
        setIsPayment(false)
        setIsDivision(true)
        setCategory(false)
        setPayment(false)
        setVoid(false)
        setIsVoid(false)
        setIsCurrency(false)
        setCurrency(false)
    }
    let goToCategories = (e) => {
        setIsCategory(true)
        setCategory(true)
        setIsSales(false)
        setSales(false)
        setIsGroup(false)
        setIsPayment(false)
        setIsDivision(false)
        setPayment(false)
        setIsVoid(false)
        setVoid(false)
        setIsCurrency(false)
        setCurrency(false)
        history.push("/Categories")
        e.preventDefault()
    }
    let goToPayment = (e) => {
        e.preventDefault()
        setIsCategory(false)
        setIsSales(false)
        setIsGroup(false)
        setSales(false)
        setIsDivision(false)
        setIsPayment(true)
        setCategory(false)
        setIsVoid(false)
        setVoid(false)
        setIsCurrency(false)
        setCurrency(false)
        history.push("/Payment")
        setPayment(true)
    }
    let goToVoid = (e) => {
        e.preventDefault()
        setIsCategory(false)
        setIsSales(false)
        setIsGroup(false)
        setSales(false)
        setIsDivision(false)
        setIsPayment(false)
        setCategory(false)
        setIsCurrency(false)
        setCurrency(false)
        setIsVoid(true)
        setVoid(true)
        history.push("/VoidReason")
        setPayment(false)
    }
    let goToCurrency = (e) => {
        e.preventDefault()
        setIsCategory(false)
        setIsSales(false)
        setIsGroup(false)
        setSales(false)
        setIsDivision(false)
        setIsPayment(false)
        setCategory(false)
        setIsCurrency(true)
        setCurrency(true)
        setIsVoid(false)
        setVoid(false)
        history.push("/Currency")
        setPayment(false)
    }
    let checkStock = () => {
        if (stock === true) {
            setStock(false)
        }
        else {
            setStock(true)
        }
    }
    let checkDigital = () => {
        if (isDigital === true) {
            setDigital(false)
        }
        else {
            setDigital(true)
        }
    }
    let checkBackOffice = () => {
        if (isHomeSub === true) {
            setHomeSub(false)
        }
        else {
            setHomeSub(true)
        }
    }
    let checkAccounting = () => {
        if (isAccounting === true) {
            setAccounting(false)
        }
        else {
            setAccounting(true)
        }
    }
    let checkReservation = () => {
        if (reservation === true) {
            setReservation(false)
        }
        else {
            setReservation(true)
        }
    }

    return (
        <div className="screen" >
            <div style={{ width: '100%', flex: 1, position: 'relative' }}>
                <Header />
            </div>

            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed'}}>


                <div style={{ width: '10%', height: '100%', backgroundColor: '#fafafa', justifyContent: 'center', marginTop: 10, overflow: 'auto'}}>
                    <div  onClick={goToBackOffice} onMouseEnter={() => setBackOffice(true)} onMouseLeave={() => setBackOffice(false)} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(isBackOffice ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '10%' }} >
                            <div style={{ width: '80%' }}>
                                <label style={{ fontSize: 14 }}  >
                                    Back Office
                                </label>
                            </div>
                            <div style={{ width: '20%' }}>

                                {
                                    isHomeSub ? <div><img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img></div>
                                        : <div><img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4 }}></img></div>
                                }

                            </div>
                        </div>
                    </div>
                    <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                    </div>

                    {
                        isHomeSub ?
                            <div style={{ position: 'relative' }} >

                                <div onMouseEnter={() => setDashboard(true)} onMouseLeave={() => setDashboard(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isDashboard ? { backgroundColor: 'darkgray' } : {}) }}>
                                    <label style={{ width: '50%', textAlign: 'center', fontSize: 15, marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Dashboard
                                    </label>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                </div>
                                <div onMouseEnter={() => setIsReport(true)} onMouseLeave={() => setIsReport(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isReport ? { backgroundColor: 'darkgray' } : {}) }}>
                                    <label style={{ width: '42%', textAlign: 'center', fontSize: 15, marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Reports
                                    </label>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                </div>
                                <div onMouseEnter={() => setIsEod(true)} onMouseLeave={() => setIsEod(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isEod ? { backgroundColor: 'darkgray' } : {}) }}>
                                    <label style={{ width: '50%', textAlign: 'center', fontSize: 15, marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        End of Day
                                    </label>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                </div>
                                <div onClick={goToSetup} onMouseEnter={() => setSetupBack(true)} onMouseLeave={() => setSetupBack(false)} style={{ position: 'relative', padding: 10, marginTop: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(setupBack ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                                    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }} >
                                        <div style={{ width: '80%' }}>
                                            <label style={{ fontSize: 14 }}  >
                                                Setup
                                            </label>
                                        </div>
                                        <div style={{ width: '20%' }}>

                                            {
                                                isSetup ? <div><img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img></div>
                                                    : <div><img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4 }}></img></div>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                                </div>
                                {
                                    isSetup ?
                                        <div style={{}} >
                                            <div onClick={goToSales} onMouseEnter={() => setIsSales(true)} onMouseLeave={() => setIsSales(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isSales ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '80%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Sales Items
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                            <div onClick={goToGroups} onMouseEnter={() => setIsGroup(true)} onMouseLeave={() => setIsGroup(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isGroup ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '68%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Groups
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                            <div onClick={goToDivisions} onMouseEnter={() => setIsDivision(true)} onMouseLeave={() => setIsDivision(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isDivision ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '73%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Divisions
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                            <div onClick={goToCategories} onMouseEnter={() => setIsCategory(true)} onMouseLeave={() => setIsCategory(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isCategory ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '77%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Categories
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                            <div onClick={goToPayment} onMouseEnter={() => setIsPayment(true)} onMouseLeave={() => setIsPayment(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isPayment ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '88%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Payment Types
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                            <div onClick={goToVoid} onMouseEnter={() => setIsVoid(true)} onMouseLeave={() => setIsVoid(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(isvoid ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '77%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Void Reason
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                            <div onClick={goToCurrency} onMouseEnter={() => setIsCurrency(true)} onMouseLeave={() => setIsCurrency(false)} style={{ height: 45, display: 'flex', justifyContent: 'flex-start', width: '100%', ...(iscurrency ? { backgroundColor: 'darkgray' } : {}) }}>
                                                <label style={{ width: '77%', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    Currency
                                                </label>
                                            </div>
                                            <div style={{ height: 1, width: '100%', backgroundColor: '#C5C5C5', borderRadius: 10, borderWidth: 1 }}>

                                            </div>
                                        </div> : null
                                }

                                <div onMouseEnter={() => setEmployeeBack(true)} onMouseLeave={() => setEmployeeBack(false)} onClick={goToEmployees} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(employeeBack ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                                    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }} >
                                        <div style={{ width: '80%' }}>
                                            <label style={{ fontSize: 14 }}  >
                                                Employees
                                            </label>
                                        </div>
                                        <div style={{ width: '20%' }}>

                                            {
                                                isEmployee ? <div><img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img></div>
                                                    : <div><img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4 }}></img></div>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                                </div>
                                <div onMouseEnter={() => setCustomerBack(true)} onMouseLeave={() => setCustomerBack(false)} onClick={goToCustomer} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(customerBack ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                                    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }} >
                                        <div style={{ width: '80%' }}>
                                            <label style={{ fontSize: 14 }}  >
                                                Customers
                                            </label>
                                        </div>
                                        <div style={{ width: '20%' }}>

                                            {
                                                isCustomer ? <div><img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img></div>
                                                    : <div><img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4 }}></img></div>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                                </div>
                                <div onMouseEnter={() => setCalendarBack(true)} onMouseLeave={() => setCalendarBack(false)} onClick={goToCalendar} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(calendarBack ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                                    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }} >
                                        <div style={{ width: '80%' }}>
                                            <label style={{ fontSize: 14 }}  >
                                                Calendars
                                            </label>
                                        </div>
                                        <div style={{ width: '20%' }}>

                                            {
                                                isCalendar ? <div><img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img></div>
                                                    : <div><img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4 }}></img></div>
                                            }

                                        </div>
                                    </div>
                                </div>



                            </div> : null

                    }





                    <div onMouseEnter={() => setStockBack(true)} onMouseLeave={() => setStockBack(false)} onClick={goToStock} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(isStock ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '80%' }}>
                                <label style={{ fontSize: 14 }}>
                                    Stock Management
                                </label>
                            </div>
                            <div style={{ width: '20%' }}>
                                {
                                    stock ? <div>
                                        <img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div> : <div >
                                        <img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div>


                                }
                            </div>

                        </div>


                    </div>

                    <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                    </div>

                    {
                        stock ? <div >
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%' }}>
                                <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                    Suppliers
                                </label>
                            </div>
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                    Clients
                                </label>
                            </div>
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                    Employees
                                </label>
                            </div>
                            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                    Users
                                </label>
                            </div>

                        </div> : null
                    }

                    <div onClick={goToAccounting} onMouseEnter={() => setIsAccount(true)} onMouseLeave={() => setIsAccount(false)} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(isAccount ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '80%' }}>
                                <label style={{ fontSize: 14 }}>
                                    Accounting
                                </label>
                            </div>
                            <div style={{ width: '20%' }}>

                                {
                                    isAccounting ? <div >
                                        <img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div> : <div >
                                        <img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div>
                                }
                            </div>

                        </div>



                    </div>

                    <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                    </div>
                    {
                        isAccounting ?
                            <div >
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%' }}>
                                    <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                        Journal Voucher
                                    </label>
                                </div>
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                    <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                        Receipt Voucher
                                    </label>
                                </div>
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                    <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                        Payment Voucher
                                    </label>
                                </div>



                            </div> : null
                    }

                    <div onClick={goToReservation} onMouseEnter={() => setIsReservation(true)} onMouseLeave={() => setIsReservation(false)} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(isReservation ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '80%' }}>
                                <label style={{ fontSize: 14 }}>
                                    Reservation
                                </label>
                            </div>
                            <div style={{ width: '20%' }}>
                                {
                                    reservation ? <div >
                                        <img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div> : <div >
                                        <img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div>
                                }
                            </div>

                        </div>




                    </div>
                    <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                    </div>


                    <div onClick={goToDigital} onMouseEnter={() => setDig(true)} onMouseLeave={() => setDig(false)} style={{ position: 'relative', padding: 10, flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'flex-start', ...(digital ? { backgroundColor: 'darkgray' } : { backgroundColor: '#E8E8E8' }) }}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '80%' }}>

                                <label style={{ fontSize: 14 }}>
                                    Digital Menu
                                </label>
                            </div>
                            <div style={{ width: '20%' }}>
                                {
                                    isDigital ? <div>
                                        <img src={minus} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div> : <div >
                                        <img src={add} width={10} height={10} style={{ marginLeft: 15, marginTop: 4, textAlign: 'right' }}></img>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>

                    {
                        isDigital ?
                            <div >
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%' }}>
                                    <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                        Journal Voucher
                                    </label>
                                </div>
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                    <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                        Receipt Voucher
                                    </label>
                                </div>
                                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', width: '100%', marginTop: 10 }}>
                                    <label style={{ width: '80%', textAlign: 'center', fontSize: 12 }}>
                                        Payment Voucher
                                    </label>
                                </div>



                            </div> : null
                    }
                    <div style={{ height: 1, width: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>

                    </div>

                </div>

                <div style={{ width: '90%', height: '100%', display: 'flex', marginTop: 10, marginLeft: 10, marginBottom: 50}}>

                    {
                        sales ?
                            <div>
                                <SalesItem />
                            </div> : null
                    }
                    {
                        category ?
                            <div>
                                <Categories />
                            </div> : null
                    }
                    {
                        payment ?
                            <div>
                                <Payment />
                            </div> : null
                    }
                    {
                        voidReason ?
                            <div>
                                <VoidReason />
                            </div> : null
                    }
                    {
                        currency ?
                            <div>
                                <Currency />
                            </div>:null
                    }

                </div>
            </div>
        </div >
    )
}


export default Home;