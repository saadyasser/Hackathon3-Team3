import { BalanceCard, Card } from "components";
import { GeneralLayout } from "layouts";
import Search from "features/invoice-system/components/Table/Search";
import Table from "features/invoice-system/components/Table";
import {useState}from "react";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const[showLinks,setshowLinks]=useState(false);
  const [allTab, setAllTab] = useState([
    "sent", "paid"," pending" , "rejected", "refunded", "cancelled", "active", "inactive"
  ]);
  const [invoiceTab, setInvoiceTab] = useState([
    "sent", "paid", "pending" , "rejected", "refunded", "cancelled"
  ]);
  const [serviceTab , setServiceTab] = useState([
    "active", "inactive", "rejected", "pending"
  ]);
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
      <div className="flex flex-col">
        <Search searchValue={searchValue} showLinks={showLinks} setshowLinks={setshowLinks} toggle={toggle} setToggle={setToggle} showInvoice={showInvoice} setShowInvoice={setShowInvoice} setSearchValue={setSearchValue} data={data} setData={setData} setAllTab={setAllTab} setInvoiceTab={setInvoiceTab} setServiceTab={setServiceTab}/>
        <Card>
          <Table toggle={toggle} showLinks={showLinks} showInvoice={showInvoice} searchValue={searchValue} setSearchValue={setSearchValue} data={data} allTab={allTab} setData={setData} invoiceTab={invoiceTab} serviceTab={serviceTab} />
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
