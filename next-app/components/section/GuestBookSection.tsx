import { NotebookPen } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import GuestCommentForm from "../GuestCommentForm";
import GuestCommentList from "../GuestCommentList";

const GuestBookSection = () => {
  return (
    <section className="mx-auto flex max-w-[400px] flex-col items-center gap-8 pb-16">
      <div className="space-y-3">
        <SectionTitle
          title="신랑 신부에게"
          icon={<NotebookPen strokeWidth={3} />}
        />
        <p className="whitespace-pre-line">
          메시지를 남겨주세요.
          <br />
          결혼식 하루 뒤, 신랑 신부에게 전달됩니다.
        </p>
      </div>

      <GuestCommentForm />
      <GuestCommentList />
    </section>
  );
};

export default GuestBookSection;
