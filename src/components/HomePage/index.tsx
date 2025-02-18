import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="h-full bg-white rounded-2xl">
      <Link to="/apply/consent">지원하기</Link>
    </section>
  );
};

export default HomePage;
