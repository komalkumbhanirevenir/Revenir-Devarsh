import { Button, TextField } from '@mui/material';
import Typography from "@mui/material/Typography";
import Revbutton from '../Button/Revbutton';
import './TravelInfo.css'

interface TravelInfoProps {
    handleNext: () => any;
    intialSteps: any;
    activeStep: any;
}


const TravelInfo: React.FC<TravelInfoProps> = ({ handleNext, intialSteps, activeStep }) => {

    return (
        <>
            <Typography align="center" className='travelinfo-label'>
                {intialSteps[activeStep]?.label}
            </Typography>
            <div className='travelinfo-body'>
                <form >
                    <label style={{ color: '#4f38d6', textAlign: 'center' }}>Date Leaving EU</label>
                    <TextField
                        className='travelinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    <label>Approximate Time</label>
                    <TextField
                        className='travelinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    <label>Mode of travel</label>
                    <TextField
                        className='travelinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    <label>Departure Terminal</label>
                    <TextField
                        className='travelinfo-textfield'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{ style: { height: '100%' } }}
                    />
                    {/* <Button type="button" fullWidth variant="contained" style={{ backgroundColor: '#4f38d6', marginTop: '25%', borderRadius: '10px' }} onClick={handleNext} >
                        Confirm
                    </Button> */}
                    <Revbutton btnText="Confirm" handleNext={handleNext}/>
                </form>
            </div>
        </>
    );
}

export default TravelInfo;