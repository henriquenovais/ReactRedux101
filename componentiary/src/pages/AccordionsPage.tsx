import { FC } from "react";
import GenericAccordion from "../components/GenericAccordion";
import { AccordionItem } from "../types/genericComponents";

const AccordionsPage: FC = () => {
  const items: AccordionItem[] = [
    {
      id: "1",
      header: "How to customize this accordion?",
      description:
        "Insert an array of objects into this generic component with item, header and description",
    },
    {
      id: "2",
      header: "How to customize this page?",
      description:
        "Insert an array of objects into this generic component with item, header and description",
    },
    {
      id: "3",
      header: "How to customize this other stuff?",
      description:
        "Insert an array of objects into this generic component with item, header and description",
    },
  ];

  return (
    <div className="w-fit p-2 border-2 border-solid border-gray-950">
      <h3 className="text-3xl font-bold">Accordions</h3>
      <GenericAccordion items={items} />
    </div>
  );
};

export default AccordionsPage;
