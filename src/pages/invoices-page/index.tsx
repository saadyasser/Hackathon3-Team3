import { BalanceCard, Card } from "components";
import SearchInvoice from "features/invoice-system/components/search-invoices";
import { GeneralLayout } from "layouts";
import Search from "features/invoice-system/components/Table/Search";
import Table from "features/invoice-system/components/Table";
import {useState} from "react";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
       
      <div className="flex flex-col">
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Card>
          <Table searchValue={searchValue} setSearchValue={setSearchValue} />
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
