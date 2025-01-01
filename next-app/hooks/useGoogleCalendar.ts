import { addHours, format, parseISO } from "date-fns";

interface GoogleCalendarEvent {
  title: string;
  location: string;
  description?: string;
  date: string;
}

export default function useGoogleCalendar() {
  const addEventToGoogleCalendar = ({
    title,
    location,
    description,
    date,
  }: GoogleCalendarEvent) => {
    const startDateObj = parseISO(date);
    const endDateObj = addHours(startDateObj, 1);

    const start = format(startDateObj, "yyyyMMdd'T'HHmmss");
    const end = format(endDateObj, "yyyyMMdd'T'HHmmss");

    const googleCalendarUrl = new URL(
      "https://calendar.google.com/calendar/render",
    );

    googleCalendarUrl.searchParams.set("action", "TEMPLATE");
    googleCalendarUrl.searchParams.set("text", title);
    googleCalendarUrl.searchParams.set("details", description ?? "");
    googleCalendarUrl.searchParams.set("location", location);
    googleCalendarUrl.searchParams.set("dates", `${start}/${end}`);
    googleCalendarUrl.searchParams.set("pli", "1");

    window.open(googleCalendarUrl.toString(), "_blank");
  };

  return {
    addEventToGoogleCalendar,
  };
}
