import Link from "next/link";

const linkStyles =
	"text-primary-text font-medium transition duration-500 block p-2 rounded-md hover:bg-border";

export default function Navbar(){
    return (
        <nav className="fixed w-full bg-[#1A1A1A] shadow-md z-50">
			<div className="flex items-center px-6 py-4">
				<Link
					href="/"
					className="text-2xl font-bold text-primary-text hover:text-primary transition duration-500"
				>
					Journal
				</Link>

				<ul className="flex gap-8 items-center ml-auto">
                    <li>
						<Link href="/entries" className={linkStyles}>
							All Entries
						</Link>
					</li>
					<li>
						<Link href="/profile" className={linkStyles}>
							Profile
						</Link>
					</li>
				</ul>
			</div>
		</nav>
    )
}