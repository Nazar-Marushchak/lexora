import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * `tone` only affects how the card looks. Anything that changes the card's
 * *structure* (an extra filter, a warning icon) is passed in as children /
 * actionIcon, so this component never has to branch on which mode it is.
 */
export type ReviewModeTone = "primary" | "secondary" | "danger";

type ButtonVariant = ComponentProps<typeof Button>["variant"];

const actionVariant: Record<ReviewModeTone, ButtonVariant> = {
	primary: "default",
	secondary: "secondary",
	danger: "default",
};

const actionClassName: Record<ReviewModeTone, string> = {
	primary: "",
	secondary: "",
	danger: "bg-destructive/90 text-destructive-foreground hover:bg-destructive",
};

interface ReviewModeCardProps {
	title: string;
	subtitle: string;
	icon: LucideIcon;
	count: string;
	action: string;
	tone?: ReviewModeTone;
	/** Rendered before the action label — e.g. a warning icon. */
	actionIcon?: ReactNode;
	onAction?: () => void;
	/** Extra controls between the badge and the action, e.g. a type filter. */
	children?: ReactNode;
}

export function ReviewModeCard({
	title,
	subtitle,
	icon: Icon,
	count,
	action,
	tone = "primary",
	actionIcon,
	onAction,
	children,
}: ReviewModeCardProps) {
	return (
		<Card className="border-border bg-card transition-colors hover:border-primary/40 hover:bg-primary/5">
			<CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
				<div>
					<CardTitle className="text-base text-foreground">{title}</CardTitle>
					<p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
				</div>
				<div className="rounded-lg bg-primary/10 p-2.5 text-primary">
					<Icon className="size-5" />
				</div>
			</CardHeader>
			<CardContent className="space-y-5">
				<Badge variant="secondary" className="bg-primary/10 text-primary">
					{count}
				</Badge>
				{children}
				<Button
					variant={actionVariant[tone]}
					className={`w-full ${actionClassName[tone]}`}
					onClick={onAction}
				>
					{actionIcon}
					{action}
					<ArrowRight className="ml-auto size-4" />
				</Button>
			</CardContent>
		</Card>
	);
}
