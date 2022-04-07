import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
const HomePageComponent = () => {

    return(
 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-3 '>
                    <div className='card text-center'>
                <div className='card-header  text-white'style={{backgroundColor:"#20c997"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Doctors</h3>

                        </div>
                        <div className='col'>
                            <h3>08</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/doctors'} >View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header text-white' style={{backgroundColor:"#DDA0DD"}}>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Benificiaries</h3>

                        </div>
                        <div className='col'>
                            <h3>02</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/benificiaries'} >View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 '>
                    <div className='card text-center '>
                <div className='card-header bg-primary text-white'>
                    <div className='row align-items-center'>
                        <div className='col'>
                           <h3>Hospitals</h3>

                        </div>
                        <div className='col'>
                            <h3>07</h3>
                        </div>

                    </div>
                </div>
                <div className='card-footer'>
                    <Link to={'/hospitals'}>View Details</Link>
                </div>
                </div>
                </div>

                <div className='col-md-3 ' >
                    <div className='card text-center '>
                <div className='card-header text-white' style={{backgroundColor:"#2F4F4F"}}>
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

export default HomePageComponent