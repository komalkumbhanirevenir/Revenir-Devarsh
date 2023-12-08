/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */

import { Typography } from '@mui/material';
import './TransactionFeed.css'

import publicImages from '../../imageIndex';
import Footer from '../Footer/Footer';


const TransactionFeed = () => {

    return (
        <>
            <div>
                <div className='transactionfeed-main'>
                    <div className='bg-gradient'>
                        <div className='backarrow'>
                            <div className='backarrow-icon' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='visacard-img'>
                        <img src={publicImages.VisaCard} />
                    </div>
                    <div className='mastercard-img'>
                        <img src={publicImages.MasterCard} />
                    </div>
                    <div>
                        <div style={{ marginBottom: '20px' }}>
                            <Typography className='transactionfeed-label'>Recent Transactions</Typography>
                        </div>
                    </div>
                    <div className='transactionfeed-body'>
                        <div className='trasactionfeed-list'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction1} />
                            </div>
                            <div className='transactionfeed-info'>
                                <Typography className='transaction-name'>Monsoir</Typography>
                                <Typography className='transaction-type'>Shopping</Typography>
                            </div>
                            <div className='transaction-amount' >
                                <Typography className='amount-details'>£35.00</Typography>
                            </div>
                        </div>
                        <div className='trasactionfeed-list'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction2} />
                            </div>
                            <div className='transactionfeed-info'>
                                <Typography className='transaction-name'>Restaurant Guy Savoy</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transaction-amount'>
                                <Typography className='amount-details'>£35.00</Typography>

                            </div>
                        </div>
                        <div className='trasactionfeed-list'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction2} />
                            </div>
                            <div className='transactionfeed-info'>
                                <Typography className='transaction-name'>Chanel</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transaction-amount'>
                                <Typography className='amount-details'>£35.00</Typography>
                            </div>
                        </div>
                        <div className='trasactionfeed-list'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction3} />
                            </div>
                            <div className='transactionfeed-info'>
                                <Typography className='transaction-name'>Restaurant Guy Savoy</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transaction-amount'>
                                <Typography className='amount-details'>£35.00</Typography>
                            </div>
                        </div>
                        <div className='trasactionfeed-list'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction3} />
                            </div>
                            <div className='transactionfeed-info'>
                                <Typography className='transaction-name'>Restaurant Guy Savoy</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transaction-amount'>
                                <Typography className='amount-details'>£35.00</Typography>
                            </div>
                        </div>
                        <div className='trasactionfeed-list'>
                            <div className='company-icon'>
                                <img src={publicImages.Triptransaction3} />
                            </div>
                            <div className='transactionfeed-info'>
                                <Typography className='transaction-name'>Restaurant Guy Savoy</Typography>
                                <Typography className='transaction-type'>Eating out</Typography>
                            </div>
                            <div className='transaction-amount'>
                                <Typography className='amount-details'>£35.00</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default TransactionFeed;