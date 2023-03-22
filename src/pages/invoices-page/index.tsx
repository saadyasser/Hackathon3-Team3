import { BalanceCard, Card } from "components";
import SearchInvoice from "features/invoice-system/components/search-invoices";
import { GeneralLayout } from "layouts";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
        <SearchInvoice />
      <Card>
        <div>test preview layout ....</div>
      </Card>
    </GeneralLayout>
  );
};

Home.mainLayoutProps = {
  title: "Talents Valley Invoice Page",
  pageDescription: "Home page description",
  contentClassName: "!block",
  withSidebar: true,
};

export default Home;
