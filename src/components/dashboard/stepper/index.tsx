"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';

const steps = ['1', '2', '3', '4', '5'];

const StepperSection = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };






    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}
                                sx={{
                                    '& .MuiStepLabel-root .Mui-completed': {
                                        color: '#149F8E', // circle color (COMPLETED)
                                    },
                                    '& .MuiStepLabel-root .Mui-active': {
                                        color: '#149F8E', // circle color (ACTIVE)
                                    },
                                    '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                        fill: 'white', // circle's number (ACTIVE)
                                    },
                                }}
                            >
                                <StepLabel {...labelProps}></StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>

        </div>
    )
}

export default StepperSection