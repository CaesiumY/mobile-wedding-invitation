import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

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
        className="bg-secondary rounded-md border-none"
      >
        <AccordionTrigger className="font-dodum p-4 font-bold hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="border-secondary rounded-b-md border border-t-0 bg-white p-4 text-left">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccountAccordian;
