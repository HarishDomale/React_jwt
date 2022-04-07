import React, { useEffect,useState } from 'react'
import {Link, useHistory,useParams} from "react-router-dom";
import BookingService from '../services/BookingService'
import VaccineService from '../services/VaccineService';
const AddBookingComponent = () => {
 
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    const[vaccine,setVaccine]=useState([])
    const[hospitalName,setHospitalName]=useState('')
    
    const {id}=useParams()
    const history= useHistory()

    const saveBooking=(e)=>{
        e.preventDefault()

        const booking={firstName,lastName,email,date,time,vaccine,hospitalName}

        BookingService.createBooking(booking).then((response)=>{
            history.push('/booking-details')
        }).catch(error=>{
            console.log(error)
        })
    }

    

    useEffect(() => {
        VaccineService.getAllVaccines().then((response)=>{
            setVaccine(response.data)
        }).catch(error=>{
            console.log(error)
        })

    }, [])
    

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

                            <div className='form-group mb-2'>
                                <label className="form-lable">Time slot:<span style={{color:"red"}}>*</span></label>
                                <select
                                    type="select"
                                    placeholder="select time slot"
                                    name="time"
                                    className="form-control"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                >
                                    
                                <option selected>Select Time</option><option value="10 AM">10.00 AM</option>
                                <option value="11.00 AM">11.00 AM</option>
                                <option value="12.00 AM">12.00 PM</option>
                                <option value="01.00 PM">01.00 PM</option>
                                <option value="02.00 PM">02.00 PM</option>
                                </select>
                                </div>

                            {/* <div className="form-group mb-2">
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
                            </div> */}

                            <div className="form-group mb-2">
                                <label className="form-lable">Vaccine Name:<span style={{color:"red"}}>*</span></label>
                               <select
                               type="select"
                               placeholder="Enter vaccine name"
                               name="vaccine"
                               className="form-control"
                               value={vaccine}
                               onChange={(e) => setVaccine(e.target.value)}>
                                   {vaccine.map((vaccines)=>(
                                    <option value={vaccines.id}>{vaccines.vaccineName}</option>))}
                               </select>
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