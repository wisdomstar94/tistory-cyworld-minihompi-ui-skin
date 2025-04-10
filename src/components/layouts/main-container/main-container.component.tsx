import { CategoryListBox } from "@/components/category-list-box/category-list-box.component";
import { GuestBook } from "@/components/guest-book/guest-book.component";
import { MiniRoom } from "@/components/mini-room/mini-room.component";
import { NavButton } from "@/components/nav-button/nav-button.component";
import { Pagination } from "@/components/pagination/pagination.component";
import { Posts } from "@/components/post/posts/posts.component";
import { Script } from "@/components/script/script.component";
import { TagListBox } from "@/components/tag-list-box/tag-list-box.component";
import { TitleBar } from "@/components/title-bar/title-bar.component";
import { TitleBar2 } from "@/components/title-bar2/title-bar2.component";
import { Var } from "@/consts/torytis-variable-object";
import { cn } from "@/utils/cn";
import { RecentPostItem } from "./_components";

export function MainContainer() {
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 flex flex-wrap items-center justify-center z-[1] style-observer-target">
        <div className="w-full max-w-[880px] h-[560px] m-4 relative style-observer-target">
          {/* bg 1 */}
          <div
            data-title="bg-1"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full relative flex">
              <div className="w-[270px] shrink-0 grow-0 bg-tcu-color-1 rounded-xl"></div>
              <div className="min-w-0 w-full bg-tcu-color-1 rounded-xl ml-[-1px]"></div>
            </div>
          </div>

          {/* bg 2 */}
          <div
            data-title="bg-2"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full box-border p-6">
              <div
                // className="w-full h-full border border-dashed border-tcu-color-2 rounded-xl"
                className="w-full h-full rounded-xl flex"
              >
                {/* left */}
                <div className="w-[246px] shrink-0 grow-0 h-full border-l border-t border-b border-dashed border-tcu-color-2 rounded-xl"></div>
                {/* right */}
                <div className="w-full h-full border-r border-t border-b border-dashed border-tcu-color-2 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* bg 3 */}
          <div
            data-title="bg-3"
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          >
            <div className="w-full h-full relative flex box-border p-8">
              <div className="w-[238px] shrink-0 grow-0 bg-tcu-color-2 rounded-xl"></div>
              <div className="min-w-0 w-full bg-tcu-color-2 rounded-xl relative">
                <div className="w-full h-full bg-tcu-color-3/5" />
              </div>
            </div>
          </div>

          {/* bg ring container */}
          <div
            data-title="bg-ring-1"
            className="w-[1px] h-[314px] absolute top-[112px] left-[270px] z-[1] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-10 relative items-center w-full">
              <div className="w-[38px] h-[12px] bg-tcu-color-6 border shrink-0 grow-0 border-tcu-color-3/30 rounded-3xl overflow-hidden relative">
                <div className="w-[40%] h-full bg-tcu-color-3/15"></div>
              </div>
              <div className="w-[38px] h-[12px] bg-tcu-color-6 border shrink-0 grow-0 border-tcu-color-3/30 rounded-3xl overflow-hidden relative">
                <div className="w-[40%] h-full bg-tcu-color-3/15"></div>
              </div>
            </div>

            <div className="flex flex-col gap-10 relative items-center w-full">
              <div className="w-[38px] h-[12px] bg-tcu-color-6 border shrink-0 grow-0 border-tcu-color-3/30 rounded-3xl overflow-hidden relative">
                <div className="w-[40%] h-full bg-tcu-color-3/15"></div>
              </div>
              <div className="w-[38px] h-[12px] bg-tcu-color-6 border shrink-0 grow-0 border-tcu-color-3/30 rounded-3xl overflow-hidden relative">
                <div className="w-[40%] h-full bg-tcu-color-3/15"></div>
              </div>
            </div>
          </div>

          {/* content */}
          <div
            className="w-full h-full relative box-border p-10 style-observer-target"
            // id="main-container-content-root"
          >
            <div className="w-full h-full flex gap-4 relative style-observer-target">
              {/* grid... */}
              <div
                className={cn(
                  "w-full h-full relative",
                  "style-observer-target",
                  "grid grid-cols-[222px_1fr] grid-rows-[auto_1fr] gap-y-2 gap-x-4 auto-rows-auto"
                  //
                )}
              >
                {/* 1 */}
                <div className="min-w-0 min-h-0 relative flex items-stretch">
                  <s_sidebar>
                    <tt_html_comment>방문자 수</tt_html_comment>
                    <s_sidebar_element>
                      <tt_html_comment>(사이드바 1) 방문자 수</tt_html_comment>
                      <div className="w-full flex relative items-end text-xs justify-center pt-3">
                        <div className="flex items-center gap-5 scale-y-[0.9]">
                          <div className="inline-flex gap-2 relative">
                            <label className="tracking-tighter">TODAY</label>
                            <div className="font-bold tracking-tighter text-tcu-color-4">
                              [##_count_today_##]
                            </div>
                          </div>
                          <div className="w-[2px] h-[12px] bg-black"></div>
                          <div className="inline-flex gap-2 relative">
                            <label className="tracking-tighter">TOTAL</label>
                            <div className="font-bold tracking-tighter">
                              [##_count_total_##]
                            </div>
                          </div>
                        </div>
                      </div>
                    </s_sidebar_element>
                  </s_sidebar>
                </div>

                {/* 2 */}
                <div className="min-w-0 min-h-0 relative flex items-end gap-2 justify-between">
                  <div className="inline-block pl-2 font-bold text-lg leading-5 text-tcu-color-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    [##_title_##]
                  </div>
                  <div className="shrink-0 grow-0">
                    <a
                      href="/manage"
                      className="inline-flex text-xs text-tcu-color-3/50 hover:underline"
                    >
                      블로그 관리
                    </a>
                    <div className="inline-flex w-[6px]"></div>
                  </div>
                </div>

                {/* 3 */}
                <div className="min-w-0 min-h-0 relative">
                  <div className="w-full h-full box-border px-1.5 py-2.5 border border-tcu-color-3/30 bg-tcu-color-3/10 rounded-xl relative">
                    {/* scroll container */}
                    <div
                      className={cn(
                        "w-full h-full bg-tcu-color-2 rounded-lg box-border py-1.5 px-2.5 flex flex-col gap-1.5 items-start content-start",
                        "min-w-0 min-h-0 relative"
                      )}
                    >
                      {/* 카테고리 목록 */}
                      <s_sidebar>
                        <tt_html_comment>카테고리 목록</tt_html_comment>
                        <s_sidebar_element>
                          <tt_html_comment>
                            (사이드바 2) 카테고리 목록
                          </tt_html_comment>
                          <CategoryListBox />
                        </s_sidebar_element>
                      </s_sidebar>

                      {/* 태그 목록 */}
                      <s_sidebar>
                        <tt_html_comment>태그 목록</tt_html_comment>
                        <s_sidebar_element>
                          <tt_html_comment>
                            (사이드바 3) 태그 목록
                          </tt_html_comment>
                          <TagListBox />
                        </s_sidebar_element>
                      </s_sidebar>

                      {/* 프로필 */}
                      <s_sidebar>
                        <tt_html_comment>블로그 프로필 사진</tt_html_comment>
                        <s_sidebar_element>
                          <tt_html_comment>
                            (사이드바 4) 블로그 프로필 사진
                          </tt_html_comment>
                          <div
                            className={cn(
                              "w-full h-[120px] shrink-0 grow-0 relative border box-border border-tcu-color-3/10 rounded-sm overflow-hidden",
                              "hidden tt-body-index:flex tt-body-guestbook:flex",
                              "shrink-0 grow-0",
                              "min-w-0 min-h-0"
                            )}
                          >
                            <img
                              src="[##_image_##]"
                              alt="프로필사진"
                              className={cn(
                                "profile-image",
                                "w-full h-full relative object-cover object-center shrink-0"
                              )}
                            />
                          </div>
                        </s_sidebar_element>
                      </s_sidebar>

                      <div
                        className={cn(
                          "w-full h-[1px] shrink-0 grow-0 bg-tcu-color-3/10",
                          "hidden tt-body-index:flex tt-body-guestbook:flex",
                          "min-w-0 min-h-0"
                        )}
                      />

                      {/* TODAY IS ... */}
                      <div
                        className={cn(
                          "w-full border box-border border-tcu-color-3/10 rounded-sm p-1 text-sm shrink-0 grow-0 justify-center items-center",
                          "hidden tt-body-index:flex tt-body-guestbook:flex",
                          "shrink-0 grow-0",
                          "min-w-0 min-h-0"
                        )}
                      >
                        <div className="inline-flex gap-2">
                          <label className="text-tcu-color-1 font-bold">
                            TODAY IS ..
                          </label>
                          <div
                            className={cn(
                              "font-bold",
                              Var["[##_var_today_is_##]"]
                            )}
                          >
                            <span className="hidden today_is_not_bad:inline-block">
                              😐 보통
                            </span>
                            <span className="hidden today_is_good:inline-block">
                              🙂 좋음
                            </span>
                            <span className="hidden today_is_pleasure:inline-block">
                              🎶 즐거움
                            </span>
                            <span className="hidden today_is_happy:inline-block">
                              😄 행복함
                            </span>
                            <span className="hidden today_is_sad:inline-block">
                              😢 슬픔
                            </span>
                            <span className="hidden today_is_soso:inline-block">
                              🫤 그럭저럭
                            </span>
                            <span className="hidden today_is_blue:inline-block">
                              😟 우울
                            </span>
                            <span className="hidden today_is_angry:inline-block">
                              😡 화남
                            </span>
                            <span className="hidden today_is_flutter:inline-block">
                              😊 설렘
                            </span>
                            <span className="hidden today_is_expect:inline-block">
                              🥺 기대
                            </span>
                            <span className="hidden today_is_annoying:inline-block">
                              😖 짜증
                            </span>
                            <span className="hidden today_is_bored:inline-block">
                              🥱 지겨움
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 블로그 설명 */}
                      <div
                        className={cn(
                          "w-full shrink-0 grow-0 gap-1 relative overflow-y-auto box-border",
                          "hidden tt-body-index:flex tt-body-guestbook:flex",
                          "min-w-0 min-h-0",
                          "flex-1"
                        )}
                      >
                        <div className="w-full text-xs min-w-0 min-h-0">
                          [##_desc_##]
                        </div>

                        {/* <div className="min-w-0 min-h-0"></div> */}
                      </div>

                      <div
                        className={cn(
                          "w-full",
                          "hidden tt-body-index:flex tt-body-guestbook:flex",
                          "min-w-0 min-h-0"
                        )}
                      />

                      <div
                        className={cn(
                          "w-full shrink-0 grow-0 flex-col gap-1 relative",
                          "hidden tt-body-index:flex tt-body-guestbook:flex",
                          "shrink-0 grow-0",
                          "min-w-0 min-h-0"
                        )}
                      >
                        <TitleBar>Profile Name</TitleBar>
                        <div className="w-full text-xs block whitespace-nowrap overflow-hidden overflow-ellipsis text-tcu-color-1 font-medium">
                          [##_blogger_##]
                        </div>
                      </div>

                      <div
                        className={cn(
                          "w-full",
                          "hidden tt-body-index:flex tt-body-guestbook:flex",
                          "min-w-0 min-h-0"
                        )}
                      />

                      <s_sidebar>
                        <tt_html_comment>최근 댓글</tt_html_comment>
                        <s_sidebar_element>
                          <tt_html_comment>
                            (사이드바 5) 최근 댓글
                          </tt_html_comment>
                          <div
                            className={cn(
                              "min-w-0 min-h-0 w-full flex flex-col gap-1 relative",
                              "hidden tt-body-index:flex tt-body-guestbook:flex",
                              "shrink-0 grow-0"
                            )}
                          >
                            <TitleBar>Recent Comment</TitleBar>
                            <div className="w-full" />
                            <div className="min-w-0 min-h-0 w-full h-full overflow-y-auto text-xs">
                              <ul className="w-full flex flex-wrap gap-1 relative">
                                <s_rctrp_rep>
                                  <li className="w-full block relative">
                                    <a
                                      href="[##_rctrp_rep_link_##]"
                                      className="w-full flex gap-1 relative group/recent-comment-item hover:text-tcu-color-1"
                                      title="작성자: [##_rctrp_rep_name_##]"
                                    >
                                      <div className="min-w-0 w-full relative block items-center group-hover/recent-comment-item:underline overflow-ellipsis whitespace-nowrap overflow-hidden">
                                        <div className="w-full block overflow-ellipsis overflow-hidden whitespace-nowrap">
                                          [##_rctrp_rep_desc_##]
                                        </div>
                                      </div>
                                      <div className="w-[40px] flex items-center shrink-0 grow-0 justify-end group-hover/recent-comment-item:underline tabular-nums">
                                        [##_rctrp_rep_time_##]
                                      </div>
                                    </a>
                                  </li>
                                </s_rctrp_rep>
                              </ul>
                            </div>
                          </div>
                        </s_sidebar_element>
                      </s_sidebar>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="min-w-0 min-h-0 relative style-observer-target">
                  <div className="w-full h-full box-border pl-5 pr-3 py-2.5 border border-tcu-color-8 bg-tcu-color-2 rounded-xl style-observer-target">
                    {/* scroll container */}
                    <div className="w-full h-full overflow-y-auto relative flex flex-wrap gap-2 content-start items-start style-observer-target">
                      {/* top */}
                      <div
                        className={cn(
                          "w-full gap-4 relative",
                          "hidden tt-body-index:flex"
                        )}
                      >
                        <s_sidebar>
                          <tt_html_comment>최근 게시물</tt_html_comment>
                          <s_sidebar_element>
                            <tt_html_comment>
                              (사이드바 6) 최근 게시물
                            </tt_html_comment>
                            <div className="min-w-0 min-h-0 relative flex-1 flex flex-wrap gap-1">
                              <TitleBar2>최근 게시물</TitleBar2>
                              <div className="w-full relative">
                                <ul
                                  className={cn(
                                    "w-full flex-wrap gap-1 relative other/recent-post-list",
                                    "flex home-posts-display-type-gallery:grid",
                                    "home-posts-display-type-gallery:home-posts-display-type-gallery-col-count-2:grid-cols-2",
                                    "home-posts-display-type-gallery:home-posts-display-type-gallery-col-count-3:grid-cols-3",
                                    "home-posts-display-type-gallery:home-posts-display-type-gallery-col-count-4:grid-cols-4",
                                    "home-posts-display-type-gallery:home-posts-display-type-gallery-col-count-5:grid-cols-5"
                                  )}
                                >
                                  <s_rctps_rep>
                                    <li className="w-full block relative">
                                      <RecentPostItem />
                                    </li>
                                  </s_rctps_rep>
                                </ul>
                                <div className="block other-has-[li]/recent-post-list:hidden text-xs text-tcu-color-3/50">
                                  등록된 글이 없습니다.
                                </div>
                              </div>
                            </div>
                          </s_sidebar_element>
                        </s_sidebar>
                      </div>

                      {/* bottom */}

                      {/* mini room */}
                      <div
                        className={cn(
                          "w-full flex-wrap gap-1 relative mini_room_display_flag_hide:hidden",
                          "hidden tt-body-index:flex"
                        )}
                      >
                        <TitleBar2>Mini Room</TitleBar2>
                        <MiniRoom />
                      </div>

                      {/* posts */}
                      <Posts />

                      {/* guestbook */}
                      <GuestBook />

                      <Pagination />

                      <Script
                        html={`
                          checkStyleObserver();
                        `}
                      />
                    </div>
                  </div>
                </div>

                {/* right menu area */}
                <nav className="w-[1px] h-auto absolute top-[50px] right-0 z-1 block">
                  <ul className="w-[72px] max-h-[350px] flex flex-col relative gap-0.5">
                    <s_sidebar>
                      <tt_html_comment>[nav]</tt_html_comment>
                      <s_sidebar_element>
                        <tt_html_comment>(사이드바 7) 홈</tt_html_comment>
                        <li className="w-full flex relative">
                          <NavButton
                            id="nav-home-button"
                            className="tt-body-index:bg-tcu-color-2 tt-body-index:text-tcu-color-1"
                            href="/"
                          >
                            홈
                          </NavButton>
                        </li>
                      </s_sidebar_element>
                      <s_sidebar_element>
                        <tt_html_comment>(사이드바 7) 게시판</tt_html_comment>
                        <li className="w-full flex relative">
                          <NavButton
                            id="nav-category-button"
                            className={cn(
                              "tt-body-category:bg-tcu-color-2 tt-body-category:text-tcu-color-1",
                              "tt-body-page:bg-tcu-color-2 tt-body-page:text-tcu-color-1",
                              "tt-body-search:bg-tcu-color-2 tt-body-search:text-tcu-color-1"
                            )}
                            href="/category"
                          >
                            게시판
                          </NavButton>
                        </li>
                      </s_sidebar_element>
                      <s_sidebar_element>
                        <tt_html_comment>(사이드바 7) 공지사항</tt_html_comment>
                        <li className="w-full flex relative">
                          <NavButton
                            id="nav-notice-button"
                            className={cn(
                              "tt-body-notice:bg-tcu-color-2 tt-body-notice:text-tcu-color-1",
                              "tt-body-notice-page:bg-tcu-color-2 tt-body-notice-page:text-tcu-color-1"
                            )}
                            href="/notice"
                          >
                            공지사항
                          </NavButton>
                        </li>
                      </s_sidebar_element>
                      <s_sidebar_element>
                        <tt_html_comment>(사이드바 7) 태그</tt_html_comment>
                        <li className="w-full flex relative">
                          <NavButton
                            id="nav-notice-button"
                            className={cn(
                              "tt-body-tag:bg-tcu-color-2 tt-body-tag:text-tcu-color-1",
                              "tt-body-tag-index:bg-tcu-color-2 tt-body-tag-index:text-tcu-color-1"
                            )}
                            href="/tag"
                          >
                            태그
                          </NavButton>
                        </li>
                      </s_sidebar_element>
                      <s_sidebar_element>
                        <tt_html_comment>(사이드바 7) 방명록</tt_html_comment>
                        <li className="w-full flex relative">
                          <NavButton
                            id="nav-guestbook-button"
                            className="tt-body-guestbook:bg-tcu-color-2 tt-body-guestbook:text-tcu-color-1"
                            href="/guestbook"
                          >
                            방명록
                          </NavButton>
                        </li>
                      </s_sidebar_element>
                      <s_sidebar_element>
                        <tt_html_comment>(사이드바 7) 관리</tt_html_comment>
                        <li className="w-full flex relative">
                          <NavButton id="nav-blog-manage-button" href="/manage">
                            관리
                          </NavButton>
                        </li>
                      </s_sidebar_element>
                    </s_sidebar>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
