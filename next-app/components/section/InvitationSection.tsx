import React from "react";
import data from "@/data.json";
import HostInfo from "../HostInfo";

export default function InvitationSection() {
  const {
    greeting: { message, host, eventDetail },
  } = data;

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="font-santokki m-2 whitespace-pre-line text-2xl text-primary">
        모시는 글
      </h2>

      <div className="space-y-8">
        <p className="whitespace-pre-line leading-loose">{message}</p>
        <div className="font-santokki whitespace-nowrap">
          <HostInfo person={host.groom} />
          <HostInfo person={host.bride} />
        </div>
      </div>

      <p className="whitespace-pre-line text-center font-extralight">
        {eventDetail}
      </p>
    </section>
  );
}
