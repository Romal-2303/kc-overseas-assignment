import classes from "./Dropdown.module.scss";

interface DropdownProps {
  setvalue: (value: string) => void;
  dropdownItems: string[];
  position: "top" | "bottom";
}

const Dropdown = ({
  setvalue,
  dropdownItems,
  position = "bottom",
}: DropdownProps) => {
  return (
    <div className={`${classes.dropdownContainer} ${classes[position]}`}>
      {dropdownItems.map((el: string, index: number) => (
        <div key={index} onClick={() => setvalue(el)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
