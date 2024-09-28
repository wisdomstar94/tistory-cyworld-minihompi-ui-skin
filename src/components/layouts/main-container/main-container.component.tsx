import { TitleBar } from "@/components/title-bar/title-bar.component";
import { Var } from "@/consts/torytis-variable-object";
import { cn } from "@/utils/cn";

export function MainContainer() {
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 flex flex-wrap items-center justify-center">
        <div className="w-full max-w-[800px] h-[500px] m-4 relative">
          {/* bg 1 */}
          <div
            data-title="bg-1"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full relative flex">
              <div className="w-[270px] flex-shrink-0 flex-grow-0 bg-color-1 rounded-xl"></div>
              <div className="min-w-0 w-full bg-color-1 rounded-xl ml-[-1px]"></div>
            </div>
          </div>

          {/* bg 2 */}
          <div
            data-title="bg-2"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full box-border p-6">
              <div
                // className="w-full h-full border border-dashed border-color-2 rounded-xl"
                className="w-full h-full rounded-xl flex"
              >
                {/* left */}
                <div className="w-[246px] flex-shrink-0 flex-grow-0 h-full border-l border-t border-b border-dashed border-color-2 rounded-xl"></div>
                {/* right */}
                <div className="w-full h-full border-r border-t border-b border-dashed border-color-2 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* bg 3 */}
          <div
            data-title="bg-3"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full relative flex box-border p-8">
              <div className="w-[238px] flex-shrink-0 flex-grow-0 bg-color-2 rounded-xl"></div>
              <div className="min-w-0 w-full bg-color-2 rounded-xl relative">
                <div className="w-full h-full bg-color-3/5" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="w-full h-full relative box-border p-10">
            <div className="w-full h-full flex gap-4 relative">
              {/* grid... */}
              <div
                className={cn(
                  "w-full h-full relative",
                  "grid grid-cols-[222px_1fr] grid-rows-[auto_1fr] gap-y-2 gap-x-4 auto-rows-auto"
                  //
                )}
              >
                {/* 1 */}
                <div className="min-w-0 min-h-0 relative flex items-stretch">
                  <s_sidebar>
                    <s_sidebar_element>
                      <tt_html_comment>방문자 수</tt_html_comment>
                      <div className="w-full flex relative items-end text-xs justify-center pt-2">
                        <div className="flex items-center gap-6 scale-y-[0.9]">
                          <div className="inline-flex gap-2 relative">
                            <label>TODAY</label>
                            <div className="font-bold text-color-4">
                              [##_count_today_##]
                            </div>
                          </div>
                          <div className="w-[2px] h-[12px] bg-black"></div>
                          <div className="inline-flex gap-2 relative">
                            <label>TOTAL</label>
                            <div className="font-bold">[##_count_total_##]</div>
                          </div>
                        </div>
                      </div>
                    </s_sidebar_element>
                  </s_sidebar>
                </div>

                {/* 2 */}
                <div className="min-w-0 min-h-0"></div>

                {/* 3 */}
                <s_sidebar>
                  <div className="min-w-0 min-h-0">
                    <div className="w-full h-full box-border px-1.5 py-2.5 border border-color-3/30 bg-color-3/10 rounded-xl">
                      {/* grid */}
                      <div className="w-full h-full bg-color-2 rounded-lg box-border py-1.5 px-2.5 overflow-y-auto flex flex-col gap-1.5 items-start content-start">
                        {/* 프로필 */}
                        <s_sidebar_element>
                          <tt_html_comment>블로그 프로필 사진</tt_html_comment>
                          <div className="w-full h-[120px] flex-shrink-0 flex-grow-0 relative border box-border border-color-3/10 rounded-sm overflow-hidden">
                            <img
                              src="[##_image_##]"
                              alt="프로필사진"
                              className={cn(
                                "profile-image",
                                "w-full h-full relative object-cover object-center flex-shrink-0"
                              )}
                            />
                          </div>
                        </s_sidebar_element>

                        <div className="w-full h-[1px] flex-shrink-0 flex-grow-0 bg-color-3/10" />
                        {/* TODAY IS ... */}
                        <div className="w-full border box-border border-color-3/10 rounded-sm p-1 text-sm flex flex-shrink-0 flex-grow-0 justify-center items-center">
                          <div className="inline-flex gap-2">
                            <label className="text-color-1 font-bold">
                              TODAY IS ..
                            </label>
                            <div
                              className={cn(
                                "font-bold",
                                Var["[##_var_today_is_##]"]
                              )}
                            >
                              <span className="hidden today_is_not_bad:inline-block">
                                보통
                              </span>
                              <span className="hidden today_is_good:inline-block">
                                좋음
                              </span>
                              <span className="hidden today_is_sad:inline-block">
                                슬픔
                              </span>
                              <span className="hidden today_is_soso:inline-block">
                                그럭저럭
                              </span>
                              <span className="hidden today_is_blue:inline-block">
                                우울
                              </span>
                              <span className="hidden today_is_angry:inline-block">
                                화남
                              </span>
                              <span className="hidden today_is_flutter:inline-block">
                                설렘
                              </span>
                              <span className="hidden today_is_expect:inline-block">
                                기대
                              </span>
                              <span className="hidden today_is_annoying:inline-block">
                                짜증
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* 블로그 설명 */}
                        <div className="w-full h-[100px] flex-shrink-0 flex-grow-0 gap-1 relative overflow-y-auto box-border">
                          <div className="w-full text-xs min-w-0 min-h-0">
                            [##_desc_##]
                          </div>

                          {/* <div className="min-w-0 min-h-0"></div> */}
                        </div>
                        <div className="w-full" />

                        <s_sidebar_element>
                          <tt_html_comment>최근 댓글</tt_html_comment>
                          <div className="min-w-0 min-h-0 w-full h-full flex flex-col gap-1 relative">
                            <TitleBar>Recent Comment</TitleBar>
                            <div className="w-full" />
                            <div className="min-w-0 min-h-0 w-full h-full overflow-y-auto text-xs">
                              <ul className="w-full flex flex-wrap gap-1 relative">
                                <s_rctrp_rep>
                                  <li className="w-full block relative">
                                    <a
                                      href="[##_rctrp_rep_link_##]"
                                      className="w-full flex gap-1 relative group/recent-comment-item"
                                      title="작성자: [##_rctrp_rep_name_##]"
                                    >
                                      <div className="min-w-0 w-full relative block items-center group-hover/recent-comment-item:underline overflow-ellipsis whitespace-nowrap overflow-hidden">
                                        [##_rctrp_rep_desc_##]
                                      </div>
                                      <div className="w-[40px] flex items-center flex-shrink-0 flex-grow-0 justify-end group-hover/recent-comment-item:underline">
                                        [##_rctrp_rep_time_##]
                                      </div>
                                    </a>
                                  </li>
                                </s_rctrp_rep>
                              </ul>
                            </div>
                          </div>
                        </s_sidebar_element>
                      </div>
                    </div>
                  </div>
                </s_sidebar>

                {/* 4 */}
                <div className="min-w-0 min-h-0">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
