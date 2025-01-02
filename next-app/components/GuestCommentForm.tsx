"use client";

import { Send } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const GuestCommentForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name) {
      return toast.error("이름을 입력해주세요.");
    }

    if (!message) {
      return toast.error("메시지를 입력해주세요.");
    }

    // TODO: 파이어베이스에 메시지 저장

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

      <Button variant="secondary" type="submit" className="w-full rounded">
        <Send />
        축하 메시지 남기기
      </Button>
    </form>
  );
};

export default GuestCommentForm;
