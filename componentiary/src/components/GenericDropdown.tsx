import {
  FC,
  MouseEvent as MouseEventReact,
  useEffect,
  useRef,
  useState,
} from "react";
import { DropdownItem } from "../types/genericComponents";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

// creates event handler on the entire document
// function handleClick(this: Document, ev: MouseEvent): void {
//  console.log("ev.target >>>>>>>>>>>>", ev.target);
//  console.log("dom clicked!!");
//}

export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

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


TROUBLESHOOTING EVENT HANDLER TIPS

performance.now() - Excellent way to figure out the current measure of time with high precision. This is 
the amount of miliseconds since the page loaded
*/

export interface IGenericDropdown {
  onChange: (id: DropdownItem) => void;
  options: DropdownItem[];
  value: DropdownItem;
}

const GenericDropdown: FC<IGenericDropdown> = ({
  options,
  onChange,
  value,
}) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick: (this: Document, ev: MouseEvent) => any = (
      ev: MouseEvent
    ) => {
      if (!divEl.current) {
        return;
      }

      assertIsNode(ev.target);

      if (!divEl.current.contains(ev.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const showOptions: JSX.Element[] = options.map((option, index) => (
    <div
      key={index}
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={(event) => handleDropdownClick(event, option)}
    >
      {option.label}
    </div>
  ));

  const handleToggleClick = (event: MouseEventReact<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setToggle((current) => !current);
  };

  const handleDropdownClick = (
    event: MouseEventReact<HTMLDivElement>,
    option: DropdownItem
  ) => {
    event.preventDefault();
    event.stopPropagation();

    onChange(option);
    setToggle((current) => !current);
  };

  return (
    <div ref={divEl} className="w-80 relative ">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleToggleClick}
      >
        {value.label}
        {toggle ? <GoChevronDown /> : <GoChevronLeft />}{" "}
      </div>
      {toggle && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {showOptions}
        </div>
      )}
    </div>
  );
};

export default GenericDropdown;
