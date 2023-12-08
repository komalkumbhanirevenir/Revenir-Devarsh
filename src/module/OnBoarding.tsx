
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MobileStepper from '@mui/material/MobileStepper';

// components
import Onfido from './Onfido';
import TermsConditions from '../components/TermsCondition/TermsConditions';
import CommonContent from '../components/CommonContent/CommonContent';

import { createApplicant } from '../slices/ApplicantIdSlice';

// images
import publicImages from '../imageIndex'
import Revbutton from '../components/Button/Revbutton';
import { CircularProgress } from '@mui/material';

enum ActiveStep {
    SHOP,
    SNAP,
    SCAN,
    TERMS_CONDITIONS,
    PASSPORT_CHECK,
    PASSPORT_UPLOAD,
    READY_TO_GO,
}

// Onboarding stepper

const intialSteps = [
    {
        label: 'Step-1 Shop',
        imgPath: publicImages.shopImage,
        title: 'Shop tax-free in the EU',
        description: 'Follow these 3 easy steps to claim back tax on purchases in the EU. Enjoy your shopping abroad, keeping hold of your receipts.',
    },
    {
        label: 'Step-2 Snap',
        imgPath: publicImages.snapImage,
        title: 'Snap a photo of your receipts',
        description: 'Take a photo of your receipt for each transaction and add it to the matching purchase in the banking app.',
    },
    {
        label: 'Step-3 Scan',
        imgPath: publicImages.scanImage,
        title: 'Scan your barcode at the departure terminal',
        description: 'Scan your barcode at the departure terminal at customs. Shop, Snap, Scan!',
    },
    {
        label: 'Terms & Conditions',
        imgPath: publicImages.shopImage,
        title: 'Your title for step 4',
        description: 'Description for step 4',
    },
    {
        label: 'Passport Check',
        imgPath: publicImages.passportImage,
        title: 'Upload a photo of your passport',
        description: 'To reclaim VAT on your behalf we require your passport details, to check your eligibility',
    },
    {
        label: 'Passport Upload',
        imgPath: publicImages.shopImage,
        title: 'Your title for step 6',
        description: 'Description for step 6',
    },
    {
        label: 'You’re all ready to go!',
        imgPath: publicImages.doneImage,
        title: 'Shop, Snap, Scan and you can reclaim VAT on your shopping in the EU!',
        description: '',
    },
];

const Onboarding = () => {

    // state to manage onboarding process

    const [activeStep, setActiveStep] = useState(ActiveStep.SHOP);
    const maxSteps = intialSteps.length;
    const { data } = useSelector((state: any) => state.applicants);

    const dispatch = useDispatch<any>();

    const [formData, setFormData] = useState({
        token: '9b6450e2-1f48-4466-868-05b7118',
        first_name: 'Melissa',
        last_name: 'Kelley',
        address: {
            line_1: '1234 Somestreet',
            line_2: 'Apt 16',
            city: 'London',
            region: 'England',
            postcode: 'SW10 9AB',
            country: 'GBR'
        },
        citizenship: 'GBR',
        dob: '01/01/1980'
    });

    // handleOnfido
    const handleOnfido = () => {
        dispatch(createApplicant(formData));
    };

    // Handle next btn click
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Handle back nav click
    const handleBack = () => {
        if (activeStep > ActiveStep.SHOP) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    let contentComponent = null;

    switch (activeStep) {
        case ActiveStep.SHOP:
        case ActiveStep.SNAP:
        case ActiveStep.SCAN:
        case ActiveStep.PASSPORT_CHECK:
        case ActiveStep.READY_TO_GO:
            contentComponent = <CommonContent intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} />;
            break;
        case ActiveStep.TERMS_CONDITIONS:
            contentComponent = <TermsConditions />;
            break;
        case ActiveStep.PASSPORT_UPLOAD:
            if (data && data.sdkToken && data.workflowRunId) {
                contentComponent = <Onfido intialSteps={intialSteps} activeStep={activeStep} handleNext={handleNext} sdkToken={data.sdkToken} workflowRunId={data.workflowRunId} />;
            } else {
                contentComponent = <CircularProgress />;
            }
            break;
        default:
            break;
    }

    return (
        <>
            <IconButton onClick={handleBack} disabled={activeStep === ActiveStep.SHOP}>
                <ArrowBackIcon />
            </IconButton>
            <Container fixed>
            <div className='onboarding-section'>
                {contentComponent}

                <div className='btn-main'>
                    {activeStep <= ActiveStep.SCAN ? (
                        <Revbutton btnText="continue" handleNext={handleNext} />
                    ) : activeStep === ActiveStep.TERMS_CONDITIONS ? (
                        <>
                            <Revbutton btnText="Accept" handleNext={handleNext} />
                            <Revbutton btnText="Decline" handleBack={handleBack} />
                        </>
                    ) : activeStep === ActiveStep.PASSPORT_CHECK ? (
                        <>
                            <Revbutton btnText="Continue" handleNext={handleNext} handleOnfido={handleOnfido} />
                            <Revbutton btnText="Do it later" handleBack={handleBack} />
                        </>
                    ) : activeStep === ActiveStep.READY_TO_GO ? (

                        <Revbutton btnText="Done" />

                    ) : null}
                </div>
                {activeStep >= ActiveStep.SHOP && activeStep <= ActiveStep.SCAN && (
                    <div className='onboarding-stepper' onClick={(e) => e.preventDefault()}>
                        <MobileStepper
                            steps={maxSteps - 4}
                            position="static"
                            activeStep={activeStep}
                            backButton={null}
                            nextButton={null}
                        />
                    </div>
                )}
            </div>
            </Container>
        </>
    );
}

export default Onboarding;
