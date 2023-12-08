import './Footer.css';

const Footer = () => {
    return (
        <footer className="black-footer">
            <div className="footer-content">
                <div className='vat-menu' >
                    <div className='icon-position' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <rect x="0.5" y="0.5" width="23" height="23" stroke="black" />
                            <path d="M22 8.14361V3.8657C22 2.53709 21.3976 2 19.9012 2H16.0988C14.6024 2 14 2.53709 14 3.8657V8.13418C14 9.47221 14.6024 9.99988 16.0988 9.99988H19.9012C21.3976 10.0093 22 9.47221 22 8.14361Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 19.9012V16.0988C22 14.6024 21.3976 14 19.9012 14H16.0988C14.6024 14 14 14.6024 14 16.0988V19.9012C14 21.3976 14.6024 22 16.0988 22H19.9012C21.3976 22 22 21.3976 22 19.9012Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 8.14361V3.8657C10 2.53709 9.39765 2 7.90118 2H4.09882C2.60235 2 2 2.53709 2 3.8657V8.13418C2 9.47221 2.60235 9.99988 4.09882 9.99988H7.90118C9.39765 10.0093 10 9.47221 10 8.14361Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 19.9012V16.0988C10 14.6024 9.39765 14 7.90118 14H4.09882C2.60235 14 2 14.6024 2 16.0988V19.9012C2 21.3976 2.60235 22 4.09882 22H7.90118C9.39765 22 10 21.3976 10 19.9012Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <span>VAT Menu </span>
                </div>
                <div className='transaction'>
                    <div className='icon-position'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path d="M2 8.50488H22" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 16.5049H8" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5 16.5049H14.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <span>Transactions </span>
                </div>
                <div className='trips' >
                    <div className='icon-position'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.5 12.4098V7.83986C2.5 6.64986 3.23 5.58982 4.34 5.16982L12.28 2.16982C13.52 1.69982 14.85 2.61985 14.85 3.94985V7.74983" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 12H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <span>Trips </span>
                </div>


            </div>
        </footer>
    );
}

export default Footer;