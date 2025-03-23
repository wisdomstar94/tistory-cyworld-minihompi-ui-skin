import { cn } from "@/utils/cn";
import { MdImageNotSupported } from "react-icons/md";

export function RecentPostItem() {
  return (
    <>
      <a
        href="[##_rctps_rep_link_##]"
        className={cn(
          "group/rctps-rep-a",
          "w-full flex gap-1 text-xs relative",
          "home-posts-display-type-gallery:flex-col",
          "items-center home-posts-display-type-gallery:items-start"
        )}
      >
        <span
          className={cn(
            "items-center flex-shrink-0 flex-grow-0",
            "inline-flex home-posts-display-type-gallery:hidden"
          )}
        >
          ·
        </span>
        <div
          className={cn(
            "w-full aspect-square relative",
            "hidden home-posts-display-type-gallery:block"
          )}
        >
          <s_article_rep_thumbnail>
            <img
              className={cn(
                "other/recent-post-thumnail-img",
                "w-full h-full object-cover object-center block relative"
              )}
              src="[##_article_rep_thumbnail_url_##]"
            />
          </s_article_rep_thumbnail>
          <div
            className={cn(
              "other-exist-[recent-post-thumnail-img]:hidden",
              "w-full h-full flex items-center justify-center relative",
              "bg-tcu-color-8"
            )}
          >
            <MdImageNotSupported
              className={cn("text-tcu-color-3/50 w-7 h-7")}
            />
          </div>
        </div>
        <div className="w-full flex items-center relative min-w-0 group-hover/rctps-rep-a:underline">
          <div className="w-full block overflow-hidden overflow-ellipsis whitespace-nowrap">
            [##_rctps_rep_title_##]
          </div>
        </div>
        <div
          className={cn(
            "w-[70px] flex items-center flex-shrink-0 flex-grow-0 group-hover/rctps-rep-a:underline tabular-nums",
            "home-posts-display-type-gallery:text-tcu-color-3/50",
            "justify-end home-posts-display-type-gallery:justify-start"
          )}
        >
          [##_rctps_rep_simple_date_##]
        </div>
      </a>
    </>
  );
}
