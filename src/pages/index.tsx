import { BalanceCard, Card } from "components";
import { GeneralLayout } from "layouts";
import {  useLogout } from "features/authentication";
import { Button } from "components";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  const logout = useLogout();
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
        <Button onClick={logout}>Logout</Button>
    </GeneralLayout>
  );
};

Home.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  contentClassName: "!block",
  withSidebar: true,
};

export default Home;
