import { useState } from "react";
import Radio from "../@common/Radio";

type JobType = "Fe" | "Be" | "Design" | "Ios" | "Android" | "Po";

const JOBS = [
  { value: "Fe", label: "프론트엔드" },
  { value: "Be", label: "백엔드" },
  { value: "Design", label: "디자인" },
  { value: "Ios", label: "iOS" },
  { value: "Android", label: "안드로이드" },
  { value: "Po", label: "Product Owner" },
] as const;

const ApplyJob = () => {
  const [job, setJob] = useState<JobType | null>(null);

  const handleJobChange = (selectedJob: JobType) => {
    setJob(job === selectedJob ? null : selectedJob);
  };

  return (
    <div className="flex flex-col gap-4 py-5 px-4 border border-gray-200 font-semibold rounded-lg">
      <p>
        지원 분야를 선택해주세요
        <span className="pl-1 text-red-500">*</span>
      </p>
      <div className="flex flex-col gap-4">
        {JOBS.map(({ value, label }) => (
          <Radio
            checked={job === value}
            onChange={() => handleJobChange(value)}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;
