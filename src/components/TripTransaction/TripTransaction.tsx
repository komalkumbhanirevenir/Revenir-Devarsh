/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material';
import './TripTransaction.css';

// images
import publicImages from '../../imageIndex';
import Footer from '../Footer/Footer';

const TripTransaction = () => {

    return (
        <>
            <div>
                <div className='triptransaction-main'>
                    <div className='bg-gradient'>
                        <div className='icon-container'>
                            <div className='backarrow-icon' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='receipt-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.7">
                                        <path d="M5.60841 16.4165C6.29175 15.6832 7.33342 15.7415 7.93342 16.5415L8.77508 17.6665C9.45008 18.5582 10.5417 18.5582 11.2167 17.6665L12.0584 16.5415C12.6584 15.7415 13.7001 15.6832 14.3834 16.4165C15.8667 17.9998 17.0751 17.4748 17.0751 15.2582V5.8665C17.0834 2.50817 16.3001 1.6665 13.1501 1.6665H6.85008C3.70008 1.6665 2.91675 2.50817 2.91675 5.8665V15.2498C2.91675 17.4748 4.13341 17.9915 5.60841 16.4165Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66675 5.8335H13.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 9.1665H12.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className='trip-info'>
                            <Typography className='countryname' >
                                France
                            </Typography>
                            <Typography className='tripdate'>
                                21/02/2023 - 21/03/2023
                            </Typography>
                        </div>
                        <div className='flag-img'>
                            <img src={publicImages.FranceFlag} />
                        </div>
                        <div>
                            <Typography className='total-reclaim' >
                                Total Reclaim
                            </Typography>
                            <Typography className='reclaim-amount' >
                                £4.28
                            </Typography>
                        </div>
                        <div className='tnc-container' >
                            <Typography className='tnc-content'>
                                Based on eligible, processed transactions, &nbsp;<span> Terms and Conditions</span> apply.
                            </Typography>
                        </div>
                    </div>
                    <div className='status-note' >
                        <div className='transaction-status'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="37" viewBox="0 0 195 37" fill="none">
                                <g filter="url(#filter0_d_4275_2605)">
                                    <path d="M4 10C4 4.47715 8.47715 0 14 0H181C186.523 0 191 4.47715 191 10V19C191 24.5228 186.523 29 181 29H14C8.47715 29 4 24.5228 4 19V10Z" fill="url(#paint0_linear_4275_2605)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_4275_2605" x="0" y="0" width="195" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4275_2605" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4275_2605" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_4275_2605" x1="97.5" y1="0" x2="97.5" y2="29" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E66D60" />
                                        <stop offset="1" stop-color="#E9A847" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Typography className='status-label'>Spend Insufficient</Typography>
                        </div>
                        <div >
                            <Typography className='note-label'>At least €150 of eligible spend must be
                                processed in France to make a tax claim</Typography>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <Typography className='process-list'>Processed Transactions</Typography>
                        </div>
                    </div>
                    <div className='triptransactionlist-container'>
                        <div className='triptransactionlist-content'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction1} />
                            </div>
                            <div className='transaction-info'>
                                <Typography className='company-name'>Monsoir</Typography>
                                <Typography className='transaction-type'>Shopping</Typography>
                            </div>
                            <div className='transactionamount-info'>
                                <Typography className='transaction-amount'>£35.00</Typography>
                                <Typography className='triptransaction-status'>Processed</Typography>
                            </div>
                        </div>
                        <div className='triptransactionlist-content'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction2} />
                            </div>
                            <div className='transaction-info'>
                                <Typography className='company-name'>Restaurant Guy Savoy</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transactionamount-info'>
                                <Typography className='transaction-amount'>£35.00</Typography>
                                <Typography className='triptransaction-status'>Receipt Required</Typography>
                            </div>
                        </div>
                        <div className='triptransactionlist-content'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction2} />
                            </div>
                            <div className='transaction-info'>
                                <Typography className='company-name'>Chanel</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transactionamount-info'>
                                <Typography className='transaction-amount'>£35.00</Typography>
                                <Typography className='triptransaction-status'>Pending</Typography>
                            </div>
                        </div>
                        <div className='triptransactionlist-content'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction3} />
                            </div>
                            <div className='transaction-info'>
                                <Typography className='company-name'>Restaurant Guy Savoy</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transactionamount-info'>
                                <Typography className='transaction-amount'>£35.00</Typography>
                                <Typography className='triptransaction-status'>Receipt Required</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default TripTransaction;