import { SettingsContainer } from "#/components/settings/settings-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-3xl p-6 lg:p-8">
          <SettingsContainer />
        </div>
      </main>
    </div>
  );
}
