import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import './SelectTrip.css';

interface SelectTripProps {
    handleNext: () => any;
    intialSteps: any;
    activeStep: any;
    renderImages: any;
}


const SelectTrip: React.FC<SelectTripProps> = ({ handleNext, intialSteps, activeStep, renderImages }) => {

    return (
        <>
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                        color: '#4f38d6',
                    }}
                >
                    <Typography align="center" className='trip-label' >
                        {intialSteps[activeStep]?.label}
                    </Typography>
                </Paper>
                <div className='flag-img' >
                    {renderImages()}
                </div>
                <Typography align="center" variant="h5" className='trip-title'>
                    {intialSteps[activeStep]?.title}
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    className='trip-description'
                >
                    {intialSteps[activeStep]?.description}
                </Typography>
            </Box>
        </>
    );
}

export default SelectTrip;