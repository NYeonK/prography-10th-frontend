import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="h-full bg-white rounded-2xl">
      <img src="/src/assets/logo.webp" alt="로고" />
      <Link to="/apply/consent">지원하기</Link>
    </section>
  );
};

export default HomePage;
