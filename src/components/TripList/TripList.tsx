/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
// import '../Trip/Demo.css'
import publicImages from '../../imageIndex';
import { Typography } from '@mui/material';
import './TripList.css'
import Footer from '../Footer/Footer';


const TripList = () => {


    return (
        <>
            <div>
                <div>
                    <img src={publicImages.headerImage} alt="" className="bg-image" />
                </div>
                <div className='triplist-main'>
                    <div style={{ position: 'relative', top: '-36px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 220" fill="none">
                            <path d="M414 36V184C414 203.9 397.9 220 378 220H36C16.1 220 0 203.9 0 184V36C0 16.1 16.1 0 36 0H145.3C156.3 0 166.1 6.5 170.7 16.5C177 30.4 190.9 40 207.2 40C223.4 40 237.4 30.3 243.7 16.5C248.1 6.5 258 0 268.9 0H378C397.9 0 414 16.1 414 36Z" fill="url(#paint0_linear_4297_3756)" />
                            <defs>
                                <linearGradient id="paint0_linear_4297_3756" x1="0" y1="0" x2="319.461" y2="315.673" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#C78AF9" />
                                    <stop offset="1" stop-color="#D22AB7" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className='bg-circle' >
                            <rect width="64" height="64" rx="32" fill="white" />
                        </svg>
                        <img src={publicImages.taxImage} className='tax-img'></img>
                        <label className='reclaim-label'>VAT Reclaim Shopping Trips</label>
                    </div>
                    <div className='triplist-body'>
                        <div className='body-container'>
                            <div className='tripshopping-icon' >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.7">
                                        <path d="M5.66942 4.12054C5.66942 4.12054 14.2678 4.12054 16.1051 4.12054C17.9424 4.12054 18.1629 5.07592 17.6484 7.35413C17.134 9.70584 16.84 11.3226 16.6195 12.131C16.3991 13.0129 16.1051 13.4539 14.2678 13.5274C12.4306 13.6009 7.94763 13.5274 7.13923 13.5274C6.33084 13.5274 6.03687 13.3804 5.52244 11.8371C5.008 10.2938 1.92139 1.25439 1.92139 1.25439" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.2124 8.97119H14.194" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.58016 18.8923C8.31507 18.8923 8.90299 18.3043 8.90299 17.5694C8.90299 16.8345 8.31507 16.2466 7.58016 16.2466C6.84525 16.2466 6.25732 16.8345 6.25732 17.5694C6.25732 18.3043 6.84525 18.8923 7.58016 18.8923Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.0027 18.8923C15.7377 18.8923 16.3256 18.3043 16.3256 17.5694C16.3256 16.8345 15.7377 16.2466 15.0027 16.2466C14.2678 16.2466 13.6799 16.8345 13.6799 17.5694C13.6064 18.3043 14.2678 18.8923 15.0027 18.8923Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <Typography className='trip-details' >
                                    France - Feb 2023
                                </Typography>
                                <Typography className='trip-status' >
                                    In Progress
                                </Typography>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.5">
                                        <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className='body-container'>
                            <div className='tripshopping-icon'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.7">
                                        <path d="M5.66942 4.12054C5.66942 4.12054 14.2678 4.12054 16.1051 4.12054C17.9424 4.12054 18.1629 5.07592 17.6484 7.35413C17.134 9.70584 16.84 11.3226 16.6195 12.131C16.3991 13.0129 16.1051 13.4539 14.2678 13.5274C12.4306 13.6009 7.94763 13.5274 7.13923 13.5274C6.33084 13.5274 6.03687 13.3804 5.52244 11.8371C5.008 10.2938 1.92139 1.25439 1.92139 1.25439" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.2124 8.97119H14.194" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.58016 18.8923C8.31507 18.8923 8.90299 18.3043 8.90299 17.5694C8.90299 16.8345 8.31507 16.2466 7.58016 16.2466C6.84525 16.2466 6.25732 16.8345 6.25732 17.5694C6.25732 18.3043 6.84525 18.8923 7.58016 18.8923Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.0027 18.8923C15.7377 18.8923 16.3256 18.3043 16.3256 17.5694C16.3256 16.8345 15.7377 16.2466 15.0027 16.2466C14.2678 16.2466 13.6799 16.8345 13.6799 17.5694C13.6064 18.3043 14.2678 18.8923 15.0027 18.8923Z" stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>

                            </div>
                            <div >
                                <Typography className='trip-details' >
                                    France - Jan 2023
                                </Typography>
                                <Typography className='trip-status' >
                                    Approved
                                </Typography>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.5">
                                        <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer />
            </div>

        </>
    )
}

export default TripList;