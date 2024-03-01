import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const FilterItem = (props) => {
  const { name, options, type } = props;
  return (
    <div className="flex flex-col flex-1 px-6 m-5">
      <div className="text-lg">
        <strong>{name}</strong>
      </div>

      {/*Multi select filter*/}
      {type == "multi-select" && (
        <FormGroup>
          <div className="flex flex-row flex-wrap my-3">
            {options.map((item, index) => {
              return (
                <FormControlLabel
                  key={item}
                  control={<Checkbox />}
                  label={item}
                />
              );
            })}
          </div>
        </FormGroup>
      )}

      {/* Combo box filter */}

      {type == "combobox" && (
        <div>
          <div></div>
        </div>
      )}

      {/* Drop down menu */}

      {type == "dropdown" && (
        <div>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Year Taken</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}

      <div className=" border-b-[3px]"></div>
    </div>
  );
};

export default FilterItem;
