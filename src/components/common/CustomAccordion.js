import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const CustomAccordion = ({ list }) => {
  return (
    <Accordion
      type="single"
      className="bg-[var(--card)] px-4 pb-1 rounded-xl"
      defaultValue={list[0].id}
      collapsible
    >
      {list.map((item, idx) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className={
            "border-gray-700 " + (idx === list.length - 1 ? "border-none" : "")
          }
        >
          <AccordionTrigger className="text-lg hover:no-underline accordion-custom-trigger [&[data-state=open]>.accordion-plus]:hidden [&[data-state=closed]>.accordion-minus]:hidden">
            <div className="max-w-[92%]"> {item.question}</div>
            <Plus
              size={17}
              color="rgba(254, 177, 121, 1)"
              className=" accordion-plus duration-1000"
            />
            <Minus
              size={17}
              color="rgba(254, 177, 121, 1)"
              className=" accordion-minus duration-1000"
            />
          </AccordionTrigger>
          <AccordionContent className="text-xs text-[var(--light-gray)]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
