import { Style } from "@/components/style/style.component";
import { Var } from "@/consts/torytis-variable-object";

export function Background() {
  const id = "unique-background";
  const innerId = "unique-background-inner";

  return (
    <>
      <div id={id} className="w-full h-full fixed top-0 left-0 z-0">
        <div id={innerId} className="w-full h-full relative"></div>
      </div>
      <s_if_var_bg_color>
        <Style
          html={`
            #${id} {
              background-color: ${Var["[##_var_bg_color_##]"]};
            }
          `}
        />
      </s_if_var_bg_color>
      <s_if_var_bg_image_url>
        <Style
          html={`
            #${innerId} {
              background-image: url("${Var["[##_var_bg_image_url_##]"]}");
              background-size: ${Var["[##_var_bg_image_fit_type_##]"]};
              background-position: center center;
              background-repeat: no-repeat;
            }
          `}
        />
      </s_if_var_bg_image_url>
    </>
  );
}
