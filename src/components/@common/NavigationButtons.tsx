import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { APPLY_STEPS } from "../../utils/apply-steps";
import { useFormStore } from "../../stores/useFormStore";

interface Props {
  currentStep: number;
  isValid: boolean;
}

const NavigationButtons = ({ currentStep, isValid }: Props) => {
  const { consent, info, job, resetForm } = useFormStore();
  const navigate = useNavigate(); // 추가

  const onSubmit = () => {
    if (consent === null || !info || !job) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    // todo :: form data 전송
    console.log(consent, info, job);

    // 제출 성공 후 데이터 초기화 및 페이지 이동
    resetForm();
    navigate("/complete");
  };

  return (
    <>
      <div className="flex justify-between p-4 bg-white rounded-2xl">
        <Link
          to={currentStep === 1 ? "/" : APPLY_STEPS[currentStep - 2].path}
          className={clsx("px-5 py-2 rounded", {
            "text-gray-500 bg-gray-200 hover:bg-gray-300": currentStep === 1,
            "text-white bg-blue-500 hover:bg-blue-600": currentStep !== 1,
          })}
        >
          뒤로
        </Link>

        {currentStep === APPLY_STEPS.length ? (
          <button
            onClick={onSubmit}
            disabled={!isValid}
            className="px-5 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-200 disabled:text-gray-500"
          >
            제출하기
          </button>
        ) : (
          <Link
            to={APPLY_STEPS[currentStep].path}
            onClick={(e) => {
              if (!isValid) {
                e.preventDefault();
                alert("필수 항목을 확인해주세요");
              }
            }}
            className="px-5 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
          >
            다음
          </Link>
        )}
      </div>
    </>
  );
};

export default NavigationButtons;
