import ResponsiveBox from "./ResponsiveBox";
import Button from "./Button";

const Traits = ({ attributes }) => {
  return (
     <ResponsiveBox>
      {attributes?.map((attribute, index) => {
          const { value } = attribute;
          return <Button key={index} title={value} />
        })}
   </ResponsiveBox>
  );
};


export default Traits;
