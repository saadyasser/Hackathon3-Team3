import { Button, Card, Input, Modal, TransferCard } from "components";
import Canceled from "components/svg/Canceled";
import Disapproved from "components/svg/Disapproved";
import Link from "components/svg/Link";
import Paid from "components/svg/Paid";
import PendingApproval from "components/svg/PendingApproval";
import Warning from "components/svg/Warning";
import { API_SERVICES_URLS } from "data";
import useModal from "hooks/useModal";
import useSwrFetch from "hooks/useSwrFetch";
import Image from "next/image";
import { useRef, useState } from "react";
import Drawel from "../Drawel";
import styles from "./style.module.css";

const DrawelInvoice: any = (): any => {
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
    API_SERVICES_URLS.CLIENT.INVOICE_DETAIL("641c6d38e524b0786800c225"),
    {
      method: "GET",
      headers: {},
    }
  );

  const invoiceData = data?.data?.invoice;
  const fixedInvoice = invoiceData?.fixed;
  const timeline = invoiceData?.history;

  // console.log(invoiceData);

  return (
    <Drawel>
      {invoiceData?.status === "disapproved" && (
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
                {invoiceData?.status === "pending_approval" ? (
                  <PendingApproval />
                ) : invoiceData?.status === "canceled" ? (
                  <Canceled />
                ) : invoiceData?.status === "warning" ? (
                  <PendingApproval />
                ) : invoiceData?.status === "Disapproved" ? (
                  <Disapproved />
                ) : invoiceData?.status === "Inactive" ? (
                  <Link />
                ) : invoiceData?.status === "active" ? (
                  <Link />
                ) : (
                  <Paid />
                )}
              </div>
              <div>
                <p className="text-xs text-[#DAA545] font-bold">
                  {invoiceData?.status}
                </p>
                <p className="text-xs text-[#8C8C8C]">Estimate: 24 hours.</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#8C8C8C]">
                {new Date(invoiceData?.createdAt).toLocaleDateString()}
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
          {(invoiceData?.status === "pending_approval" ||
            invoiceData?.status === "paid") && (
            <div className="flex flex-col mr-4 pt-2">
              <div className="flex justify-end gap-5">
                <p className="text-[#8C8C8C] text-xs">Subtotal</p>
                <p className="text-[#8C8C8C] text-xs">
                  ${invoiceData?.subTotal}
                </p>
              </div>
              <div className="flex justify-end gap-14">
                <p className="text-[#8C8C8C] text-xs">Fees</p>
                <p className="text-[#8C8C8C] text-xs">${invoiceData?.ourFee}</p>
              </div>
              <div className="flex justify-end gap-9">
                <p className="font-bold">Total</p>
                <p className="font-bold">${invoiceData?.subTotal}</p>
              </div>
            </div>
          )}
        </div>
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
                  {/* Today */}
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

      {/* <div className="flex justify-between mt-2 mr-8 ml-8 gap-2">
                <div className="mt-7">
                    <Input type="text" name="link" ref={inputRef} className="w-80" />
                </div>
                <Button onClick={handleCopy} className="mt-7 mb-7 bg-[#BEC2C6] border border-[#E2E2E2] hover:bg-[#BEC2C6]">Copy</Button>
            </div> */}

      {/* <div className="flex justify-center mt-2">
                <Card className="w-11/12">
                    <div className="flex justify-between">
                        <p className="text-xs text-[#8C8C8C]">Balance</p>
                        <p className="text-xs text-[#8C8C8C]">Paid INV.</p>
                        <p className="text-xs text-[#8C8C8C]">Fees</p>
                        <p className="text-xs text-[#8C8C8C]">Total</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs">$0.00</p>
                        <p className="text-xs">0</p>
                        <p className="text-xs">0</p>
                        <p className="text-xs">$0.00</p>
                    </div>

                </Card>
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

      {showInvoice &&
        (invoiceData?.status === "disapproved" ||
          invoiceData?.status === "pending_approval" ||
          invoiceData?.status === "paid" ||
          invoiceData?.status === "sent") && (
          <div className="flex justify-center mt-2 ">
            <Card className="w-11/12 ">
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <p className="font-bold text-xs">Invoice</p>
                  <p className="text-xs">{invoiceData?.invoiceNo}</p>
                </div>
                <div>
                  <Image
                    src="/assets/img/logo.png"
                    alt="logo"
                    width="40"
                    height="40"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-xs text-[#797979] mb-2">From</p>
                  <p className="text-xs font-bold">
                    {invoiceData?.client?.fullName || "Talents Valley LLC"}{" "}
                  </p>
                  <p className="text-xs text-[#797979]">
                    {invoiceData?.client?.address?.country}
                  </p>
                  <p className="text-xs text-[#797979]">
                    {invoiceData?.client?.mobile}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#797979] mb-2">Bill To</p>
                  <p className="text-xs font-bold">
                    {invoiceData?.freelancer?.firstName}{" "}
                    {invoiceData?.freelancer?.lastName}
                  </p>
                  <p className="text-xs text-[#797979] mb-2">
                    {invoiceData?.freelancer.email}
                  </p>
                  <p className="text-xs text-[#797979]">Issue Date</p>
                  <p className="text-xs font-bold">July 27 ,2022</p>
                </div>
              </div>
              {fixedInvoice?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex justify-between mt-4 border-b-2 pb-2"
                >
                  <div>
                    <p className="text-[#797979] text-xs mb-2">Service</p>
                    <p className="font-bold text-xs">{item?.itemName}</p>
                    <p className="text-[#797979] text-xs">
                      {item?.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#797979] text-xs mb-2">Amount</p>
                    <p className="font-bold text-xs">${item?.price}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col mr-4 pt-2">
                <div className="flex justify-end gap-5">
                  <p className="text-[#8C8C8C] text-xs text-left">Subtotal</p>
                  <p className="text-[#8C8C8C] text-xs">
                    ${invoiceData?.subTotal}
                  </p>
                </div>
                <div className="flex justify-end gap-14">
                  <p className="text-[#8C8C8C] text-xs text-left">Fees</p>
                  <p className="text-[#8C8C8C] text-xs">
                    ${invoiceData?.ourFee}
                  </p>
                </div>
                <div className="flex justify-end gap-9">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">${invoiceData?.subTotal}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

      {invoiceData?.status === "pending_approval" && (
        <div className="mb-2">
          <div className="mt-2 ml-5">
            <button className="text-blue-600" onClick={toggleInvoice}>
              {showInvoice ? "Hide Invoice" : "Show Invoice"}
            </button>
          </div>

          <div className="mt-2 ml-5 mr-5 flex justify-between mb-10">
            <Button
              className="bg-white text-black pr-14 pl-14"
              onClick={modalCancle.openModal}
            >
              Cancle
            </Button>
            <Button className="bg-white text-blue-600 pr-16 pl-16">Edit</Button>
          </div>
        </div>
      )}

      {(invoiceData?.status === "sent" ||
        invoiceData?.status === "disapproved") && (
        <div className="mb-10">
          <div className="mt-2 ml-5 mr-5 flex justify-between">
            <Button
              className="bg-white text-red pr-14 pl-14"
              onClick={modalDelete.openModal}
            >
              Delete
            </Button>
            <Button className="bg-white text-blue-600 pr-16 pl-16">Edit</Button>
          </div>
        </div>
      )}

      <Modal {...modalDelete} className="!w-80">
        <TransferCard centerTitle={false} closeModal={modalDelete.closeModal}>
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
        <TransferCard centerTitle={false} closeModal={modalCancle.closeModal}>
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

export default DrawelInvoice;
