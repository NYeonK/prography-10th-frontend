import { useState } from "react";
import Radio from "../@common/Radio";
import NavigationButtons from "../@common/NavigationButtons";
import { useOutletContext } from "react-router-dom";

const PrivacyConsent = () => {
  const { currentStep } = useOutletContext<{ currentStep: number }>();
  const [isAgreed, setIsAgreed] = useState<boolean | null>(null);

  return (
    <>
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
          <Radio
            checked={isAgreed === true}
            onChange={() => setIsAgreed(isAgreed === true ? null : true)}
            label="개인정보 수집 여부에 동의합니다"
          />
          <Radio
            checked={isAgreed === false}
            onChange={() => setIsAgreed(isAgreed === false ? null : false)}
            label="개인정보 수집 여부에 동의하지 않습니다"
          />
        </div>
      </div>
      <NavigationButtons
        currentStep={currentStep}
        isValid={isAgreed !== null}
      />
    </>
  );
};

export default PrivacyConsent;
