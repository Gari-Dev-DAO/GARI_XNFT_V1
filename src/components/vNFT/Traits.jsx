import ResponsiveBox from "../Containers/ResponsiveContainer";
import Button from "../Buttons/Button";

const Traits = ({ attributes }) => {
  return (
     <ResponsiveBox style={{gap:10}}>
      {attributes?.map((attribute, index) => {
          const { value } = attribute;
          return <Button key={index} title={value} />
        })}
   </ResponsiveBox>
  );
};


export default Traits;
