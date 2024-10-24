import { SubmitButton } from "./submit-button";
import { Input } from "./ui/input";

export function Form() {
  return (
    <form className="flex justify-between gap-4 flex-col md:flex-row">
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
