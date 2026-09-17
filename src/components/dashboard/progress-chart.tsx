import { Area, AreaChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

import type { ChartConfig } from "@/components/ui/chart";

const defaultData = [
	{ day: "Mon", words: 24 },
	{ day: "Tue", words: 31 },
	{ day: "Wed", words: 18 },
	{ day: "Thu", words: 42 },
	{ day: "Fri", words: 35 },
	{ day: "Sat", words: 28 },
	{ day: "Sun", words: 45 },
];

const chartConfig = {
	words: {
		label: "Words Learned",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig;

interface ProgressChartProps {
	data?: { day: string; words: number }[];
}

export function ProgressChart({ data = defaultData }: ProgressChartProps) {
	return (
		<Card className="border-border bg-card">
			<CardHeader>
				<CardTitle className="text-foreground">
					Words Learned This Week
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-60 w-full">
					<AreaChart
						data={data}
						margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
					>
						<defs>
							<linearGradient id="fillWords" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-words)"
									stopOpacity={0.3}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-words)"
									stopOpacity={0.05}
								/>
							</linearGradient>
						</defs>
						<XAxis
							dataKey="day"
							axisLine={false}
							tickLine={false}
							tickMargin={8}
							className="text-muted-foreground"
							tick={{ fontSize: 12 }}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tickMargin={8}
							className="text-muted-foreground"
							tick={{ fontSize: 12 }}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<Area
							type="monotone"
							dataKey="words"
							stroke="var(--color-words)"
							strokeWidth={2}
							fill="url(#fillWords)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
