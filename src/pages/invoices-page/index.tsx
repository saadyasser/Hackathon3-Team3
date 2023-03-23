import { BalanceCard, Card } from "components";
import SearchInvoice from "features/invoice-system/components/search-invoices";
import { GeneralLayout } from "layouts";
import Search from "features/invoice-system/components/Table/Search";
import Table from "features/invoice-system/components/Table";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
      <div className="flex flex-col">
        <Search />
        <Card>
          <Table />
        </Card>
      </div>
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
