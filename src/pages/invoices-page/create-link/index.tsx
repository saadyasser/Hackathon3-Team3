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
  console.log(router, "router");

  return (
    <NestedLayout>
      <LinkForm
        id="641c418f86abbe326e82bc04"
        url="https://talents-valley-backend.herokuapp.com/api/service/edit/"
        data={{
          fixed: [
            {
              itemName: "prode edited",
              description: "test service",
              price: 300,
            },
            {
              itemName: "edited job",
              description: "test service",
              price: 300,
            },
          ],
          currency: "USD",
        }}
      />
    </NestedLayout>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Talents Valley Create Link",
  pageDescription: "create Link page description",
  withoutFooter: true,
};

export default InvoicesPage;
