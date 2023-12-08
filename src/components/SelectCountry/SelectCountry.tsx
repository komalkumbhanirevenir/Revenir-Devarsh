import { Box, Paper, Typography } from "@mui/material";
import './SelectCountry.css'

interface SelectCountryProps {
    handleNext: () => any;
    renderImages: any;
    intialSteps: any;
    activeStep: any;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ handleNext, renderImages, intialSteps, activeStep }) => {
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
                    <Typography align="center" className="country-label" >
                        {intialSteps[activeStep]?.label}
                    </Typography>
                </Paper>
                <div className="country-flag" >
                    {renderImages()}
                </div>
                <Typography align="center" variant="h5" className="country-title" >
                    {intialSteps[activeStep]?.title}
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    className="country-description"
                >
                    {intialSteps[activeStep]?.description}
                </Typography>
            </Box>
        </>
    );
}

export default SelectCountry;