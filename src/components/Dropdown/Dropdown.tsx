import classes from "./Dropdown.module.scss";

interface DropdownProps {
  dropdownItems: string[];
  position: "top" | "bottom";
}

const Dropdown = ({ dropdownItems, position = "bottom" }: DropdownProps) => {
  return (
    <div className={`${classes.dropdownContainer} ${classes[position]}`}>
      {dropdownItems.map((el: string, index: number) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
};

export default Dropdown;
