/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

// mui
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// components
import TripList from '../components/TripList/TripList';
import SelectTrip from '../components/SelectTrip/SelectTrip';
import TravelInfo from '../components/TravelInfo/TravelInfo';
import TicketInfo from '../components/TicketInfo/TicketInfo';

// images
import publicImages from '../imageIndex';
import Revbutton from '../components/Button/Revbutton';


enum ActiveStep {
    TRIP,
    TRAVELINFO,
    TICKETINFO,
    TripMain
}

const intialSteps = [
    {
        label: 'Please select a travel domain!',
        imgPath: '',
        title: 'Select an EU country to find out more...',
        description: 'Make sure you know how to collect tax receipts and find the barcode scanning terminals in each country!',
    },
    {
        label: 'Please input details of your date of travel and mode of travel',
        imgPath: publicImages.shopImage,
        title: 'Ask for a ‘Facture’ with TVA',
        description: 'When paying for your shopping you need to ask for a TVA receipt and ‘Facture’ addressed to: Revenir, 25 Rue de Ponthieu 75008 PARIS.',
    },
    {
        label: 'Please upload your ticket, reservation or boarding pass as proof of outbound travel',
        imgPath: publicImages.snapImage,
        title: 'Snap a photo of your receipt & facture',
        description: 'Take a photo of your receipt and facture for each transaction and add it to the matching purchase in the banking app.',
    },
    {
        label: 'Please upload your ticket, reservation or boarding pass as proof of outbound travel',
        imgPath: publicImages.snapImage,
        title: 'Snap a photo of your receipt & facture',
        description: 'Take a photo of your receipt and facture for each transaction and add it to the matching purchase in the banking app.',
    },
];

const CreateTrip = () => {
    const images = [
        { flag: publicImages.FranceFlag, label: 'FRANCE' },
        { flag: publicImages.BelgiumFlag, label: 'BELGIUM' },
        { flag: publicImages.SpainFlag, label: 'SPAIN' },
        { flag: publicImages.PortugalFlag, label: 'PORTUGAL' },
    ];

    const [selectedImageSrc, setSelectedImageSrc] = useState(publicImages.FranceFlag);
    const [activeStep, setActiveStep] = useState(ActiveStep.TRIP);
    const maxSteps = intialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        if (activeStep > ActiveStep.TRIP) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const renderImages = () => {
        const rows = [];
        for (let i = 0; i < images.length; i += 2) {
            const rowImages = images.slice(i, i + 2);
            rows.push(
                <div key={i} style={{ marginBottom: '10px' }}>
                    {rowImages.map((image, index) => (
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <img
                                key={index}
                                src={image.flag}
                                alt={`Image ${i + index + 1}`}
                                style={{
                                    width: '70%',
                                    boxSizing: 'border-box',
                                    marginLeft: '30px',
                                    marginTop: '25px'
                                }}
                            />
                            <label style={{ width: '50%', alignSelf: 'center', textAlign: 'center', fontWeight: '500' }} >{image.label}</label>
                        </div>
                    ))}
                </div>
            );
        }
        return rows;
    };


    let contentComponent = null;

    switch (activeStep) {

        case ActiveStep.TRIP:
            contentComponent = <SelectTrip intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} renderImages={renderImages} />
            break;

        case ActiveStep.TRAVELINFO:
            contentComponent = <TravelInfo intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} />
            break;
        case ActiveStep.TICKETINFO:
            contentComponent = <TicketInfo intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
            break;
        case ActiveStep.TripMain:
            contentComponent = <TripList />;
            break;
        default:
            break;
    }

    return (
        <>
            {activeStep >= ActiveStep.TRIP && activeStep <= ActiveStep.TICKETINFO && (
                <IconButton onClick={handleBack} disabled={activeStep === 0}>
                    <ArrowBackIcon />
                </IconButton>
            )}
            <div className='main-container'>
                {contentComponent}

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
                    {activeStep === ActiveStep.TRIP ? (
                        // <Button
                        //     style={{ width: '70%', backgroundColor: '#4f38d6', borderRadius: '10px' }}
                        //     variant="contained"
                        //     onClick={handleNext}
                        // >
                        //     Continue
                        // </Button>
                        <Revbutton btnText="Continue" handleNext={handleNext} />
                    ) : null}
                </div>

                {activeStep >= ActiveStep.TRIP && activeStep <= ActiveStep.TICKETINFO && (
                    <div className='trip-stepper' onClick={(e) => e.preventDefault()}>
                        <MobileStepper
                            steps={maxSteps - 1}
                            position="static"
                            activeStep={activeStep}
                            backButton={null}
                            nextButton={null}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default CreateTrip;
