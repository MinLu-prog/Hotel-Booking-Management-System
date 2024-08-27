import React, { useState, useEffect } from "react";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Tabs } from 'antd';
import axios from "axios";
const {TabPane} = Tabs;

function Profilescreen() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }


    }, [])

    return (
        <div className="ml-3 mt-3">
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Profile" key="1">
                    <h1>My Profile</h1>
                    <br />

                    <h1> Name : {user.name}</h1>
                    <h1> Email : {user.email}</h1>
                    <h1> isAdmin : {user.isAdmin ? 'YES' : 'NO'}</h1>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Bookings" key="2">
                    <MyBookings />
                </Tabs.TabPane>

            </Tabs>
        </div>
    );
}

export default Profilescreen;


export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const[bookings,setbookings] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchBookings() {
            try {
                setLoading(true);
                const data =  await(await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id })).data;
                console.log(data);
                setbookings(data);
                setLoading(false);
                setError(error);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBookings();

    }, [])


    return (
        <div>
            <div className="row">
                <div className = "col-md-6">
                    {loading && (<Loader/>)}
                    {bookings && (bookings.map(booking =>{

                           return  <div>
                                <h1>{bookings.room}</h1>
                            </div>
                    }))}
                </div>
            </div>
        </div>
    )

}
