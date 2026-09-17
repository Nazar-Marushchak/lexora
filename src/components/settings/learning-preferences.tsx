import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { GraduationCap } from "lucide-react";

interface LearningPreferencesProps {
	targetLanguage: string;
	dailyGoal: string;
	soundEffects: boolean;
	showPhonetics: boolean;
	onTargetLanguageChange: (value: string) => void;
	onDailyGoalChange: (value: string) => void;
	onSoundEffectsChange: (value: boolean) => void;
	onShowPhoneticsChange: (value: boolean) => void;
}

const targetLanguages = [
	{ value: "en", label: "English" },
	{ value: "es", label: "Spanish" },
	{ value: "de", label: "German" },
	{ value: "fr", label: "French" },
	{ value: "ja", label: "Japanese" },
	{ value: "ko", label: "Korean" },
	{ value: "zh", label: "Chinese" },
];

const dailyGoals = [
	{ value: "casual", label: "Casual", description: "5 mins/day" },
	{ value: "regular", label: "Regular", description: "15 mins/day" },
	{ value: "serious", label: "Serious", description: "30 mins/day" },
	{ value: "intense", label: "Intense", description: "60 mins/day" },
];

export function LearningPreferences({
	targetLanguage,
	dailyGoal,
	soundEffects,
	showPhonetics,
	onTargetLanguageChange,
	onDailyGoalChange,
	onSoundEffectsChange,
	onShowPhoneticsChange,
}: LearningPreferencesProps) {
	return (
		<Card className="border-border bg-card">
			<CardHeader>
				<div className="flex items-center gap-3">
					<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
						<GraduationCap className="size-5 text-primary" />
					</div>
					<div>
						<CardTitle className="text-foreground">
							Learning Preferences
						</CardTitle>
						<CardDescription className="text-muted-foreground">
							Customize your learning experience
						</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Selects */}
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="target-language" className="text-foreground">
							Target Language
						</Label>
						<Select
							value={targetLanguage}
							onValueChange={onTargetLanguageChange}
						>
							<SelectTrigger
								id="target-language"
								className="w-full border-border bg-background text-foreground"
							>
								<SelectValue placeholder="Select language to learn" />
							</SelectTrigger>
							<SelectContent>
								{targetLanguages.map((lang) => (
									<SelectItem key={lang.value} value={lang.value}>
										{lang.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="daily-goal" className="text-foreground">
							Daily Goal
						</Label>
						<Select value={dailyGoal} onValueChange={onDailyGoalChange}>
							<SelectTrigger
								id="daily-goal"
								className="w-full border-border bg-background text-foreground"
							>
								<SelectValue placeholder="Select your goal" />
							</SelectTrigger>
							<SelectContent>
								{dailyGoals.map((goal) => (
									<SelectItem key={goal.value} value={goal.value}>
										<span>{goal.label}</span>
										<span className="ml-2 text-muted-foreground">
											({goal.description})
										</span>
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* Toggles */}
				<div className="space-y-4">
					<div className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
						<div className="space-y-0.5">
							<Label htmlFor="sound-effects" className="text-foreground">
								Sound Effects
							</Label>
							<p className="text-sm text-muted-foreground">
								Play sounds for correct/incorrect answers
							</p>
						</div>
						<Switch
							id="sound-effects"
							className="bg-primary"
							checked={soundEffects}
							onCheckedChange={onSoundEffectsChange}
						/>
					</div>

					<div className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
						<div className="space-y-0.5">
							<Label htmlFor="show-phonetics" className="text-foreground">
								Show Phonetic Guides
							</Label>
							<p className="text-sm text-muted-foreground">
								Display romaji, pinyin, or other phonetic aids
							</p>
						</div>
						<Switch
							id="show-phonetics"
							checked={showPhonetics}
							onCheckedChange={onShowPhoneticsChange}
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
