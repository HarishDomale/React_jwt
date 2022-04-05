import React from 'react'
import { Link } from 'react-router-dom'

const UserHomePageComponent = () => {
    return(
 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-3 '>
                    <div className='card text-center'>
                <div className='card-header text-white'style={{backgroundColor:"#20c997"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Vaccines</h3>

                        </div>
                        <div className='col'>
                            <h3>08</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/vaccine-calender'} >View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header text-white' style={{backgroundColor:"#aa66cc"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Book Vaccine</h3>

                        </div>
                        <div className='col'>
                            <h3>02</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/benificiaries'} >Book</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header bg-primary text-white'>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Booking Details</h3>

                        </div>
                        <div className='col'>
                            <h3>07</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/hospitals'} >View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 ' >
                    <div className='card text-center '>
                <div className='card-header text-white' style={{backgroundColor:"#0dcaf0"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Vaccines</h3>

                        </div>
                        <div className='col'>
                            <h3>10</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/vaccines'} >View Details</Link>
                </div>
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default UserHomePageComponent