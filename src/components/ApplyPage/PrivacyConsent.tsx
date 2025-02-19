import clsx from "clsx";
import { useState } from "react";

const PrivacyConsent = () => {
  const [isAgreed, setIsAgreed] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col gap-4 py-5 px-4 border border-gray-200 font-semibold rounded-lg">
      <p>
        수집 목적: Prograpy 10기 리쿠르팅 과정 및 결과 안내
        <br />
        수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보
        <br />
        보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기
      </p>
      <p>
        개인정보 수집여부 동의 여부를 체크해주세요
        <span className="pl-1 text-red-500">*</span>
      </p>
      <div className="flex flex-col gap-4">
        <div
          onClick={() => setIsAgreed(isAgreed === true ? null : true)}
          className="flex items-center gap-2 py-5 px-4 border border-gray-200 rounded-lg cursor-pointer"
        >
          <div
            className={clsx(
              "w-5 h-5 flex items-center justify-center rounded-full border",
              isAgreed === true ? "border-blue-500" : "border-gray-500"
            )}
          >
            {isAgreed === true && (
              <div className="w-3 h-3 rounded-full bg-blue-500" />
            )}
          </div>
          <span>개인정보 수집 여부에 동의합니다</span>
        </div>
        <div
          onClick={() => setIsAgreed(isAgreed === false ? null : false)}
          className="flex items-center gap-2 py-5 px-4 border border-gray-200 rounded-lg cursor-pointer"
        >
          <div
            className={clsx(
              "w-5 h-5 flex items-center justify-center rounded-full border",
              isAgreed === false ? "border-blue-500" : "border-gray-500"
            )}
          >
            {isAgreed === false && (
              <div className="w-3 h-3 rounded-full bg-blue-500" />
            )}
          </div>
          <span>개인정보 수집 여부에 동의하지 않습니다</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsent;
