import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function BasicDatePicker() {
    const [value, setValue] = React.useState(null);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                inputFormat="tt.mm.yyyy"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            inputProps={{
                                ...params.inputProps,
                                placeholder: "tt.mm.jjjj"
                            }}
                        />
                    );
                }}
            />
        </LocalizationProvider>
    );
}
