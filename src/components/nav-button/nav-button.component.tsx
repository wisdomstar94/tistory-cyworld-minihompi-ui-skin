import { cn } from "@/utils/cn";
import { INavButton } from "./nav-button.type";

export function NavButton(props: INavButton.Props) {
  const { id, children, className, href } = props;

  return (
    <>
      <a
        id={id}
        href={href}
        className={cn(
          "w-full bg-tcu-color-7 text-tcu-color-2 px-2 py-2 cursor-pointer text-xs flex items-center justify-center content-center box-border",
          "border-r border-r-tcu-color-8",
          "border-b border-b-tcu-color-8",
          "border-t border-t-tcu-color-8",
          "rounded-tr-lg rounded-br-lg",
          className
        )}
      >
        {children}
      </a>
    </>
  );
}
