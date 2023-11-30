import Layout from "./layout";

import LoggedUserPage from "./@loggedUser/page";
import GuestUserPage from "./@guestUser/page";

import Charts from "./charts/page";

const DashboardPage = () => {
  return (
    <Layout loggedUser={<LoggedUserPage />} guestUser={<GuestUserPage />}>
      {/* Any other common elements across both dashboards */}
      <Charts />
    </Layout>
  );
};

export default DashboardPage;
