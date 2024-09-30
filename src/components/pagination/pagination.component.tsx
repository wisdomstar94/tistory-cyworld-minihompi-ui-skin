import "./pagination.scss";
import { cn } from "@/utils/cn";

export function Pagination() {
  return (
    <>
      <s_paging>
        <div className="w-full flex flex-wrap justify-center items-center content-center gap-0.5 relative box-border px-content-area-padding">
          <a
            tt-onlyattr="[##_prev_page_##]"
            className={cn("[##_no_more_prev_##]", "rounded-md p-1 inline-flex")}
          >
            <span className="text-xs text-color-3/70">{"<"}</span>
          </a>
          <div
            className="numbox inline-flex flex-wrap gap-0.5 items-center relative"
            data-title="pagination-page-num-list"
          >
            <s_paging_rep>
              <a
                tt-onlyattr="[##_paging_rep_link_##]"
                className="num inline-flex"
              >
                [##_paging_rep_link_num_##]
              </a>
            </s_paging_rep>
          </div>
          <a
            tt-onlyattr="[##_next_page_##]"
            className={cn("[##_no_more_next_##]", "rounded-md p-1 inline-flex")}
          >
            <span className="text-xs text-color-3/70">{">"}</span>
          </a>
        </div>
      </s_paging>
    </>
  );
}
