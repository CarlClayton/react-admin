import { EventApi, EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const today = new Date().toISOString().split("T")[0];
const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

type Props = {
  setCurrentEvents: (event: EventApi[]) => void;
};

const MainCalendar = ({ setCurrentEvents }: Props) => {
  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = ({ event }: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${event.title}'?`
      )
    ) {
      event.remove();
    }
  };

  return (
    <FullCalendar
      height="75vh"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      select={handleDateClick}
      eventClick={handleEventClick}
      eventsSet={(events) => setCurrentEvents(events)}
      initialEvents={[
        {
          id: "12315",
          title: "All-day event",
          date: today,
        },
        {
          id: "5123",
          title: "Timed event",
          date: tomorrow,
        },
      ]}
    />
  );
};

export default MainCalendar;
