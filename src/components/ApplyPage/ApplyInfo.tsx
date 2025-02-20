import { useOutletContext } from "react-router-dom";
import NavigationButtons from "../@common/NavigationButtons";
import { useState } from "react";

interface InfoType {
  name: string;
  email: string;
  phone: string;
}

const ApplyInfo = () => {
  const { currentStep } = useOutletContext<{ currentStep: number }>();
  const [formData, setFormData] = useState<InfoType>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="flex flex-col flex-1 gap-6">
        <div className="flex flex-col gap-4 py-5 px-4 border border-gray-200 rounded-lg">
          <p className="font-semibold">
            성함을 입력해주세요
            <span className="pl-1 text-red-500">*</span>
          </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="예시: 홍길동"
            className="p-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-blue-500"
            autoFocus
            required
          />
        </div>

        <div className="flex flex-col gap-4 py-5 px-4 border border-gray-200 rounded-lg">
          <p className="font-semibold">
            이메일 주소를 입력해주세요
            <span className="pl-1 text-red-500">*</span>
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="예시: prography@gmail.com"
            className="p-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-4 py-5 px-4 border border-gray-200 rounded-lg">
          <p className="font-semibold">
            휴대폰 번호를 입력해주세요
            <span className="pl-1 text-red-500">*</span>
          </p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="예시: 010-1234-5678"
            className="p-3 rounded-md border border-gray-200 bg-gray-50 focus:outline-blue-500"
            required
          />
        </div>
      </form>
      <NavigationButtons
        currentStep={currentStep}
        isValid={
          formData.name !== "" && formData.email !== "" && formData.phone !== ""
        }
      />
    </>
  );
};

export default ApplyInfo;
