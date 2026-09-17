import { SettingsContainer } from "@/components/settings/settings-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto max-w-3xl p-6 lg:p-8">
			<SettingsContainer />
		</div>
	);
}
