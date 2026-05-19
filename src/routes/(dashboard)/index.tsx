import { ProgressChart } from "#/components/dashboard/progress-chart";
import { StartLearning } from "#/components/dashboard/start-learning";
import { StatsCards } from "#/components/dashboard/stats-cards";
import { UnitsGrid } from "#/components/units/units-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 overflow-auto">
        <div className="container max-w-8xl p-6 lg:p-8 mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, John!
            </h1>
            <p className="text-muted-foreground">
              {"Let's continue your learning journey"}
            </p>
          </div>

          {/* Stats Row */}
          <div className="mb-6">
            <StatsCards />
          </div>

          {/* Main Content Grid */}
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <ProgressChart />
            <StartLearning />
          </div>

          {/* Units Section */}
          <UnitsGrid />
        </div>
      </div>
    </div>
  );
}
