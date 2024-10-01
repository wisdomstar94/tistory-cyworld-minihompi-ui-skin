import { cn } from "@/utils/cn";
import { IAdArea } from "./ad-area.type";

export function AdArea(props: IAdArea.Props) {
  const { upper, lower } = props;

  return (
    <>
      <div
        className={cn(
          "w-full block relative",
          "fixed left-0",
          upper && "top-1",
          lower && "bottom-1"
        )}
      >
        {upper === true && "[##_revenue_list_upper_##]"}
        {lower === true && "[##_revenue_list_lower_##]"}
      </div>
    </>
  );
}
