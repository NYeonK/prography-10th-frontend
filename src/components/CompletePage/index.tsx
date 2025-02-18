import { Link } from "react-router-dom";

const CompletePage = () => {
  return (
    <section className="space-y-5">
      <div className="py-8 text-center text-3xl font-bold bg-white rounded-2xl">
        Prography 10기 지원서
      </div>

      <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            fill="white"
          >
            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
          </svg>
        </div>
        <p className="text-2xl font-semibold">지원이 완료되었습니다!</p>
        <p className="text-center">
          프로그라피 10기 지원해주셔서 감사합니다.
          <br />
          서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  );
};

export default CompletePage;
