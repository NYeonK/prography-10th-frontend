import clsx from "clsx";
import { Outlet, useLocation } from "react-router-dom";
import { APPLY_STEPS } from "../../utils/apply-steps";

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

      <article className="flex flex-col flex-1 gap-6 p-8 bg-white rounded-2xl">
        <div className="flex flex-col gap-3">
          <div className="font-semibold text-2xl">
            {APPLY_STEPS[currentStep - 1].title}
          </div>
          <div className="inset-y-0 h-1 bg-blue-500" />
          <p className="text-gray-500">
            {APPLY_STEPS[currentStep - 1].content}
          </p>
        </div>

        <Outlet context={{ currentStep }} />
      </article>
    </section>
  );
};

export default ApplyPage;
