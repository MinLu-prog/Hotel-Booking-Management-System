import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import axios from "axios";

function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState()

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password
            };

            try {
                setloading(true);
                const response = await axios.post('/api/users/register', user);
                console.log(response.data); // Use response.data instead of response directly
                setloading(false);
                setsuccess(true);

                // Clear form fields
                setname('');
                setemail('');
                setpassword('');
                setcpassword('');
                
                localStorage.setItem('currentUser', JSON.stringify(response.data));
                window.location.href = '/login';
            } catch (error) {
                console.log(error.response ? error.response.data : error.message);
                setloading(false);
                seterror(true);
            }
        } else {
            alert('Passwords do not match');
        }
    }

    return (
        <div>
            {loading && (<Loader />)}
            {error && (<Error />)}

            <div className="row justify-content-center mt-5">
                <div className="col-md-4 mt-5">
                    {success && (<Success message='Registration success' />)}
                    <div className='bs'>
                        <h2>Register</h2>
                        <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="password" className="form-control" placeholder="confirm password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className="btn btn-primary mt-3" onClick={register}>Register</button>
                    </div>

                </div>

            </div>
        </div>
    );

}
export default Registerscreen