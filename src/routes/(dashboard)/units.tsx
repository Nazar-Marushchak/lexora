import { UnitsList } from "@/components/units/units-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/units")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container mx-auto max-w-7xl p-6 lg:p-8">
			<UnitsList />
		</div>
	);
}
