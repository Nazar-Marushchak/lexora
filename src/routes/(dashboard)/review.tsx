import { createFileRoute } from "@tanstack/react-router";
import { ReviewHub } from "@/components/review/review-hub";

export const Route = createFileRoute("/(dashboard)/review")({
	component: RouteComponent,
});

function RouteComponent() {
	return <ReviewHub />;
}
