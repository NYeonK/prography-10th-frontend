import clsx from "clsx";
import { Outlet, useLocation } from "react-router-dom";

const APPLY_STEPS = [
  { id: 1, path: "consent" },
  { id: 2, path: "info" },
  { id: 3, path: "job" },
] as const;

const ApplyPage = () => {
  const location = useLocation();
  const currentStep =
    APPLY_STEPS.find((step) => location.pathname.includes(step.path))?.id ?? 1;

  return (
    <section className="h-full bg-white rounded-2xl">
      <div className="p-4">
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
                className="w-10 h-10 flex items-center justify-center bg-white"
              >
                <div
                  className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2",
                    currentStep >= step.id
                      ? "border-blue-500 text-blue-500"
                      : "border-gray-200 text-gray-200"
                  )}
                >
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default ApplyPage;
