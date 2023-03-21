import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button, Dropdown } from "components";
import { NestedLayout } from "layouts";
import { LinkForm } from "features/invoice-system/components";

const options = [
  { value: "settings", label: "Account settings" },
  { value: "info", label: "Account info" },
];

const InvoicesPage = (): JSX.Element => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  return (
    <NestedLayout
      form={<LinkForm url="" data={[]} id="" />}
      preview={<p>preview</p>}
    ></NestedLayout>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  withoutFooter: true,
};

export default InvoicesPage;
