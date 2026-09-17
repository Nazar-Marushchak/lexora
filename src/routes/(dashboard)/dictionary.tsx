import { DictionaryList } from "@/components/dictionary/dictionary-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/dictionary")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DictionaryList />;
}
