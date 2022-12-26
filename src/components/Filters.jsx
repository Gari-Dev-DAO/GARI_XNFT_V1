import FilterButton from "./FilterButton";
import ResponsiveBox from "./ResponsiveBox";

const Filters = ({ traits }) => {
  return (
    <ResponsiveBox>
      {traits?.map((trait,index) => {
        return <FilterButton trait={trait} key={index}/>;
      })}
   </ResponsiveBox>
  );
};

export default Filters;