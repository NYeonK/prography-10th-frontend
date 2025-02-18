import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex flex-col flex-1 items-center gap-10 p-10 text-center bg-white rounded-2xl">
      <img src="/src/assets/logo.webp" alt="로고" />
      <strong className="text-2xl">
        안녕하세요. 새로운 가치를 만들어가는 IT 커뮤니티, <br /> Prography
        입니다.
      </strong>
      <strong className="text-blue-500">
        드디어 Prography 10기 모집이 시작되었습니다.
      </strong>
      <p>
        Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)
        <br />총 6개의 파트를 모집합니다.
      </p>
      <p>
        ✓ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,
        <br />
        ✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,
        <br />✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면
      </p>
      <div className="space-y-2">
        <strong className="text-2xl text-blue-500">"프로답게, 재미있게"</strong>
        <p>재미있는 작당을 함께 만들어갈 10기에 합류하세요.</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>
          📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요 👇🏻
        </p>
        <a href="#" target="_blank" className="text-blue-500 font-bold">
          프로그라피 10기 모집 자세히 알아보기
        </a>
        <a
          href="https://prography.org/"
          target="_blank"
          className="text-blue-500 font-bold"
        >
          🏡 공식 홈페이지
        </a>
        <a
          href="https://www.instagram.com/prography_official/"
          target="_blank"
          className="text-blue-500 font-bold"
        >
          🔗 인스타그램
        </a>
      </div>
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
