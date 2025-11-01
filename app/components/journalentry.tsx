import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type JournalEntry = {
	date: string;
	time: string;
	content: string;
};

interface CustomCardProps {
	date: string;
	entries: JournalEntry[];
	onDelete: (date: string) => void;
}

export default function CustomCard({
	date,
	entries,
	onDelete,
}: CustomCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const sortedEntries = [...entries].reverse();

	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation();
		onDelete(date);
	};

	return (
		<Card className="w-full text-primary-text">
			<div
				className="border-2 border-accent-gray hover:cursor-pointer hover:border-white transition duration-500"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<CardContent className="bg-elements text-primary-text-muted">
					<div className="flex justify-between items-center mb-4 border-b-2">
						<h1 className="font-semibold">{date}</h1>
						<DeleteForeverIcon
							onClick={handleDelete}
							className="hover:text-red-500 transition duration-300"
						/>
					</div>
					<div className="space-y-4">
						{(isExpanded ? sortedEntries : [sortedEntries[0]]).map(
							(entry, index) => (
								<div key={index}>
									{index > 0 && (
										<div className="border-t border-accent-gray my-4"></div>
									)}
									<div className="text-sm text-accent-blue mb-2">
										{entry.time}
									</div>
									<p
										className={`whitespace-pre-wrap wrap-break-word ${
											isExpanded ? "" : "line-clamp-3"
										}`}
									>
										{entry.content}
									</p>
								</div>
							)
						)}
					</div>
					{!isExpanded &&
						(entries.length > 1 ||
							entries.some((e) => e.content.length > 150)) && (
							<span className="text-accent-blue text-sm mt-2 block">
								Click to expand...
							</span>
						)}
				</CardContent>
			</div>
		</Card>
	);
}
