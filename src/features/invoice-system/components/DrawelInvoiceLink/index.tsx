import axios from "axios";
import { Button, Card, Input } from "components";
import Modal from "components/Modal";
import Canceled from "components/svg/Canceled";
import Disapproved from "components/svg/Disapproved";
import Link from "components/svg/Link";
import Paid from "components/svg/Paid";
import PendingApproval from "components/svg/PendingApproval";
import Warning from "components/svg/Warning";
import TransferCard from "components/TransferCard";
import { API_SERVICES_URLS, COOKIES_KEYS } from "data";
import useModal from "hooks/useModal";
import useSwrFetch from "hooks/useSwrFetch";
import { getCookie } from "lib/js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Drawel from "../Drawel";
import styles from "./style.module.css";

const DrawelInvoiceLink: any = (): any => {
  const router = useRouter();
  const modalDelete = useModal();
  const modalCancle = useModal();

  const inputRef = useRef<any>(null);

  function handleCopy() {
    inputRef.current.select();
    document.execCommand("copy");
  }

  const [showInvoice, setShowInvoice] = useState(true);

  const toggleInvoice = () => {
    setShowInvoice((prevState) => !prevState);
  };

  const { data, error, isLoading } = useSwrFetch(
    API_SERVICES_URLS.CLIENT.INVOICE_LINK_DETAILS("641c418f86abbe326e82bc04"),
    {
      method: "GET",
      headers: {},
    }
  );
  console.log(data?.data);

  const invoiceDataService = data?.data?.service;
  const invoiceData = data?.data?.invoices?.data;
  const fixedInvoice = invoiceDataService?.fixed;
  const timeline = invoiceDataService?.history;

  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  const changeStateToInactive = () => {
    axios
      .put(
        "https://talents-valley-backend.herokuapp.com/api/service/change-status/634e949b6a8f7123704482e8",
        { status: "inactive" },
        { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeStateToActive = () => {
    // const currentUser = getCookie(COOKIES_KEYS.currentUser);
    axios
      .put(
        "https://talents-valley-backend.herokuapp.com/api/service/change-status/634e949b6a8f7123704482e8",
        { status: "active" },
        { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(invoiceData);

  return (
    <Drawel>
      {invoiceDataService?.status === "disapproved" && (
        <div className="flex justify-center mt-2">
          <Card className="w-11/12 bg-[#FFF3F3] border border-[#FFD8D8] shadow-none">
            <div className="flex gap-3">
              <div>
                <Warning />
              </div>
              <div>
                <p className="text-xs font-bold">
                  Invoice Disapproved. Review:
                </p>
                <p className="text-xs text-[#797979]">- Description.</p>
                <p className="text-xs text-[#797979]">- Amount.</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="flex justify-center mt-2">
        <div className="w-96">
          <div className="flex  justify-between">
            <div className="flex gap-2">
              <div className="mt-1">
                {invoiceDataService?.status === "pending_approval" ? (
                  <PendingApproval />
                ) : invoiceDataService?.status === "canceled" ? (
                  <Canceled />
                ) : invoiceDataService?.status === "warning" ? (
                  <PendingApproval />
                ) : invoiceDataService?.status === "disapproved" ? (
                  <Disapproved />
                ) : invoiceDataService?.status === "inactive" ? (
                  <Link />
                ) : invoiceDataService?.status === "active" ? (
                  <Link />
                ) : (
                  <Paid />
                )}
              </div>
              <div>
                <p className="text-xs text-[#DAA545] font-bold">
                  {invoiceDataService?.status}
                </p>
                <p className="text-xs text-[#8C8C8C]">Estimate: 24 hours.</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#8C8C8C]">
                {new Date(invoiceDataService?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <div className="w-96">
          {fixedInvoice?.map((item: any, index: any) => (
            <div key={index} className="flex justify-between border-b-2 pb-2">
              <div>
                <p className="text-xs">{item.itemName}</p>
                <p className="text-[#8C8C8C] text-xs">{item.description}</p>
              </div>
              <div>
                <p className="text-xs">{item.price} $</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-2 mr-8 ml-8 gap-2">
        <div className="mt-7">
          <Input
            type="text"
            name="link"
            ref={inputRef}
            value={invoiceDataService?.hashCode}
            className="w-80 ml-[-14px]"
            disabled={invoiceDataService?.status === "inactive"}
          />
        </div>
        <Button
          onClick={handleCopy}
          className="mt-6 mb-6 bg-[#BEC2C6] border border-[#E2E2E2] hover:bg-[#BEC2C6]"
        >
          Copy
        </Button>
      </div>

      <div className="flex justify-center mt-2">
        <Card className="w-11/12">
          <div className="flex justify-between">
            <p className="text-xs text-[#8C8C8C]">Balance</p>
            <p className="text-xs text-[#8C8C8C]">Paid INV.</p>
            <p className="text-xs text-[#8C8C8C]">Fees</p>
            <p className="text-xs text-[#8C8C8C]">Total</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-xs">${invoiceDataService?.subTotal}</p>
            <p className="text-xs ml-7">${invoiceDataService?.paymentFee}</p>
            <p className="text-xs ">${invoiceDataService?.ourFee}</p>
            <p className="text-xs">${invoiceDataService?.balance}</p>
          </div>
        </Card>
      </div>

      <div className="bg-white m-4 border rounded">
        <div className="ml-5 mt-2">
          <p className="font-bold text-sm">Timeline</p>
        </div>
        <div className={styles.historyTlContainer}>
          {timeline?.map((item: any, index: any) => (
            <ul key={index} className={styles.tl}>
              <li
                className={styles.tlItem}
                ng-repeat="item in retailer_history"
              >
                <div className={styles.timestamp}>
                  {new Date(item.createdAt).toLocaleTimeString()}
                  <br />
                  {new Date(item.createdAt).toLocaleDateString()}
                </div>
                <div className={styles.itemTitle}>{item.action}</div>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center mt-2">
                <div className="w-96">
                    <div className="flex  justify-between">
                        <div className="flex gap-2">
                            <div className="mt-1">
                                <Link className="text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold ">Inactive</p>
                                <p className="text-xs text-[#8C8C8C]">Estimate: 24 hours.</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-[#8C8C8C]">8 June 2022</p>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* <div className="flex justify-center mt-2">
                <Card className="w-11/12">
                    <div className="flex justify-between border rounded p-2">
                        <div className="flex gap-3">
                            <p className="text-sm font-bold m-auto">Mohammed Saad</p>
                            <p className="text-xs text-[#8C8C8C] m-auto ">By PayPal</p>
                        </div>
                        <div>
                            <p className="text-sm font-bold">SAR 1000</p>
                            <p className="text-xs text-[#8C8C8C]">5 June, 7:30 pm</p>
                        </div>
                    </div>
                </Card>
            </div> */}

      {(invoiceDataService?.status === "disapproved" ||
        invoiceDataService?.status === "pending_approval") && (
        <div className="mb-10">
          <div className="mt-2 ml-5 mr-5 flex justify-between">
            <Button
              className="bg-white hover:bg-white text-black pr-14 pl-14"
              onClick={modalCancle.openModal}
            >
              Cancel
            </Button>
            <Button
              className="bg-white hover:bg-white text-blue-600 pr-16 pl-16"
              onClick={() => {
                // router.push({
                //   pathname: "/invoices-page/create-link",
                //   state: {
                //     fixed: invoiceDataService.fixed,
                //     currency: invoiceDataService.currency,
                //     id: invoiceDataService._id,
                //     url: "service/edit/",
                //   },
                // });
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      )}

      {invoiceDataService?.status === "inactive" && (
        <div className="mb-2">
          <div className="mt-2 ml-5 mr-5 flex justify-between">
            <Button
              className="bg-white text-black pr-14 pl-14"
              onClick={changeStateToActive}
            >
              Switch to Active
            </Button>
            <Button className="bg-white text-blue-600 pr-16 pl-16">Edit</Button>
          </div>
        </div>
      )}

      {invoiceDataService?.status === "active" && (
        <div className="mb-2">
          <div className="mt-2 ml-5 mr-5 flex justify-between">
            <Button
              className="bg-white hover:bg-white text-black pr-14 pl-14"
              onClick={changeStateToInactive}
            >
              Deactivate
            </Button>
            <Button className="bg-white hover:bg-white text-blue-600 pr-16 pl-16">
              Edit
            </Button>
          </div>
        </div>
      )}

      {invoiceDataService?.status === "canceled" && (
        <div className="mb-20">
          <div className="mt-2 ml-5 mr-5 flex justify-between">
            <Button
              className="bg-white hover:bg-white text-red pr-14 pl-14"
              onClick={modalDelete.openModal}
            >
              Delete
            </Button>
            <Button className="bg-white hover:bg-white text-blue-600 pr-16 pl-16">
              Edit
            </Button>
          </div>
        </div>
      )}

      <Modal {...modalDelete} className="!w-80">
        <TransferCard
          title=""
          centerTitle={false}
          closeModal={modalDelete.closeModal}
        >
          <div className="mb-5 mt-10">
            <p>Are you sure you want to delete this link?</p>
          </div>
          <div className="flex gap-3">
            <Button
              fullWidth={true}
              className="bg-white hover:bg-white text-black border-gray-light border-2"
              onClick={modalDelete.closeModal}
            >
              No
            </Button>
            <Button fullWidth={true} className="bg-red hover:bg-red">
              Yes
            </Button>
          </div>
        </TransferCard>
      </Modal>

      <Modal {...modalCancle} className="!w-80">
        <TransferCard
          title=""
          centerTitle={false}
          closeModal={modalCancle.closeModal}
        >
          <div className="mb-5 mt-10">
            <p>Are you sure you want to cancel this link?</p>
          </div>
          <div className="flex gap-3">
            <Button
              fullWidth={true}
              className="bg-white hover:bg-white text-black border-gray-light border-2"
              onClick={modalDelete.closeModal}
            >
              Cancle
            </Button>
            <Button fullWidth={true} className="bg-red hover:bg-red">
              Delete
            </Button>
          </div>
        </TransferCard>
      </Modal>
    </Drawel>
  );
};

export default DrawelInvoiceLink;
