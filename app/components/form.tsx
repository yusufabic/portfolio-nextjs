"use client";
import { postData } from "@/app/action";
import { SubmitButton } from "../../components/submit-button";
import { Input } from "../../components/ui/input";
import { useRef } from "react";

export function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      className="flex justify-between gap-4 flex-col md:flex-row"
    >
      <Input
        type="text"
        name="message"
        placeholder="Your Message..."
        maxLength={80}
        minLength={1}
        required
      />
      <SubmitButton />
    </form>
  );
}
