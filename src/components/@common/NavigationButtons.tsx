import clsx from "clsx";
import { Link } from "react-router-dom";
import { APPLY_STEPS } from "../../utils/apply-steps";

interface Props {
  currentStep: number;
  data: any;
}

const NavigationButtons = ({ currentStep, data }: Props) => {
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

        <Link
          to={
            currentStep === APPLY_STEPS.length
              ? "/complete"
              : APPLY_STEPS[currentStep].path
          }
          onClick={(e) => {
            if (data === null) {
              e.preventDefault();
              alert("필수 항목을 확인해주세요");
            }
          }}
          className="px-5 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          {currentStep === APPLY_STEPS.length ? "제출하기" : "다음"}
        </Link>
      </div>
    </>
  );
};

export default NavigationButtons;
