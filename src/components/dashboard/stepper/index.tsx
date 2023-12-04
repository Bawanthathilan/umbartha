"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


interface StepperProps {
    activeStep: number;
    steps: Array<any>
    handleNext: () => void;
    handleBack: () => void;
}

const StepperSection = ({
    activeStep,
    steps,
    handleNext,
    handleBack,
}: StepperProps) => {



    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
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