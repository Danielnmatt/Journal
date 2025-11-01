import Calendar from "./datepicker";
import TimePicker from "./timepicker";

export default function DateTimePicker({
	setCustomDate,
	setCustomTime,
}: {
	setCustomDate: (date: Date | null) => void;
	setCustomTime: (time: Date | null) => void;
}) {
	return (
		<div className="flex flex-col gap-2">
			<Calendar setCustomDate={setCustomDate}></Calendar>
			<TimePicker setCustomTime={setCustomTime}></TimePicker>
		</div>
	);
}
