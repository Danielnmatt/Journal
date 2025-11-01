"use client";
import React, { useState, useRef, useEffect } from "react";
import { TextareaAutosize } from "@mui/material";
import CustomCard from "./components/journalentry";
import DateTimePicker from "./components/datetimepicker";

type JournalEntry = {
	date: string;
	time: string;
	content: string;
};

export default function Home() {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [entries, setEntries] = useState<JournalEntry[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const [customDate, setCustomDate] = useState<Date | null>(null);
	const [customTime, setCustomTime] = useState<Date | null>(null);

	useEffect(() => {
		const savedEntries = localStorage.getItem("journalEntries");
		if (savedEntries) {
			try {
				setEntries(JSON.parse(savedEntries));
			} catch (error) {
				console.error("Failed to parse saved entries:", error);
			}
		}
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem("journalEntries", JSON.stringify(entries));
		}
	}, [entries, isLoaded]);

	const handleSubmit = () => {
		const value = textAreaRef.current?.value;
		if (!value) return;
		
		const now = new Date();
		const usedDate = customDate || now;
		const usedTime = customTime || now;

		const entry: JournalEntry = {
			date: usedDate.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
			time: usedTime.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "2-digit",
				hour12: true,
			}),
			content: value,
		};

		setEntries([entry, ...entries]);
		if (textAreaRef.current) {
			textAreaRef.current.value = "";
		}
	};

	const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === textAreaRef.current) {
			return;
		}
		textAreaRef.current?.focus();
		textAreaRef.current?.select();
	};

	const handleDeleteDate = (date: string) => {
		setEntries(entries.filter((entry) => entry.date !== date));
	};

	const groupedEntries = entries.reduce((acc, entry) => {
		if (!acc[entry.date]) {
			acc[entry.date] = [];
		}
		acc[entry.date].push(entry);
		return acc;
	}, {} as Record<string, JournalEntry[]>);

	return (
		<div className="min-h-full w-full bg-background [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-accent-blue [&::-webkit-scrollbar-thumb]:rounded-full">
			{/* Main */}
			<div className="h-screen w-full flex items-center justify-center flex-col gap-4 pt-12">
				<div className="relative w-8/12">
					<div className="">
						<DateTimePicker setCustomDate={setCustomDate} setCustomTime={setCustomTime}/>
					</div>

					<h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
						Write Your Thoughts Today
					</h1>
				</div>
				{/* Entry Submission textarea */}
				<div
					onClick={handleParentClick}
					className="shadow-sm shadow-white min-h-[50%] max-h-[60%] h-6/12 w-8/12 rounded-2xl backdrop-blur-2xl overflow-hidden hover:cursor-text"
				>
					<TextareaAutosize
						ref={textAreaRef}
						placeholder="Today I feel..."
						className="h-full w-full text-primary-text placeholder-secondary-text rounded-2xl p-2 resize-none outline-none overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-accent-blue [&::-webkit-scrollbar-thumb]:rounded-full"
						maxRows={20}
						style={{ maxHeight: "100%" }}
					/>
				</div>
				<button
					onClick={handleSubmit}
					className="text-primary-text font-medium transition duration-500 block p-2 rounded-md hover:bg-border hover:cursor-pointer"
				>
					Submit Entry
				</button>
			</div>
			<div className="w-10/12 px-4 pb-8 space-y-4 justify-self-center">
				{Object.entries(groupedEntries).map(([date, dayEntries]) => (
					<CustomCard
						key={date}
						date={date}
						entries={dayEntries}
						onDelete={handleDeleteDate}
					/>
				))}
			</div>
		</div>
	);
}
