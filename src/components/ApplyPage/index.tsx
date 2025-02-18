import { Outlet } from "react-router-dom";

const ApplyPage = () => {
  return (
    <section className="h-full bg-white rounded-2xl">
      Apply
      <Outlet />
    </section>
  );
};

export default ApplyPage;
