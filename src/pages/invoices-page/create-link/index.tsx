import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button, Dropdown } from "components";
import { NestedLayout } from "layouts";
import { LinkForm } from "features/invoice-system/components";
import { Preview } from "features/invoices";
import { useRouter } from "next/router";

const options = [
  { value: "settings", label: "Account settings" },
  { value: "info", label: "Account info" },
];

const InvoicesPage = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  const router = useRouter();
  const data = JSON.parse(router.query.data);
  const url: any = router.query.url;
  const id: any = router.query.id;

  return (
    <NestedLayout>
      <LinkForm id={id} url={url} data={data} />
    </NestedLayout>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Talents Valley Create Link",
  pageDescription: "create Link page description",
  withoutFooter: true,
};

export default InvoicesPage;
