import { ReviewSession } from "@/components/review/review-session";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/session")({
	component: RouteComponent,
});

function RouteComponent() {
	return <ReviewSession />;
}
