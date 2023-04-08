import { useState } from "react";
import { EventApi } from "@fullcalendar/core";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import CalendarSidebar from "./CalendarSidebar";
import MainCalendar from "./MainCalendar";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>();

  return (
    <Box m={"20px"}>
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display={"flex"} justifyContent={"space-between"}>
        <CalendarSidebar currentEvents={currentEvents} />
        <Box flex="1 1 100%" ml="15px">
          <MainCalendar setCurrentEvents={setCurrentEvents} />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
