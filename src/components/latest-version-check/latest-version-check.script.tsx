import { compareVersion } from "@wisdomstar94/vanilla-js-util";
import { version } from "../../../package.json";
import axios from "axios";
import { isAdmin } from "../common/functions";

const repositoryName = `tistory-cyworld-minihompi-ui-skin`;

function latestVersionCheck() {
  if (!isAdmin()) {
    return;
  }

  const checkAtTime = getLatestVersionCheckAtTime();
  if (Date.now() - checkAtTime <= 1000 * 60 * 5) {
    // 가장 마지막으로 체크한 시간으로부터 아직 5분이 지나지 않은 경우에는 체크 막기
    console.log("#latest version check a few moment holding..");
    return;
  }

  console.log("#latest version check start..");
  localStorage.setItem("latest-version-check-at-time", Date.now().toString());

  axios
    .get(
      `https://cdn.jsdelivr.net/gh/wisdomstar94/${repositoryName}/package.json?t=${Date.now()}`
    )
    .then((res) => {
      const result = res.data;
      const latestVersion = result.version;
      if (typeof latestVersion !== "string") {
        console.warn(`스킨 최신 버전 정보를 가져올 수 없습니다.`);
        return;
      }

      const onlyLatestVersion = latestVersion.replace("v", "");
      const versionCompareResult = compareVersion(version, onlyLatestVersion);
      if (versionCompareResult === "same") {
        // 최신 버전
        // ..
        console.log("#version is already latest!");
        return;
      }

      if (versionCompareResult === "right-higher") {
        // 최신 버전 아님
        // ..
        if (getLatestVversionHideTargetTime() <= Date.now()) {
          if (
            !confirm(
              `현재 이용하고 계신 스킨의 버전보다 더 높은 최신 버전이 감지 되었습니다. 최신버전 스킨 파일을 다운로드 받을 수 있는 페이지로 이동하시겠습니까? ("취소" 를 선택할 시 30일 동안 최신 버전이 감지되어도 모달 창이 표시되지 않습니다.)`
            )
          ) {
            // deny

            return;
          }

          // allow
          positiveButtonClick();
        }
      }
    });
}

(window as any).latestVersionCheck = latestVersionCheck;

function negativeButtonClick(modalId: string) {
  // const modal = getModal(modalId);
  localStorage.setItem(
    "latest-version-hide-target-time",
    (Date.now() + 1000 * 60 * 60 * 24 * 30).toString()
  );
  // modal?.classList.add("modal-close");
  // modal?.classList.remove("modal-open");
}

(window as any).negativeButtonClick = negativeButtonClick;

function positiveButtonClick() {
  window.open(
    `https://github.com/wisdomstar94/${repositoryName}/releases/latest`,
    "_blank"
  );
}

(window as any).positiveButtonClick = positiveButtonClick;

function getLatestVversionHideTargetTime() {
  const latestVversionHideTargetTime = localStorage.getItem(
    "latest-version-hide-target-time"
  );
  if (latestVversionHideTargetTime === null) return 0;

  const number = Number(latestVversionHideTargetTime);
  if (isNaN(number)) {
    return 0;
  }

  return number;
}

function getLatestVersionCheckAtTime() {
  const time = localStorage.getItem("latest-version-check-at-time");
  if (time === null) {
    const value = Date.now() - 1000 * 60 * 6;
    localStorage.setItem("latest-version-check-at-time", value.toString());
    return value;
  }

  const number = Number(time);
  if (isNaN(number)) {
    const value = Date.now() - 1000 * 60 * 6;
    localStorage.setItem("latest-version-check-at-time", value.toString());
    return value;
  }

  return number;
}

function goToSkinLatestPage() {
  window.open(
    `https://github.com/wisdomstar94/${repositoryName}/releases/latest`,
    "_blank"
  );
}

(window as any).goToSkinLatestPage = goToSkinLatestPage;
