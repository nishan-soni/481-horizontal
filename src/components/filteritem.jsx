import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";

const FilterItem = (props) => {
  const { name, options, type } = props;
  return (
    <div className="flex flex-col w-full">
      <div className="text-lg">{name}</div>

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
        <Autocomplete
          fullWidth
          multiple
          id="combo-box-demo"
          options={options}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                key={value}
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => <TextField {...params} fullWidth/>}
        />
      )}

      {/* Drop down menu */}

      {type == "dropdown" && (
        <div>
          <FormControl fullWidth>
            <Select>
              {options.map((item, index) => {
                return <MenuItem key = {item} value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
      )}

      <div className="my-3 border-b-[3px] w-full m-auto"></div>
    </div>
  );
};

export default FilterItem;
