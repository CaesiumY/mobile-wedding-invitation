import data from "@/data.json";
import { Heart } from "lucide-react";
import AccountItem from "@/features/account/components/AccountItem";
import SectionTitle from "@/components/primitives/SectionTitle";
import AccountAccordian from "@/components/AccountAccordian";
import ScrollFadeIn from "@/components/motion/ScrollFadeIn";

const AccountSection = () => {
  const { hostInfo } = data;

  return (
    <ScrollFadeIn>
      <section className="flex flex-col items-center gap-8">
        <SectionTitle title="마음 전하실 곳" icon={<Heart strokeWidth={3} />} />

        <div className="w-full space-y-5">
          {hostInfo.map((host, index) => (
            <AccountAccordian key={host.host} title={host.host}>
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
