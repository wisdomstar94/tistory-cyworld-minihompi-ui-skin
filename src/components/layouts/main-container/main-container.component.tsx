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
                <div className="w-[366px] h-full border-l border-t border-b border-dashed border-color-2 rounded-xl"></div>
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
                  "grid grid-cols-[222px_1fr] grid-rows-[auto_1fr] gap-4 auto-rows-auto"
                  //
                )}
              >
                <div className="min-w-0 min-h-0 relative flex items-stretch">
                  <s_sidebar>
                    <s_sidebar_element>
                      <tt_html_comment>방문자 수</tt_html_comment>
                      <div className="w-full flex relative items-end text-xs justify-center scale-y-[0.9]">
                        <div className="flex items-center gap-6">
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
                <div className="min-w-0 min-h-0">2</div>
                <div className="min-w-0 min-h-0">3</div>
                <div className="min-w-0 min-h-0">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
