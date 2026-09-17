import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { User, Camera } from "lucide-react";

interface ProfileSettingsProps {
	name: string;
	email: string;
	nativeLanguage: string;
	onNameChange: (value: string) => void;
	onEmailChange: (value: string) => void;
	onNativeLanguageChange: (value: string) => void;
}

const languages = [
	{ value: "en", label: "English" },
	{ value: "es", label: "Spanish" },
	{ value: "de", label: "German" },
	{ value: "fr", label: "French" },
	{ value: "ja", label: "Japanese" },
	{ value: "ko", label: "Korean" },
	{ value: "zh", label: "Chinese" },
];

export function ProfileSettings({
	name,
	email,
	nativeLanguage,
	onNameChange,
	onEmailChange,
	onNativeLanguageChange,
}: ProfileSettingsProps) {
	return (
		<Card className="border-border bg-card">
			<CardHeader>
				<div className="flex items-center gap-3">
					<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
						<User className="size-5 text-primary" />
					</div>
					<div>
						<CardTitle className="text-foreground">Profile Settings</CardTitle>
						<CardDescription className="text-muted-foreground">
							Manage your personal information
						</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Avatar */}
				<div className="flex items-center gap-4">
					<div className="relative">
						<Avatar className="size-20 border-2 border-border">
							<AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
							<AvatarFallback className="bg-muted text-muted-foreground text-lg">
								JD
							</AvatarFallback>
						</Avatar>
						<Button
							size="icon"
							variant="secondary"
							className="absolute -bottom-1 -right-1 size-8 rounded-full border border-border bg-card hover:bg-primary/10 hover:text-primary"
						>
							<Camera className="size-4" />
						</Button>
					</div>
					<div className="space-y-1">
						<p className="text-sm font-medium text-foreground">
							Profile Picture
						</p>
						<p className="text-xs text-muted-foreground">
							JPG, PNG or GIF. Max 2MB.
						</p>
					</div>
				</div>

				{/* Form Fields */}
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="name" className="text-foreground">
							Full Name
						</Label>
						<Input
							id="name"
							value={name}
							onChange={(e) => onNameChange(e.target.value)}
							placeholder="John Doe"
							className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-primary/20"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email" className="text-foreground">
							Email Address
						</Label>
						<Input
							id="email"
							type="email"
							value={email}
							onChange={(e) => onEmailChange(e.target.value)}
							placeholder="john@example.com"
							className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-primary/20"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="native-language" className="text-foreground">
						Native Language
					</Label>
					<Select value={nativeLanguage} onValueChange={onNativeLanguageChange}>
						<SelectTrigger
							id="native-language"
							className="w-full border-border bg-background text-foreground sm:w-64"
						>
							<SelectValue placeholder="Select your native language" />
						</SelectTrigger>
						<SelectContent>
							{languages.map((lang) => (
								<SelectItem key={lang.value} value={lang.value}>
									{lang.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</CardContent>
		</Card>
	);
}
