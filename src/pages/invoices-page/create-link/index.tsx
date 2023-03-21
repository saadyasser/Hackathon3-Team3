import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button, Dropdown } from "components";
import { NestedLayout } from "layouts";
import { LinkForm } from "features/invoice-system/components";

const options = [
  { value: "settings", label: "Account settings" },
  { value: "info", label: "Account info" },
];

const InvoicesPage = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  return (
    <NestedLayout
      form={<LinkForm id="" url="" data={[]} />}
      preview={<p>Preview section</p>}
    ></NestedLayout>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Talents Valley Create Link",
  pageDescription: "create Link page description",
  withoutFooter: true,
};

export default InvoicesPage;
