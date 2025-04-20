"use client";

import { Loader2, Send } from "lucide-react";
import type React from "react";
import { useId } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useCreateCommentMutation } from "@/features/guestBook/query/guestBookQuery"; // useAddComment -> useCreateCommentMutation

const GuestCommentForm = () => {
  const guestCommentVisibilityId = useId();
  const { mutateAsync: createComment, isPending } = useCreateCommentMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const isSecret = !!formData.get("isSecret");

    if (!name) {
      return toast.error("이름을 입력해주세요.");
    }

    if (!message) {
      return toast.error("메시지를 입력해주세요.");
    }

    // TODO: 파이어베이스에 메시지 저장
    createComment({
      name,
      content: message,
      date: new Date().toISOString(),
      isSecret,
    });

    toast.success("메시지를 보냈습니다. 💌");
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-2"
    >
      <Input
        placeholder="이름"
        type="text"
        name="name"
        className="w-full rounded border border-gray-300"
      />
      <Textarea
        placeholder="메시지"
        name="message"
        className="w-full rounded border border-gray-300"
      />

      <Label
        htmlFor={guestCommentVisibilityId}
        className="flex flex-row items-center space-x-2 self-end py-2"
      >
        <Checkbox id={guestCommentVisibilityId} name="isSecret" />
        <span className="self-end">비밀 글</span>
      </Label>

      <Button
        variant="secondary"
        type="submit"
        className="w-full rounded"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="animate-spin" /> : <Send />}
        <span className="self-end">축하 메시지 남기기</span>
      </Button>
    </form>
  );
};

export default GuestCommentForm;
