import { cn } from "@/utils/cn";
import { CommentInputForm } from "../commnet-input-form/comment-input-form.component";
import { CommentList } from "../commnet-list/commnet-list.component";

export function GuestBook() {
  return (
    <>
      <s_guest>
        <div
          className={cn("w-full mt-4 relative flex-wrap gap-6", "flex")}
          data-title="comment-container"
        >
          <CommentList isGuestBook />
          <s_guest_input_form>
            <CommentInputForm isGuestbook />
          </s_guest_input_form>
        </div>
      </s_guest>
    </>
  );
}
