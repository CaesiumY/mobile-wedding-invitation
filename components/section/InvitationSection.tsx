import data from "@/data.json";
import { MailOpen } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import HostInfo from "../HostInfo";
import SaveGoogleCalendarLink from "../SaveGoogleCalendarButton";
import ScrollFadeIn from "../motion/ScrollFadeIn";

export default function InvitationSection() {
  const {
    greeting: { message, host, eventDetail },
  } = data;

  return (
    <ScrollFadeIn>
      <section className="flex flex-col items-center gap-8">
        <SectionTitle title="모시는 글" icon={<MailOpen strokeWidth={3} />} />

        <div className="space-y-8">
          <p className="whitespace-pre-line leading-loose">{message}</p>
          <div className="whitespace-nowrap font-dodum font-bold">
            <HostInfo person={host.groom} />
            <HostInfo person={host.bride} />
          </div>
        </div>

        <p className="whitespace-pre-line text-center font-extralight">
          {eventDetail}
        </p>

        <SaveGoogleCalendarLink />
      </section>
    </ScrollFadeIn>
  );
}
