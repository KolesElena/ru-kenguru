import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Context.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FirstSignUpStep } from './FirstStep';
import { SecondSignUpStep } from './SecondStep';
import { ThirdSignUpStep } from './ThirdStep';
import { ThirdSignUpStepParent } from './ThirdStepParent';

export const SignUp = () => {

  const {signUp} = useContext(AuthContext); 
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const [firstStepData, setFirstStepData] = useState({});
  const [secondStepData, setSecondStepData] = useState({});

  const onFormFinish = (currentStep, data, nextStep) => {
    // function getFormData() {
    //   const formData = new FormData();
    //   // Object.keys(object).forEach(key => formData.append(key, object[key]));
    //   return formData;
    // }

    if (currentStep === 1) {
      setFirstStepData(data);
    }
    if (currentStep === 2) {
      setSecondStepData(data);
    }

    // console.log(event);
    // setFormData({[currentStep]: data});
    setCurrentStep(nextStep);
    if (!nextStep ) {
      handleSubmit();
    }
  };

  console.log('formData', firstStepData);

  const handleSubmit = () => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);

    signUp({ email: firstStepData?.email, password: firstStepData?.password, name: firstStepData?.firstName, surname: firstStepData.lastName, userType: secondStepData?.userType, address: firstStepData?.address}).then();
   
  };

  const defaultTheme = createTheme() ;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ mt: 3 }}>
            {currentStep === 1 && <FirstSignUpStep onFinish={onFormFinish}/>}
            {currentStep === 2 && <SecondSignUpStep onFinish={onFormFinish}/>}
            {currentStep === 3 && secondStepData?.userType === 'nanny' && <ThirdSignUpStep onFinish={onFormFinish}/>}
            {currentStep === 3 && secondStepData?.userType === 'parent' && <ThirdSignUpStepParent onFinish={onFormFinish}/>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>   
  );
};

