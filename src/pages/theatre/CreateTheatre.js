import * as React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

export default function CreateTheatreForm() {
  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [isPcr, setIsPcr] = React.useState('');


  const handleChange = (id, value) => {
    switch (id) {
      case 'isPcr':
        setIsPcr(!value.target.checked);
        break;
      default:
        break;
    }
    console.log(isPcr);
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              required
              id="date"
              name="date"
              label="Date"
              autoComplete="given-name"
              variant="outlined"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="patient_name"
              name="patient_name"
              label="Patient Name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bht_number"
              name="bht_number"
              label="BHT Number"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="age"
              name="age"
              label="Age"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="gender"
              name="gender"
              label="Gender"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="surgery"
              name="surgery"
              label="Surgery"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="con_surgeon"
              name="con_surgeon"
              label="Conducted Surgeon"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="con_anaesthetic"
              name="con_anaesthetic"
              label="Conducted Anaesthetic"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="theatre_no"
              name="theatre_no"
              label="Theatre Number"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="clinic_no"
              name="clinic_no"
              label="Clinic Number"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox defaultChecked onChange={(e) => handleChange('isPcr', e)}
            />} label="PCR" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="RAT" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Fasting" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Echo" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="PCR" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
