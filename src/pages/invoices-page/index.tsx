import { BalanceCard, Card } from "components";
import DrawelInvoice from "features/invoice-system/components/DrawelInvoice";
import DrawelInvoiceLink from "features/invoice-system/components/DrawelInvoiceLink";
import { GeneralLayout } from "layouts";
import { useState } from "react";
// import { NextPageWithLayout } from "types";
const Home: any = (): any => {
  return (
    <GeneralLayout captionProp={<BalanceCard />}>
      <Card>
        <div>test preview layout ....</div>
      </Card>
      <div>
        <DrawelInvoice />
        <DrawelInvoiceLink/>
       
      </div>
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
