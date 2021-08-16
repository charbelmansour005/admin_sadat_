import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import history from '../history'
import '../../App.css';
import Loadingbar from 'react-top-loading-bar'
import { useDispatch, useSelector } from 'react-redux'
const Accounting = (props) => {


    const { postItem, currentUser } = useSelector(state => state.postReducer)
    useEffect(() => {

        return () => {
        }
    }, [])
    return (
        <div style={{    }}>


            <div>
                <h3>
                    Accounting
                </h3>

            </div>


            
        </div >
    )
}
export default Accounting;