import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button, Dropdown } from "components";
import { InvoiceCard, Preview } from "features/invoice-system";
import NestedLayoutEditInvoice from "layouts/NestedLayoutEditInvoice";
import EditInvoiceCard from "features/invoice-system/components/EditInvoiceCard";

const EditInvoice = () => {
  return (
    <NestedLayoutEditInvoice
      form={(obj: any) => <EditInvoiceCard {...obj} />}
      preview={(fieldsData: any) => <Preview {...fieldsData} />}
    ></NestedLayoutEditInvoice>
  );
};

EditInvoice.mainLayoutProps = {
  title: "Talents Valley Edit Invoice",
  pageDescription: "Edit Invoice page description",
  withoutFooter: true,
};

export default EditInvoice;
