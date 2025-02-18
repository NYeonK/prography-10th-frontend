import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="h-full bg-white rounded-2xl">
      <img src="/src/assets/logo.webp" alt="로고" />
      <Link
        to="/apply/consent"
        className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600"
      >
        지원하기
      </Link>
    </section>
  );
};

export default HomePage;
