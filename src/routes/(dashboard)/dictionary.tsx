import { DictionaryList } from "#/components/dictionary/dictionary-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/dictionary")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex flex-1 flex-col overflow-hidden">
        <DictionaryList />
      </main>
    </div>
  );
}
