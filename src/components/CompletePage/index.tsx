import { Link } from "react-router-dom";

const CompletePage = () => {
  return (
    <section className="space-y-5">
      <div className="py-8 text-center text-3xl font-bold bg-white rounded-2xl">
        Prography 10기 지원서
      </div>

      <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-2xl">
        <p className="text-2xl font-semibold">지원이 완료되었습니다!</p>
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
