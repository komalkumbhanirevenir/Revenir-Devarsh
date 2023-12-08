import { Button, TextField } from '@mui/material';
import Typography from "@mui/material/Typography";
import Revbutton from '../Button/Revbutton';
import './TicketInfo.css'

interface TicketInfoProps {
    handleNext: () => any;
    handleBack: () => any;
    intialSteps: any;
    activeStep: any;
}


const TicketInfo: React.FC<TicketInfoProps> = ({ handleNext, handleBack, intialSteps, activeStep }) => {

    return (
        <>
            <Typography align="center" className='ticketinfo-label'>
                {intialSteps[activeStep]?.label}
            </Typography>
            <div className='ticketinfo-body'>
                <form >
                    <label style={{ color: '#4f38d6' }}>Upload File</label>
                    <TextField
                        className='ticketinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    <label>Reference Number</label>
                    <TextField
                        className='ticketinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    <label>Destination</label>
                    <TextField
                        className='ticketinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    <div className='btn-body'>
                        {/* <Button
                            style={{ width: '50%', marginRight: '10px', backgroundColor: '#4f38d6', borderRadius: '10px' }}
                            variant="contained"
                            onClick={handleNext}
                        >
                            Upload
                        </Button> */}
                        <Revbutton btnText="Upload" handleNext={handleNext} />
                        <Revbutton btnText="Do it later" handleBack={handleBack} />

                        {/* <Button
                            style={{ width: '50%', backgroundColor: '#4f38d6', borderRadius: '10px' }}
                            variant="contained"
                            onClick={handleBack}
                        >
                            Do it later
                        </Button> */}
                    </div>
                </form>
            </div>
        </>
    );
}

export default TicketInfo;