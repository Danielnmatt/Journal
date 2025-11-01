export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="bg-elements border-b border-secondary-text/20 sticky top-0 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<h1 className="text-2xl sm:text-3xl font-bold text-accent-teal">
						📔 Journal
					</h1>
				</div>
			</header>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{/* Sidebar */}
					<aside className="lg:col-span-3">
						<div className="bg-elements rounded-lg p-4 space-y-4 sticky top-24">
							<h2 className="text-lg font-semibold text-primary-text mb-4">
								Quick Actions
							</h2>

							<button className="w-full bg-accent-teal text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
								+ New Entry
							</button>

							<nav className="space-y-2">
								<button className="w-full text-left px-4 py-2 rounded-md hover:bg-background transition-colors text-primary-text">
									📅 All Entries
								</button>
								<button className="w-full text-left px-4 py-2 rounded-md hover:bg-background transition-colors text-secondary-text">
									⭐ Favorites
								</button>
								<button className="w-full text-left px-4 py-2 rounded-md hover:bg-background transition-colors text-secondary-text">
									🏷️ Tags
								</button>
								<button className="w-full text-left px-4 py-2 rounded-md hover:bg-background transition-colors text-secondary-text">
									📊 Statistics
								</button>
							</nav>

							<div className="pt-4 border-t border-secondary-text/20">
								<h3 className="text-sm font-semibold text-secondary-text mb-2">
									Recent Tags
								</h3>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-accent-teal/20 text-accent-teal rounded text-xs">
										#goals
									</span>
									<span className="px-2 py-1 bg-accent-lavender/20 text-accent-lavender rounded text-xs">
										#work
									</span>
									<span className="px-2 py-1 bg-accent-amber/20 text-accent-amber rounded text-xs">
										#health
									</span>
								</div>
							</div>
						</div>
					</aside>

					{/* Main Journal Area */}
					<main className="lg:col-span-9">
						{/* Welcome Card */}
						<div className="bg-linear-to-r from-accent-teal/10 to-accent-lavender/10 rounded-lg p-6 sm:p-8 mb-6">
							<h2 className="text-2xl sm:text-3xl font-bold text-primary-text mb-2">
								Welcome back! 👋
							</h2>
							<p className="text-secondary-text">
								Ready to reflect on your day and track your
								progress?
							</p>
						</div>

						{/* Stats Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
							<div className="bg-elements rounded-lg p-4">
								<div className="text-accent-teal text-2xl font-bold">
									42
								</div>
								<div className="text-sm text-secondary-text">
									Total Entries
								</div>
							</div>
							<div className="bg-elements rounded-lg p-4">
								<div className="text-accent-lavender text-2xl font-bold">
									7
								</div>
								<div className="text-sm text-secondary-text">
									Day Streak
								</div>
							</div>
							<div className="bg-elements rounded-lg p-4">
								<div className="text-accent-amber text-2xl font-bold">
									12
								</div>
								<div className="text-sm text-secondary-text">
									This Month
								</div>
							</div>
						</div>

						{/* Timeline Header */}
						<div className="mb-6">
							<h2 className="text-xl font-bold text-primary-text mb-2">
								Your Journal Timeline
							</h2>
							<p className="text-sm text-secondary-text">
								Scroll through your journey month by month
							</p>
						</div>

						{/* Horizontal Month Timeline */}
						<div className="relative mb-8">
							{/* Scroll Indicator */}
							<div className="flex justify-between items-center mb-4">
								<div className="text-sm text-secondary-text">
									← Scroll to explore →
								</div>
							</div>

							{/* Scrollable Timeline Container */}
							<div className="overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
								<div className="flex gap-6 min-w-max">
									{/* October 2025 */}
									<div className="snap-start shrink-0 w-[320px] sm:w-[380px]">
										<div className="bg-elements rounded-lg p-4 mb-4 sticky left-4">
											<h3 className="text-lg font-bold text-primary-text">
												October 2025
											</h3>
											<p className="text-sm text-secondary-text">
												12 entries
											</p>
										</div>
										<div className="space-y-4">
											{/* Entry Card */}
											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-teal">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Productive Monday
														</h4>
														<p className="text-xs text-secondary-text">
															Oct 30, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-teal/20 text-accent-teal rounded text-xs">
														#work
													</span>
													<span className="px-2 py-0.5 bg-accent-amber/20 text-accent-amber rounded text-xs">
														#goals
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Today was incredibly
													productive. Completed the
													project proposal and had a
													great meeting with the team.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-lavender">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Sunday Reflections
														</h4>
														<p className="text-xs text-secondary-text">
															Oct 29, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-lavender/20 text-accent-lavender rounded text-xs">
														#personal
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Spent quality time with
													family today. Sometimes it's
													important to slow down and
													appreciate the simple
													moments.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-amber">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Fitness Goals Update
														</h4>
														<p className="text-xs text-secondary-text">
															Oct 27, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-amber/20 text-accent-amber rounded text-xs">
														#health
													</span>
													<span className="px-2 py-0.5 bg-accent-teal/20 text-accent-teal rounded text-xs">
														#goals
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Hit a new personal record at
													the gym today! Consistency
													is paying off.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-teal">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Weekend Plans
														</h4>
														<p className="text-xs text-secondary-text">
															Oct 25, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-lavender/20 text-accent-lavender rounded text-xs">
														#personal
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Looking forward to a
													relaxing weekend. Planning
													to catch up on reading and
													go hiking.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>
										</div>
									</div>

									{/* September 2025 */}
									<div className="snap-start shrink-0 w-[320px] sm:w-[380px]">
										<div className="bg-elements rounded-lg p-4 mb-4">
											<h3 className="text-lg font-bold text-primary-text">
												September 2025
											</h3>
											<p className="text-sm text-secondary-text">
												18 entries
											</p>
										</div>
										<div className="space-y-4">
											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-lavender">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Quarter End Review
														</h4>
														<p className="text-xs text-secondary-text">
															Sep 30, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-teal/20 text-accent-teal rounded text-xs">
														#work
													</span>
													<span className="px-2 py-0.5 bg-accent-amber/20 text-accent-amber rounded text-xs">
														#goals
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Reflecting on Q3 progress.
													Achieved most of my goals
													but there's room for
													improvement.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-amber">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Morning Routine
														</h4>
														<p className="text-xs text-secondary-text">
															Sep 28, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-amber/20 text-accent-amber rounded text-xs">
														#health
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Started waking up earlier.
													The morning routine is
													really helping me stay
													focused.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-teal">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Team Building Day
														</h4>
														<p className="text-xs text-secondary-text">
															Sep 20, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-teal/20 text-accent-teal rounded text-xs">
														#work
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Great team activities today.
													Building stronger
													connections with colleagues.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>
										</div>
									</div>

									{/* August 2025 */}
									<div className="snap-start shrink-0 w-[320px] sm:w-[380px]">
										<div className="bg-elements rounded-lg p-4 mb-4">
											<h3 className="text-lg font-bold text-primary-text">
												August 2025
											</h3>
											<p className="text-sm text-secondary-text">
												15 entries
											</p>
										</div>
										<div className="space-y-4">
											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-lavender">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															Summer Vacation
														</h4>
														<p className="text-xs text-secondary-text">
															Aug 15, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-lavender/20 text-accent-lavender rounded text-xs">
														#personal
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Amazing vacation with
													family. Recharged and ready
													to get back to work next
													week.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-amber">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															New Skill Learning
														</h4>
														<p className="text-xs text-secondary-text">
															Aug 10, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-teal/20 text-accent-teal rounded text-xs">
														#goals
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Started learning a new
													programming language.
													Excited about the
													possibilities.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>
										</div>
									</div>

									{/* July 2025 - Account Start */}
									<div className="snap-start shrink-0 w-[320px] sm:w-[380px]">
										<div className="bg-elements rounded-lg p-4 mb-4">
											<h3 className="text-lg font-bold text-primary-text">
												July 2025
											</h3>
											<p className="text-sm text-secondary-text">
												8 entries • Journey started 🎉
											</p>
										</div>
										<div className="space-y-4">
											<article className="bg-elements rounded-lg p-4 hover:shadow-lg transition-shadow border-l-4 border-accent-teal">
												<div className="flex items-start justify-between mb-2">
													<div>
														<h4 className="font-semibold text-primary-text">
															First Entry
														</h4>
														<p className="text-xs text-secondary-text">
															Jul 15, 2025
														</p>
													</div>
													<button className="text-secondary-text hover:text-accent-teal">
														⭐
													</button>
												</div>
												<div className="flex gap-1 mb-2">
													<span className="px-2 py-0.5 bg-accent-teal/20 text-accent-teal rounded text-xs">
														#goals
													</span>
												</div>
												<p className="text-sm text-primary-text line-clamp-3 mb-3">
													Starting my accountability
													journal today. Excited to
													track my progress and
													growth.
												</p>
												<button className="text-xs text-accent-teal hover:underline">
													Read more →
												</button>
											</article>

											<div className="bg-elements/50 rounded-lg p-4 border-2 border-dashed border-secondary-text/30 text-center">
												<p className="text-sm text-secondary-text">
													🎉 Your journey began here
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Scroll Hint */}
							<div className="text-center mt-4">
								<p className="text-xs text-secondary-text">
									Swipe or use arrow keys to navigate through
									months
								</p>
							</div>
						</div>

						{/* Recent Entries */}
						<div className="space-y-4">
							<h2 className="text-xl font-bold text-primary-text mb-4">
								Recent Entries
							</h2>

							{/* Entry Card 1 */}
							<article className="bg-elements rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
								<div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
									<div>
										<h3 className="text-lg font-semibold text-primary-text">
											Productive Monday
										</h3>
										<p className="text-sm text-secondary-text">
											October 30, 2025
										</p>
									</div>
									<div className="flex gap-2">
										<span className="px-2 py-1 bg-accent-teal/20 text-accent-teal rounded text-xs h-fit">
											#work
										</span>
										<span className="px-2 py-1 bg-accent-amber/20 text-accent-amber rounded text-xs h-fit">
											#goals
										</span>
									</div>
								</div>
								<p className="text-primary-text mb-4 line-clamp-3">
									Today was incredibly productive. Completed
									the project proposal and had a great meeting
									with the team. Feeling accomplished and
									motivated for tomorrow. Need to remember to
									take more breaks though.
								</p>
								<div className="flex items-center justify-between text-sm">
									<span className="text-secondary-text">
										5 min read
									</span>
									<button className="text-accent-teal hover:underline">
										Read more →
									</button>
								</div>
							</article>

							{/* Entry Card 2 */}
							<article className="bg-elements rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
								<div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
									<div>
										<h3 className="text-lg font-semibold text-primary-text">
											Sunday Reflections
										</h3>
										<p className="text-sm text-secondary-text">
											October 29, 2025
										</p>
									</div>
									<div className="flex gap-2">
										<span className="px-2 py-1 bg-accent-lavender/20 text-accent-lavender rounded text-xs h-fit">
											#personal
										</span>
									</div>
								</div>
								<p className="text-primary-text mb-4 line-clamp-3">
									Spent quality time with family today.
									Sometimes it's important to slow down and
									appreciate the simple moments. Grateful for
									the people in my life.
								</p>
								<div className="flex items-center justify-between text-sm">
									<span className="text-secondary-text">
										3 min read
									</span>
									<button className="text-accent-teal hover:underline">
										Read more →
									</button>
								</div>
							</article>

							{/* Entry Card 3 */}
							<article className="bg-elements rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
								<div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
									<div>
										<h3 className="text-lg font-semibold text-primary-text">
											Fitness Goals Update
										</h3>
										<p className="text-sm text-secondary-text">
											October 27, 2025
										</p>
									</div>
									<div className="flex gap-2">
										<span className="px-2 py-1 bg-accent-amber/20 text-accent-amber rounded text-xs h-fit">
											#health
										</span>
										<span className="px-2 py-1 bg-accent-teal/20 text-accent-teal rounded text-xs h-fit">
											#goals
										</span>
									</div>
								</div>
								<p className="text-primary-text mb-4 line-clamp-3">
									Hit a new personal record at the gym today!
									Consistency is paying off. Planning to
									maintain this momentum and set new targets
									for next month.
								</p>
								<div className="flex items-center justify-between text-sm">
									<span className="text-secondary-text">
										4 min read
									</span>
									<button className="text-accent-teal hover:underline">
										Read more →
									</button>
								</div>
							</article>
						</div>
					</main>
				</div>
			</div>

			{/* Mobile Bottom Navigation */}
			<nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-elements border-t border-secondary-text/20 px-4 py-3">
				<div className="flex justify-around items-center">
					<button className="flex flex-col items-center text-accent-teal">
						<span className="text-xl">📅</span>
						<span className="text-xs mt-1">Entries</span>
					</button>
					<button className="flex flex-col items-center text-secondary-text">
						<span className="text-xl">⭐</span>
						<span className="text-xs mt-1">Favorites</span>
					</button>
					<button className="w-12 h-12 bg-accent-teal text-white rounded-full flex items-center justify-center text-2xl -mt-6 shadow-lg">
						+
					</button>
					<button className="flex flex-col items-center text-secondary-text">
						<span className="text-xl">🏷️</span>
						<span className="text-xs mt-1">Tags</span>
					</button>
					<button className="flex flex-col items-center text-secondary-text">
						<span className="text-xl">📊</span>
						<span className="text-xs mt-1">Stats</span>
					</button>
				</div>
			</nav>

			{/* Bottom spacing for mobile nav */}
			<div className="lg:hidden h-20"></div>
		</div>
	);
}
