import React, { useState } from 'react'
import {Link, useHistory,useParams} from "react-router-dom";
import BookingService from '../services/BookingService'

const AddBookingComponent = () => {
 
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    const[vaccineName,setVaccineName]=useState('')
    const[hospitalName,setHospitalName]=useState('')
    const[doctorName,setDoctorName]=useState('')
    const {id}=useParams()
    const history= useHistory()

    const saveBooking=(e)=>{
        e.preventDefault()

        const booking={firstName,lastName,email,date,time,vaccineName,hospitalName,doctorName}

        BookingService.createBooking(booking).then((response)=>{
            history.push('/booking-details')
        }).catch(error=>{
            console.log(error)
        })
    }

    return(
        <div>
        <br/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className='text-center'>Book Vaccine Appointmnet</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-lable">First Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    
                                    type="text"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Last Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    name="lasttName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Email:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter email-id"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Booking Date:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="date"
                                    placeholder="Enter booking date"
                                    name="date"
                                    className="form-control"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                >
                                </input>

                                <div className="form-group mb-2">
                                <label className="form-lable">Time slot:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter time slot"
                                    name="time"
                                    className="form-control"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Vaccine Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter vaccine name"
                                    name="vaccineName"
                                    className="form-control"
                                    value={vaccineName}
                                    onChange={(e) => setVaccineName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Hospital Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter hospital name"
                                    name="hospitalName"
                                    className="form-control"
                                    value={hospitalName}
                                    onChange={(e) => setHospitalName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Doctor Name:<span style={{color:"red"}}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter doctor name"
                                    name="doctorName"
                                    className="form-control"
                                    value={doctorName}
                                    onChange={(e) => setDoctorName(e.target.value)}
                                >
                                </input>
                            </div>

                            </div>
                            <br/>
                            <button className="btn btn-success" onClick={(e) => saveBooking(e)}>Submit</button>
                            <Link to={"/user-home"} className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                            
                        </form>
                       
                        <span className="float-right" style={{color:"#DC143C"}}>* fields mandatory </span>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
    )


}

export default AddBookingComponent