"use client";

import { Copy } from "lucide-react";
import Image from "next/image";
import kakaoPay from "@images/icons/kakaopay.png";
import tossPay from "@images/icons/toss.png";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { isMobile } from "@/lib/utils";

interface AccountItemProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}

export default function AccountItem({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: AccountItemProps) {
  const isMobileDevice = isMobile();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account);
      toast.success("계좌번호가 복사되었습니다.😉😉");
    } catch {
      toast.error("계좌번호 복사에 실패했습니다.🥲🥲");
    }
  };

  return (
    <div className="flex flex-col gap-1 border-b border-[#dfdfdf] py-3 last:border-b-0">
      <p className="flex items-center gap-1">
        <span className="text-[#44484d]">{relation}</span>
        <span className="text-base">{name}</span>
      </p>

      <div className="flex flex-row items-center justify-between">
        <p>
          {bank} {account}
        </p>
        <Button
          onClick={handleCopy}
          className="text-lg text-gray-400"
          size="icon"
          variant="ghost"
        >
          <Copy size={24} />
        </Button>
      </div>

      {isMobileDevice && (kakaopayAccount || tossAccount) && (
        <div className="flex w-full gap-1">
          {kakaopayAccount && (
            <a
              href={kakaopayAccount}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-md border border-[#dfdfdf] bg-white px-3 outline-none transition-colors hover:bg-[#f7f7f7]"
            >
              <Image src={kakaoPay} alt="kakaopay" width={50} height={20} />
            </a>
          )}
          {tossAccount && (
            <a
              href={tossAccount}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-md border border-[#dfdfdf] bg-white px-3 outline-none transition-colors hover:bg-[#f7f7f7]"
            >
              <Image src={tossPay} alt="toss" width={70} height={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
