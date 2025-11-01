import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import darkTheme from "./theme";
import { ThemeProvider } from "@mui/material";
import { Dayjs } from "dayjs";

export default function TimePicker({
	setCustomTime,
}: {
	setCustomTime: (time: Date | null) => void;
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<TimeField
					label="Custom time"
					onChange={(newValue: Dayjs | null) =>
						setCustomTime(newValue ? newValue.toDate() : null)
					}
					slotProps={{
						textField: { size: "small", sx: { width: "20ch" } },
					}}
				/>
			</LocalizationProvider>
		</ThemeProvider>
	);
}
