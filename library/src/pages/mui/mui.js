import { Button, Checkbox } from "@mui/material"
import ResponsiveAppBar from "./navbar";

const Mui = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (<div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>)
}

export default Mui