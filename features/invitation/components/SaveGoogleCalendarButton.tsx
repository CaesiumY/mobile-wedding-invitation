"use client";

import React from "react";
import { Calendar } from "lucide-react";
import data from "@/data.json";
import useGoogleCalendar from "../hooks/useGoogleCalendar";
import { Button } from "@/components/ui/button";

const SaveGoogleCalendarLink = () => {
  const { addEventToGoogleCalendar } = useGoogleCalendar();
  const {
    googleCalendarInfo: { date, description, location, time, title },
  } = data;

  if (!date || !time || !title) {
    return null;
  }

  return (
    <Button
      variant="secondary"
      className="rounded-full"
      onClick={() =>
        addEventToGoogleCalendar({
          date: `${date}T${time}`,
          description,
          location,
          title,
        })
      }
    >
      <Calendar />
      <span className="self-end">구글 캘린더 추가하기</span>
    </Button>
  );
};

export default SaveGoogleCalendarLink;
