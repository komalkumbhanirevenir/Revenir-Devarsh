/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

// mui
import MobileStepper from '@mui/material/MobileStepper';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CommonContent from '../components/CommonContent/CommonContent';
import SelectCountry from '../components/SelectCountry/SelectCountry';

//images
import publicImages from '../imageIndex'
import Revbutton from '../components/Button/Revbutton';


enum ActiveStep {
    TRIP,
    SHOP,
    SNAP,
    SCAN,
    READY_TO_GO,
}

const intialSteps = [
    {
        label: 'Available in:',
        imgPath: '',
        title: 'Select an EU country to find out more...',
        description: 'Make sure you know how to collect tax receipts and find the barcode scanning terminals in each country!',
    },
    {
        label: 'Step-1 Shop',
        imgPath: publicImages.shopImage,
        title: 'Ask for a ‘Facture’ with TVA',
        description: 'When paying for your shopping you need to ask for a TVA receipt and ‘Facture’ addressed to: Revenir, 25 Rue de Ponthieu 75008 PARIS.',
    },
    {
        label: 'Step-2 Snap',
        imgPath: publicImages.snapImage,
        title: 'Snap a photo of your receipt & facture',
        description: 'Take a photo of your receipt and facture for each transaction and add it to the matching purchase in the banking app.',
    },
    {
        label: 'Step-3 Scan',
        imgPath: publicImages.scanImage,
        title: 'Scan your barcode at the PABLO Detaxe terminal',
        description: 'Once you have processed your barcode, find a PABLO Detaxe terminal to claim (€150 minimum eligible spend per trip)',
    },
    {
        label: 'You’re all ready to go!',
        imgPath: publicImages.doneImage,
        title: 'Shop, Snap, Scan and you can reclaim VAT on your shopping in the EU!',
        description: '',
    },
];

const ReclaimRules = () => {
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
                                onClick={() => handleImageClick(image.flag)}
                            />
                            <label style={{ width: '50%', alignSelf: 'center', textAlign: 'center', fontWeight: '500', fontSize: '18px' }} onClick={() => handleImageClick(image.flag)}>{image.label}</label>
                        </div>
                    ))}
                </div>
            );
        }
        return rows;
    };

    const handleImageClick = (srcValue: any) => {
        setSelectedImageSrc(srcValue);
        handleNext();
    };

    let contentComponent = null;

    switch (activeStep) {

        case ActiveStep.TRIP:
            contentComponent = <SelectCountry intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} renderImages={renderImages} />
            break;

        case ActiveStep.SHOP:
        case ActiveStep.SNAP:
        case ActiveStep.SCAN:
            contentComponent = <CommonContent intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} />;
            break;
        case ActiveStep.READY_TO_GO:
            contentComponent = <img src={publicImages.TnCImage} alt={''} style={{ maxHeight: '610px', width: '330px', marginTop: '10px' }} />;
            break;
        default:
            break;
    }

    return (
        <>
            <div>
                <div className='rules-main' >
                    <IconButton onClick={handleBack} disabled={activeStep === 0} >
                        <ArrowBackIcon />
                    </IconButton>
                    {activeStep > ActiveStep.TRIP && (
                        <img src={selectedImageSrc} />
                    )}
                </div>
                {contentComponent}

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
                    {(activeStep === ActiveStep.SHOP || activeStep === ActiveStep.SNAP || activeStep === ActiveStep.SCAN) ? (
                        <Revbutton btnText="Continue" handleNext={handleNext} />
                    ) : activeStep === ActiveStep.READY_TO_GO ? (
                        <Revbutton btnText="Next" />
                    ) : activeStep === ActiveStep.TRIP ? (
                        <Revbutton btnText="EXIT" />
                    ) : null}
                </div>

                {(activeStep === ActiveStep.SHOP || activeStep === ActiveStep.SNAP || activeStep === ActiveStep.SCAN) && (
                    <div className='rules-stepper' onClick={(e) => e.preventDefault()}>
                        <MobileStepper
                            steps={maxSteps - 2}
                            position="static"
                            activeStep={activeStep - 1}
                            backButton={null}
                            nextButton={null}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default ReclaimRules;
