import React, { useEffect } from "react";
import * as OnfidoSDK from "onfido-sdk-ui";


const onfidoContainerId = "onfido-sdk-wrapper";

interface OnfidoProps {
    handleNext: () => any;
    intialSteps: any;
    activeStep: any;
    sdkToken?: string;
    workflowRunId?: string;
}


const Onfido: React.FC<OnfidoProps> = ({ handleNext, intialSteps, activeStep, sdkToken, workflowRunId }) => {

    useEffect(() => {
        OnfidoSDK.init({
            token: sdkToken,
            containerId: onfidoContainerId,
            workflowRunId: workflowRunId,
            customUI: {
                colorBackgroundIcon: '#4f38d6',
            },
            onComplete: function (data) {
                console.log('Everything is complete');
                setTimeout(() => {
                    handleNext();
                }, 1000);
            },
            onUserExit: function (userExitCode) {
                console.log(userExitCode);
            },
            onError: function (error) {
                console.log(error);
            },
        });
    })


    return (
        <>
            <div id={onfidoContainerId} className="onfido-container"/>
        </>
    );
};

export default Onfido;
