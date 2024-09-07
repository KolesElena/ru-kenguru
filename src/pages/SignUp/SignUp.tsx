import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FirstSignUpStep, SecondSignUpStep, ThirdSignUpStep,  ForthSignUpStep, ThirdSignUpStepParent} from './steps/index.ts';

export const SignUp = () => {
  const navigate = useNavigate();

  const {signUp} = useContext(AuthContext); 
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const [firstStepData, setFirstStepData] = useState({});
  const [secondStepData, setSecondStepData] = useState({});
  const [thirdStepData, setThirdStepData] = useState({});
  const [forthStepData, setForthStepData] = useState({});

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
    if (currentStep === 3) {
      console.log('data', data?.birthDate.toISOString())
      setThirdStepData({'birthDate': data?.birthDate.toISOString(), 'languages': null});
    }
    if (currentStep === 4) {
      console.log('data', data);
      setForthStepData(data);
    }
    // console.log(event);
    // setFormData({[currentStep]: data});
    setCurrentStep(nextStep);
    if (!nextStep ) {
      handleSubmit(data);
    }
  };

  console.log('forthStepData', forthStepData?.photo);

  const handleSubmit = async (forthStepData) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);

    const formData = new FormData();
    formData.append('email', firstStepData?.email);
    formData.append('password', firstStepData?.password);
    formData.append('name', firstStepData?.name);
    formData.append('surname', firstStepData?.surname);
    formData.append('userType', secondStepData?.userType);
    formData.append('address', firstStepData?.address);
    formData.append('birthDate', thirdStepData?.birthDate);
    formData.append('photo', forthStepData?.photo);

    await signUp(formData);
    navigate('/');
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
            {currentStep === 4 && <ForthSignUpStep onFinish={onFormFinish}/>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>   
  );
};

