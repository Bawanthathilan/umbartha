import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calender = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          "&.MuiDateCalendar-root .Mui-selected": {
            // Your styles for the entire calendar component
            backgroundColor: "#26AF9F !important",
          },
          "& .MuiPickersDay-daySelected": {
            backgroundColor: "your_desired_color", // Change this to the desired color
            color: "your_desired_text_color", // Change this to the desired text color
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Calender;
