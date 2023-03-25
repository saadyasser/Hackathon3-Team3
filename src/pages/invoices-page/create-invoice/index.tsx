import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button, Dropdown } from "components";
import { InvoiceCard, Preview } from "features/invoice-system";
import NestedLayoutCreateInvoice from "layouts/NestedLayoutCreateInvoice";

const options = [
  { value: "settings", label: "Account settings" },
  { value: "info", label: "Account info" },
];

const InvoicesPage = () => {
  return (
    <NestedLayoutCreateInvoice
      form={(obj: any) => <InvoiceCard {...obj} />}
      preview={(fieldsData: any) => <Preview {...fieldsData} />}
    ></NestedLayoutCreateInvoice>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Talents Valley Create Link",
  pageDescription: "create Link page description",
  withoutFooter: true,
};

export default InvoicesPage;
