import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import history from './history'
import '../App.css';
import Loadingbar from 'react-top-loading-bar'

const AddItem = (props) => {



    useEffect(() => {

        return () => {
        }
    }, [])



    return (
        <div >

            <div>
                <div className="addItem">
                    <div style={{ height: '100%', display: 'flex', padding: 10, borderRadius: 10, backgroundColor: 'lightgray' }}>
                        <label style={{ height: '100%', display: 'flex' }}>
                            Add Item
                        </label>
                    </div>
                    <div style={{ height: '100%', display: 'flex', padding: 10, borderRadius: 10, marginLeft: 10, backgroundColor: 'lightgray' }}>
                        <label style={{ height: '100%', display: 'flex' }}>
                            Item List
                        </label>
                    </div>
                </div>


            </div>
            <div style={{  flex: 1, marginTop: 10, marginLeft: 10 }}>
                <div>
                    <label>
                        Item Name
                    </label>
                </div>
                <div>
                    <input type="text"></input>
                </div>

            </div>
        </div >
    )
}
export default AddItem;