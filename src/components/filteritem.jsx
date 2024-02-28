import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const FilterItem = (props) => {
  const { name, options } = props;
  return (
    <div className="flex flex-col flex-1 px-6 m-5">
      <div className="text-xl text-gray-400">
        <strong>{name}</strong>
      </div>
      <FormGroup>
        <div className="flex flex-row flex-wrap">
          {options.map((item, index) => {
            return <FormControlLabel key={item} control={<Checkbox />} label={item} />;
          })}
        </div>
      </FormGroup>
      <div className=" border-b-2"></div>
    </div>
  );
};

export default FilterItem;
