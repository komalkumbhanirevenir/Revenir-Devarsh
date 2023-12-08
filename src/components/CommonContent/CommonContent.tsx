import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import './CommonContent.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


interface CommonContentProps {
    handleNext: () => any;
    intialSteps: any;
    activeStep: any;
}

const CommonContent: React.FC<CommonContentProps> = ({ handleNext, intialSteps, activeStep }) => {
    const theme = useTheme();

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
                    <Typography align="center" className="common-label" >
                        {intialSteps[activeStep]?.label}
                    </Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    index={activeStep}
                    disabled
                    style={{ marginTop: '30px' }}
                >
                    {intialSteps?.map((step: any, index: any) => (
                        <div
                            key={step.label}
                            className='common-img'
                        >
                            {Math.abs(activeStep - index) <= 2 ? (
                                <>
                                    <img
                                        src={step.imgPath}
                                        alt={step.label}
                                    />

                                </>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Typography align="center" variant="h5" className="common-title">
                    {intialSteps[activeStep]?.title}
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    className="common-description"
                >
                    {intialSteps[activeStep]?.description}
                </Typography>
            </Box>
        </>
    )

}

export default CommonContent;