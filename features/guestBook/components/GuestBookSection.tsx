import { NotebookPen } from "lucide-react";
import SectionTitle from "@/components/primitives/SectionTitle";
import CommentForm from "@/features/guestBook/components/CommentForm";
import CommentList from "@/features/guestBook/components/CommentList";
import ScrollFadeIn from "@/components/motion/ScrollFadeIn";

const GuestBookSection = () => {
  return (
    <ScrollFadeIn>
      <section className="mx-auto flex max-w-[400px] flex-col items-center gap-8 pb-16">
        <div className="space-y-3">
          <SectionTitle
            title="신랑 신부에게"
            icon={<NotebookPen strokeWidth={3} />}
          />
          <p className="whitespace-pre-line">
            메시지를 남겨주세요.
            <br />
            비밀 글은 신랑 신부만 볼 수 있는 추억이 됩니다 :)
          </p>
        </div>

        <CommentForm />
        <CommentList />
      </section>
    </ScrollFadeIn>
  );
};

export default GuestBookSection;
