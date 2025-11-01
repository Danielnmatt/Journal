import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import darkTheme from "./theme";
import { ThemeProvider } from "@mui/material";
import { Dayjs } from "dayjs";

export default function Calendar({
	setCustomDate,
}: {
	setCustomDate: (date: Date | null) => void;
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label="Custom Date"
					onChange={(newValue: Dayjs | null) =>
						setCustomDate(newValue ? newValue.toDate() : null)
					}
					slotProps={{
						textField: { size: "small", sx: { width: "20ch" } },
					}}
				/>
			</LocalizationProvider>
		</ThemeProvider>
	);
}
