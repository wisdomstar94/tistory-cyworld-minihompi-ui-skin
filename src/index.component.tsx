import { AdArea } from "./components/ad-area/ad-area.component";
import { MainContainer } from "./components/layouts/main-container/main-container.component";
import { Script } from "./components/script/script.component";
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
        <title></title>
      </head>
      <body id="[##_body_id_##]">
        <Script
          html={`
            checkPage();
          `}
        />

        <AdArea upper />

        <MainContainer />

        <AdArea lower />
      </body>
    </html>
  );
}
