import { Script } from "../script/script.component";

export function LatestVersionCheck() {
  return (
    <>
      <Script
        html={`
          window.addEventListener('load', () => {
            latestVersionCheck();    
          });
        `}
      />
    </>
  );
}
