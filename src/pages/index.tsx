import { BalanceCard, Card } from "components";
import { GeneralLayout } from "layouts";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
      <Card>
        <div>test layout</div>
      </Card>
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
