import data from "@/data.json";
import { MailOpen } from "lucide-react";
import SectionTitle from "@/components/primitives/SectionTitle";
import HostInfo from "@/features/invitation/components/HostInfo";
import SaveGoogleCalendarButton from "@/features/invitation/components/SaveGoogleCalendarButton";
import ScrollFadeIn from "@/components/motion/ScrollFadeIn";

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
          <div className="font-dodum whitespace-nowrap font-bold">
            <HostInfo person={host.groom} />
            <HostInfo person={host.bride} />
          </div>
        </div>

        <p className="whitespace-pre-line text-center font-extralight">
          {eventDetail}
        </p>

        <SaveGoogleCalendarButton />
      </section>
    </ScrollFadeIn>
  );
}
