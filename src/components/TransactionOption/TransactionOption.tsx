/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import './TransactionOption.css'

import { Typography } from '@mui/material';
import publicImages from '../../imageIndex';


const TransactionOption = () => {

    return (
        <>
            <div>
                <div>
                    <img src={publicImages.TransactionHeaderImage} alt="" className="bg-image" />
                </div>
                <div className='back-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle opacity="0.25" cx="24" cy="24" r="24" fill="#0A0E31" />
                    </svg>
                    <div className='back-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='transactionoption-main' >
                    <div className='transactionDetails' >
                        <div className='shopping-icon' >
                            <div style={{ margin: '15px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M8.50388 6.18105C8.50388 6.18105 21.4015 6.18105 24.1574 6.18105C26.9133 6.18105 27.244 7.61412 26.4724 11.0314C25.7007 14.559 25.2598 16.9842 24.9291 18.1968C24.5984 19.5196 24.1574 20.181 21.4015 20.2913C18.6456 20.4015 11.9212 20.2913 10.7086 20.2913C9.49601 20.2913 9.05506 20.0708 8.28341 17.7559C7.51176 15.4409 2.88184 1.88184 2.88184 1.88184" stroke="url(#paint0_linear_4275_2175)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.8188 13.4565H21.2913" stroke="url(#paint1_linear_4275_2175)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.37 28.3386C12.4724 28.3386 13.3542 27.4567 13.3542 26.3544C13.3542 25.252 12.4724 24.3701 11.37 24.3701C10.2676 24.3701 9.38574 25.252 9.38574 26.3544C9.38574 27.4567 10.2676 28.3386 11.37 28.3386Z" stroke="url(#paint2_linear_4275_2175)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.5039 28.3386C23.6062 28.3386 24.4881 27.4567 24.4881 26.3544C24.4881 25.252 23.6062 24.3701 22.5039 24.3701C21.4015 24.3701 20.5196 25.252 20.5196 26.3544C20.4094 27.4567 21.4015 28.3386 22.5039 28.3386Z" stroke="url(#paint3_linear_4275_2175)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4275_2175" x1="2.88184" y1="1.88184" x2="27.8286" y2="18.8799" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2B0D43" />
                                            <stop offset="1" stop-color="#7B136A" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_4275_2175" x1="10.8188" y1="13.4565" x2="11.3301" y2="16.268" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2B0D43" />
                                            <stop offset="1" stop-color="#7B136A" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_4275_2175" x1="9.38574" y1="24.3701" x2="14.13" y2="26.8613" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2B0D43" />
                                            <stop offset="1" stop-color="#7B136A" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_4275_2175" x1="20.5112" y1="24.3701" x2="25.2612" y2="26.8696" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2B0D43" />
                                            <stop offset="1" stop-color="#7B136A" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 220" fill="none">
                            <path d="M414 36V184C414 203.9 397.9 220 378 220H36C16.1 220 0 203.9 0 184V36C0 16.1 16.1 0 36 0H145.3C156.3 0 166.1 6.5 170.7 16.5C177 30.4 190.9 40 207.2 40C223.4 40 237.4 30.3 243.7 16.5C248.1 6.5 258 0 268.9 0H378C397.9 0 414 16.1 414 36Z" fill="url(#paint0_linear_4275_2169)" />
                            <defs>
                                <linearGradient id="paint0_linear_4275_2169" x1="0" y1="0" x2="319.461" y2="315.673" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8E2EDA" />
                                    <stop offset="1" stop-color="#F4B0E9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='transaction-name' >
                            <Typography className='label'>Louis Vuitton Maison
                                Champs Élysées</Typography>
                        </div>
                        <div className='transaction-price' >
                            <Typography className='label'>£598.00</Typography>
                        </div>
                    </div>
                    <div className='transactionoption-body'>
                        <div className='transactionoption-list'>
                            <div className='transactionoption-icon'>
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
                                <Typography className='transactionoption-label' >
                                    Add To Trip
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
                        <div className='transactionoption-list'>
                            <div className='transactionoption-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.7">
                                        <path d="M1.6665 7.50033V5.41699C1.6665 3.34199 3.3415 1.66699 5.4165 1.66699H7.49984" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5 1.66699H14.5833C16.6583 1.66699 18.3333 3.34199 18.3333 5.41699V7.50033" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.3335 13.333V14.583C18.3335 16.658 16.6585 18.333 14.5835 18.333H13.3335" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.49984 18.3333H5.4165C3.3415 18.3333 1.6665 16.6583 1.6665 14.5833V12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.1668 7.91699V12.0837C14.1668 13.7503 13.3335 14.5837 11.6668 14.5837H8.3335C6.66683 14.5837 5.8335 13.7503 5.8335 12.0837V7.91699C5.8335 6.25033 6.66683 5.41699 8.3335 5.41699H11.6668C13.3335 5.41699 14.1668 6.25033 14.1668 7.91699Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.8332 10H4.1665" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                            <div >
                                <Typography className='transactionoption-info'>
                                    Upload An Itemised VAT Receipt
                                </Typography>
                                <Typography className='transactionoption-label'>
                                    VAT Receipt
                                </Typography>

                            </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.5">
                                    <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg></div>
                        </div>
                        <div className='transactionoption-list'>
                            <div className='transactionoption-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.7">
                                        <path d="M1.6665 7.50033V5.41699C1.6665 3.34199 3.3415 1.66699 5.4165 1.66699H7.49984" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5 1.66699H14.5833C16.6583 1.66699 18.3333 3.34199 18.3333 5.41699V7.50033" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.3335 13.333V14.583C18.3335 16.658 16.6585 18.333 14.5835 18.333H13.3335" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.49984 18.3333H5.4165C3.3415 18.3333 1.6665 16.6583 1.6665 14.5833V12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.1668 7.91699V12.0837C14.1668 13.7503 13.3335 14.5837 11.6668 14.5837H8.3335C6.66683 14.5837 5.8335 13.7503 5.8335 12.0837V7.91699C5.8335 6.25033 6.66683 5.41699 8.3335 5.41699H11.6668C13.3335 5.41699 14.1668 6.25033 14.1668 7.91699Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.8332 10H4.1665" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                            <div >
                                <Typography className='transactionoption-label'>
                                    VAT Reclaim Barcode
                                </Typography>
                            </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.5">
                                    <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg></div>
                        </div>
                        <div className='transactionoption-list'>
                            <div className='transactionoption-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.7">
                                        <path d="M5.60817 16.417C6.2915 15.6837 7.33317 15.742 7.93317 16.542L8.77484 17.667C9.44984 18.5587 10.5415 18.5587 11.2165 17.667L12.0582 16.542C12.6582 15.742 13.6998 15.6837 14.3832 16.417C15.8665 18.0003 17.0748 17.4753 17.0748 15.2587V5.86699C17.0832 2.50866 16.2998 1.66699 13.1498 1.66699H6.84984C3.69984 1.66699 2.9165 2.50866 2.9165 5.86699V15.2503C2.9165 17.4753 4.13317 17.992 5.60817 16.417Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.6665 5.83301H13.3332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 9.16699H12.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>

                            </div>
                            <div >
                                <Typography className='transactionoption-label'>
                                    FAQ’s & Help
                                </Typography>
                            </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.5">
                                    <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg></div>
                        </div>
                        <div className='transactionoption-list'>
                            <div className='transactionoption-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.7">
                                        <path d="M5.60817 16.417C6.2915 15.6837 7.33317 15.742 7.93317 16.542L8.77484 17.667C9.44984 18.5587 10.5415 18.5587 11.2165 17.667L12.0582 16.542C12.6582 15.742 13.6998 15.6837 14.3832 16.417C15.8665 18.0003 17.0748 17.4753 17.0748 15.2587V5.86699C17.0832 2.50866 16.2998 1.66699 13.1498 1.66699H6.84984C3.69984 1.66699 2.9165 2.50866 2.9165 5.86699V15.2503C2.9165 17.4753 4.13317 17.992 5.60817 16.417Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.6665 5.83301H13.3332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 9.16699H12.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>

                            </div>
                            <div >
                                <Typography className='transactionoption-info'>
                                    Account
                                </Typography>
                                <Typography className='transactionoption-label'>
                                    IBAN...6348
                                </Typography>
                            </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.5">
                                    <path d="M7.4248 16.5999L12.8581 11.1666C13.4998 10.5249 13.4998 9.4749 12.8581 8.83324L7.4248 3.3999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg></div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default TransactionOption;