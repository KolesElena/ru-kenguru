import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals-demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

const DatePickerComponent = ({onChange, birthDate}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['DatePicker']}> */}
      <DatePicker
          // label="Controlled picker"
          value={birthDate}
          onChange={onChange}
        />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}

export default DatePickerComponent;
