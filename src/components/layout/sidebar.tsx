import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	LayoutDashboard,
	BookOpen,
	BookMarked,
	Brain,
	Settings,
	LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { Link, useLocation } from "@tanstack/react-router";

const navItems = [
	{ icon: LayoutDashboard, label: "Dashboard", link: "/" },
	{ icon: BookOpen, label: "My Units", link: "/units" },
	{ icon: Brain, label: "Review", link: "/review" },
	{ icon: BookMarked, label: "Dictionary", link: "/dictionary" },
	{ icon: Settings, label: "Settings", link: "/settings" },
];

export function DashboardSidebar() {
	const location = useLocation(); //

	const handleLogout = () => {
		toast.success("Logged out", {
			description: "See you next time!",
		});
	};

	return (
		<aside className="flex h-full w-64 shrink-0 flex-col border-r border-border bg-card p-4 transition-colors duration-200">
			{/* Logo */}
			<div className="mb-8 flex items-center gap-3 px-2">
				<div className="flex size-10 items-center justify-center rounded-xl bg-primary shadow-sm">
					<BookOpen className="size-5 text-primary-foreground" />
				</div>
				<span className="text-lg font-semibold text-foreground tracking-tight">
					FlashLearn
				</span>
			</div>

			{/* Navigation */}
			<nav className="flex flex-1 flex-col gap-1">
				{navItems.map((item) => {
					const isActive = location.pathname === item.link;

					return (
						<Link
							to={item.link}
							key={item.label}
							className={cn(
								"flex items-center justify-start gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 group relative",
								isActive
									? "bg-primary/15 text-primary"
									: "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
							)}
						>
							<item.icon
								className={cn(
									"size-5 transition-transform duration-200 group-hover:scale-105",
									isActive
										? "text-primary"
										: "text-muted-foreground group-hover:text-foreground",
								)}
							/>
							{item.label}

							{/* Елегантний індикатор активності зліва з твого референсу */}
							{isActive && (
								<div className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-primary rounded-r-md" />
							)}
						</Link>
					);
				})}
			</nav>

			{/* User Profile */}
			<div className="border-t border-border pt-4">
				<div className="flex items-center gap-3 rounded-xl p-2 bg-accent/30">
					<Avatar className="size-9 border border-border">
						<AvatarImage src="/placeholder-avatar.jpg" alt="User" />
						<AvatarFallback className="bg-secondary text-secondary-foreground font-semibold text-xs">
							JD
						</AvatarFallback>
					</Avatar>
					<div className="flex-1 min-w-0">
						<p className="text-sm font-medium text-foreground truncate">
							John Doe
						</p>
						<p className="text-xs text-muted-foreground truncate">Premium</p>
					</div>
					<Button
						variant="ghost"
						size="icon"
						onClick={handleLogout}
						className="text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive rounded-lg"
					>
						<LogOut className="size-4" />
					</Button>
				</div>
			</div>
		</aside>
	);
}
