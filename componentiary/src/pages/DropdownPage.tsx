import { FC, useState } from "react";
import GenericDropdown from "../components/GenericDropdown";
import { DropdownItem } from "../types/genericComponents";

// creates event handler on the entire document
// function handleClick(this: Document, ev: MouseEvent): void {
//  console.log("ev.target >>>>>>>>>>>>", ev.target);
//  console.log("dom clicked!!");
//}

const dropdown = document.querySelector(".w-80");

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

const handleClick: (this: Document, ev: MouseEvent) => any = (
  ev: MouseEvent
) => {
  assertIsNode(ev.target);

  if (dropdown?.contains(ev.target)) {
    console.log("Inside dropdown");
  } else {
    console.log("outside dropdown");
  }
  console.log("ev.target >>>>>>>>>>>>", ev.target);
  console.log("dom clicked!!");
};

document.addEventListener("click", handleClick, true);

/*
ABOUT EVENT HANDLING

Event handlers go through three phases:

Phase 1 - Capture Phase => Go to the the parent of the element targetted by the event
and see if the parent has an appropriate handler for that event. Then goes up until the all
parents of the target element have been searched for that same event handler

Phase 2 - Target Phase => Go to the exact component that was the target of the event 
and search for an event handler for that action specifically.

Phase 3 - Bubble Phase => Same process as Capture Phase but starting at the children of
the target element and searches in the children of the children until the very bottom of the hierarchy
for an event handler

*/

const DropdownPage: FC = () => {
  const [value, setValue] = useState<DropdownItem>({
    id: "",
    label: "Select ...",
  });

  const items: DropdownItem[] = [
    {
      id: "1",
      label: "How to customize this accordion?",
    },
    {
      id: "2",
      label: "How to customize this page?",
    },
    {
      id: "3",
      label: "How to customize this other stuff?",
    },
  ];

  return (
    <div className="w-fit p-2 border-2 border-solid border-gray-950">
      <h3 className="text-3xl font-bold">Dropdown</h3>
      <div className="flex flex-col gap-3">
        <GenericDropdown
          options={items}
          value={value}
          onChange={(option) => setValue(option)}
        />
      </div>
    </div>
  );
};

export default DropdownPage;
