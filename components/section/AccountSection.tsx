import data from "@/data.json";
import { Heart } from "lucide-react";
import AccountAccordian from "../AccountAccordian";
import AccountItem from "../AccountItem";
import SectionTitle from "../common/SectionTitle";
import ScrollFadeIn from "../motion/ScrollFadeIn";

const AccountSection = () => {
  const { hostInfo } = data;

  return (
    <ScrollFadeIn>
      <section className="flex flex-col items-center gap-8">
        <SectionTitle title="마음 전하실 곳" icon={<Heart strokeWidth={3} />} />

        <div className="w-full space-y-5">
          {hostInfo.map((host, index) => (
            <AccountAccordian key={index} title={host.host}>
              {host.accountInfo.map(
                ({
                  account,
                  bank,
                  name,
                  relation,
                  kakaopayAccount,
                  tossAccount,
                }) => (
                  <AccountItem
                    key={name + account}
                    account={account}
                    bank={bank}
                    name={name}
                    relation={relation}
                    kakaopayAccount={kakaopayAccount}
                    tossAccount={tossAccount}
                  />
                ),
              )}
            </AccountAccordian>
          ))}
        </div>
      </section>
    </ScrollFadeIn>
  );
};

export default AccountSection;
