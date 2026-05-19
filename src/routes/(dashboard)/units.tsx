import { UnitsList } from "#/components/units/units-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/units")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 overflow-auto">
        <div className="container max-w-8xl p-6 lg:p-8 mx-auto">
          <UnitsList />
        </div>
      </div>
    </div>
  );
}
