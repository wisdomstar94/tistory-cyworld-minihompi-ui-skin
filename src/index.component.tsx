import { AdArea } from "./components/ad-area/ad-area.component";
import { LatestVersionCheck } from "./components/latest-version-check/latest-version-check.component";
import { Background } from "./components/layouts/background/background.component";
import { MainContainer } from "./components/layouts/main-container/main-container.component";
import { Script } from "./components/script/script.component";
import { Style } from "./components/style/style.component";
import { Var } from "./consts/torytis-variable-object";
import "./index.scss";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scale=1.0, user-scalable=no"
        />
        <meta
          property="og:title"
          content="[##_page_title_##] :: [##_title_##]"
        />
        <title>[##_page_title_##] :: [##_title_##]</title>
        <s_if_var_primary_color>
          <Style
            html={`
              body {
                --tcu-color-1: ${Var["[##_var_primary_color_##]"]};
              }
            `}
          />
        </s_if_var_primary_color>
        <s_if_var_primary_strong_color>
          <Style
            html={`
              body {
                --tcu-color-7: ${Var["[##_var_primary_strong_color_##]"]};
              }
            `}
          />
        </s_if_var_primary_strong_color>
        {/* <s_if_var_bg_image_url>
          <Style
            html={`
              html {
                background-image: url("${Var["[##_var_bg_image_url_##]"]}");
                background-size: ${Var["[##_var_bg_image_fit_type_##]"]};
                background-position: center center;
                background-repeat: no-repeat;
              }
            `}
          />
        </s_if_var_bg_image_url> */}
      </head>
      <body
        id="[##_body_id_##]"
        className="style-observer-target"
        style={{ backgroundSize: "" }}
      >
        <Script
          html={`
            checkPage();
          `}
        />
        <s_t3>
          <Background />

          <AdArea upper />

          <MainContainer />

          <AdArea lower />

          <LatestVersionCheck />
        </s_t3>
      </body>
    </html>
  );
}
