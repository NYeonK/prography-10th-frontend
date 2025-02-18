import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router-dom";

const APPLY_STEPS = [
  { id: 1, path: "/apply/consent" },
  { id: 2, path: "/apply/info" },
  { id: 3, path: "/apply/job" },
] as const;

const ApplyPage = () => {
  const location = useLocation();
  const currentStep =
    APPLY_STEPS.find((step) => location.pathname.includes(step.path))?.id ?? 1;

  return (
    <section className="space-y-5">
      <div className="py-8 text-center text-3xl font-bold bg-white rounded-2xl">
        Prography 10기 지원서
      </div>

      <div className="p-4 bg-white rounded-2xl">
        <div className="flex items-center relative">
          <div className="absolute h-1 inset-x-0 bg-gray-200" />

          <div
            className={clsx("absolute h-1 left-0 bg-blue-500", {
              "w-0": currentStep === 1,
              "w-1/2": currentStep === 2,
              "w-full": currentStep === 3,
            })}
          />

          <div className="flex justify-between relative w-full">
            {APPLY_STEPS.map((step) => (
              <div
                key={step.id}
                className="w-12 h-12 flex items-center justify-center bg-white"
              >
                <div
                  className={clsx(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    currentStep >= step.id
                      ? "bg-blue-500 text-white"
                      : "border-2 border-gray-200 text-gray-200"
                  )}
                >
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <article className="flex flex-1 p-4 bg-white rounded-2xl">
        <Outlet />
      </article>

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
          className="px-5 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          {currentStep === APPLY_STEPS.length ? "제출하기" : "다음"}
        </Link>
      </div>
    </section>
  );
};

export default ApplyPage;
