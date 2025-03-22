import { ICommnetList } from "./commnet-list.type";
import { cn } from "@/utils/cn";
import "./comment-list.scss";
import { Var } from "@/consts/torytis-variable-object";

export function CommentList(props: ICommnetList.Props) {
  const { isGuestBook = false } = props;

  const title = isGuestBook ? "방명록" : "댓글";

  const prefix = (function () {
    if (isGuestBook) {
      return "guest";
    }

    return "rp";
  })();

  const ContainerComp = isGuestBook ? "s_guest_container" : "s_rp_container";
  const RepComp = isGuestBook ? "s_guest_rep" : "s_rp_rep";
  const ReplyContainerComp = isGuestBook
    ? "s_guest_reply_container"
    : "s_rp2_container";
  const ReplyRepComp = isGuestBook ? "s_guest_reply_rep" : "s_rp2_rep";

  return (
    <>
      <div
        className="w-full flex flex-wrap box-border relative gap-2"
        data-title="rp-list-container"
      >
        <ContainerComp>
          <ul
            data-title="rp-list"
            className="w-full flex flex-wrap box-border relative gap-5 other/rp-list"
          >
            <RepComp>
              <li
                data-title="rp-item"
                id={`[##_${prefix}_rep_id_##]`}
                className={cn(
                  "w-full flex flex-wrap gap-3 relative box-border"
                )}
              >
                <div className="w-full flex flex-wrap gap-3 relative box-border">
                  {/* top bar */}
                  <div className="w-full flex items-center bg-tcu-color-3/10 justify-between gap-2 box-border px-3 py-2 text-xs border-t border-t-tcu-color-3/20">
                    <div className="inline-flex items-center flex-wrap gap-2">
                      <div className="inline-flex font-bold text-tcu-color-3/70">
                        {`[##_${prefix}_rep_name_##]`}
                      </div>
                      <div className="inline-flex text-tcu-color-3/70 gap-1">
                        {`[##_${prefix}_rep_date_##]`}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 relative flex-shrink-0 flex-grow-0 text-tcu-color-3/70">
                      <ul className="inline-flex flex-wrap gap-2 relative">
                        {!isGuestBook && (
                          <li
                            className={cn(
                              "cursor-pointer text-xs text-tcu-color-3/60 hover:underline"
                            )}
                            data-link="[##_rp_rep_link_##]"
                            tt-onclick={`commentLinkCopyButtonClick(this);`}
                          >
                            링크 복사
                          </li>
                        )}

                        <li
                          className={cn(
                            "cursor-pointer text-xs text-tcu-color-3/60 hover:underline"
                          )}
                          tt-onclick={`[##_${prefix}_rep_onclick_delete_##]`}
                        >
                          수정/삭제
                        </li>
                        <li
                          className={cn(
                            "cursor-pointer text-xs text-tcu-color-3/60 hover:underline"
                          )}
                          tt-onclick={`[##_${prefix}_rep_onclick_reply_##]`}
                        >
                          답글
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* content area */}
                  <div className="w-full flex items-start gap-3 relative">
                    <div className="w-10 h-12 inline-flex flex-shrink-0 flex-grow-0 comment-profile-icon comment_profile_icon_url_flag_off:hidden" />

                    <div className="w-[100px] h-auto relative flex-shrink-0 flex-grow-0 comment_profile_icon_url_flag_on:hidden">
                      <img
                        src={`[##_${prefix}_rep_logo_##]`}
                        className="w-full max-h-[140px] object-cover object-center relative"
                        alt="댓글 작성자 프로필사진"
                      />
                    </div>

                    <div className="w-full block relative text-sm">
                      {`[##_${prefix}_rep_desc_##]`}
                    </div>
                  </div>
                </div>

                {/* reply rp list */}
                <ReplyContainerComp>
                  <ul className="w-full flex flex-wrap relative py-1.5 bg-tcu-color-3/5">
                    <ReplyRepComp>
                      <li className="px-3 py-1.5 box-border relative w-full text-xs block">
                        <span
                          className="text-tcu-color-1 inline gap-1 relative"
                          data-title="reply-rp-profile-name"
                        >
                          {`[##_${prefix}_rep_name_##]`}:&nbsp;
                        </span>
                        <span className="inline">{`[##_${prefix}_rep_desc_##]`}</span>
                        <span className="inline text-tcu-color-3/40">
                          &nbsp;({`[##_${prefix}_rep_date_##]`})
                        </span>
                        <span>&nbsp;&nbsp;</span>
                        <ul className="inline flex-wrap gap-2 relative">
                          {!isGuestBook && (
                            <li
                              className={cn(
                                "cursor-pointer text-xs text-tcu-color-3/40 hover:underline inline"
                              )}
                              data-link="[##_rp_rep_link_##]"
                              tt-onclick={`commentLinkCopyButtonClick(this);`}
                            >
                              링크 복사&nbsp;&nbsp;
                            </li>
                          )}

                          <li
                            className={cn(
                              "cursor-pointer text-xs text-tcu-color-3/40 hover:underline inline"
                            )}
                            tt-onclick={`[##_${prefix}_rep_onclick_delete_##]`}
                          >
                            수정/삭제&nbsp;&nbsp;
                          </li>
                          <li
                            className={cn(
                              "cursor-pointer text-xs text-tcu-color-3/40 hover:underline inline"
                            )}
                            tt-onclick={`[##_${prefix}_rep_onclick_reply_##]`}
                          >
                            답글
                          </li>
                        </ul>
                      </li>
                    </ReplyRepComp>
                  </ul>
                </ReplyContainerComp>
              </li>
            </RepComp>
          </ul>
          <div className="w-full flex box-border text-xs other-has-[li]/rp-list:hidden text-tcu-color-3/40">
            작성된 {title}이 없습니다.
          </div>
        </ContainerComp>
      </div>
    </>
  );
}
