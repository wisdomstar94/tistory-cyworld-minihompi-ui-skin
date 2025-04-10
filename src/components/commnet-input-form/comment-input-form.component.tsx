import { cn } from "@/utils/cn";
import { ICommentInputForm } from "./comment-input-form.type";

export function CommentInputForm(props: ICommentInputForm.Props) {
  const { isGuestbook = false } = props;

  const prefix = (function () {
    if (isGuestbook) {
      return "guest";
    }
    return "rp";
  })();

  const title = isGuestbook ? "방명록" : "댓글";

  const replacer = {
    textareaName: isGuestbook
      ? "[##_guest_textarea_body_##]"
      : "[##_rp_input_comment_##]",
    passwordValue: isGuestbook
      ? "[##_guest_password_##]"
      : "[##_rp_admin_check_##]",
  };

  const MemberComp = isGuestbook ? "s_guest_member" : "s_rp_member";
  const GuestComp = isGuestbook ? "s_guest_form" : "s_rp_guest";

  return (
    <>
      <div className={cn("w-full flex flex-wrap gap-2 relative")}>
        <MemberComp>
          <ul className="w-full relative flex flex-wrap gap-2 items-center">
            <GuestComp>
              <li className="inline-flex gap-1 relative items-center">
                <label className="text-xs">이름</label>
                <input
                  type="text"
                  className={cn(
                    "max-w-[80px]",
                    "bg-transparent focus:outline-none",
                    "placeholder:text-tcu-color-3/50",
                    "border border-tcu-color-3/20 box-border",
                    "px-2 py-0.5 text-xs"
                  )}
                  name={`[##_${prefix}_input_name_##]`}
                  tt-value={`[##_guest_name_##]`}
                  placeholder={`이름`}
                />
              </li>
              <li className="inline-flex gap-1 relative items-center">
                <label className="text-xs">비밀번호</label>
                <input
                  type="password"
                  className={cn(
                    "max-w-[80px]",
                    "bg-transparent focus:outline-none",
                    "placeholder:text-tcu-color-3/50",
                    "border border-tcu-color-3/20 box-border",
                    "px-2 py-0.5 text-xs"
                  )}
                  maxLength={8}
                  name={`[##_${prefix}_input_password_##]`}
                  tt-value={replacer.passwordValue}
                  placeholder={`비밀번호`}
                />
              </li>
            </GuestComp>

            <li className="inline-flex gap-1 relative items-center">
              <label className="text-xs" htmlFor={`[##_rp_input_is_secret_##]`}>
                비밀글
              </label>
              <input
                type="checkbox"
                data-title="secret-checkbox"
                id={`[##_rp_input_is_secret_##]`}
                name={`[##_rp_input_is_secret_##]`}
                className="w-[16px] h-[16px] bg-transparent border border-tcu-color-3/60 other/secret-checkbox text-xs"
              />
            </li>
          </ul>
        </MemberComp>
        <div className="w-full relative flex gap-2 items-stretch">
          {/* textarea */}
          <div className="w-full relative flex">
            <textarea
              name={replacer.textareaName}
              placeholder={`${title}을 입력할 수 있습니다.`}
              className={cn(
                "w-full h-[80px]",
                "focus:outline-none",
                "placeholder:text-tcu-color-3/50",
                "resize-none",
                "bg-transparent",
                "border border-tcu-color-3/20 box-border",
                "p-2",
                "text-xs"
              )}
            ></textarea>
          </div>
          {/* button area */}
          <div className="w-[80px] flex items-stretch relative shrink-0 grow-0">
            <button
              tt-onclick={`[##_${prefix}_onclick_submit_##]`}
              className="w-full h-full flex items-center justify-center p-2 box-border text-xs bg-tcu-color-3/10 cursor-pointer"
            >
              {title} 작성
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
