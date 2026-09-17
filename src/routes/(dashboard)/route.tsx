import { DashboardSidebar } from "@/components/layout/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex h-screen bg-background">
			<DashboardSidebar />
			<main className="flex-1 overflow-y-auto">
				<Outlet />
			</main>
		</div>
	);
}
