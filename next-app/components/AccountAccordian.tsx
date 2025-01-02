import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface AccountAccordianProps {
  title: string;
  children: React.ReactNode;
}

const AccountAccordian = ({ title, children }: AccountAccordianProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto w-full max-w-[400px]"
    >
      <AccordionItem
        value="item-1"
        className="rounded-md border-none bg-secondary"
      >
        <AccordionTrigger className="font-santokki p-4 hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="rounded-b-md border border-t-0 border-secondary bg-white p-4 text-left">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccountAccordian;
