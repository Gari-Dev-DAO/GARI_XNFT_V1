import { useFilterToggle } from "../hooks/useFilterToggle";
import Button from "./Button";

const FilterButton = ({ trait }) => {
  const { filter, toggle, addFilter, removeFilter } = useFilterToggle();
  return (
    <Button
      onPress={toggle ? () => addFilter(trait) : () => removeFilter(trait)}
      title={trait}
    />
  );
};

export default FilterButton;
