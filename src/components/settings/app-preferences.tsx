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
import { Bell, Moon, Sun, Monitor } from "lucide-react";

interface AppPreferencesProps {
  theme: string;
  remindersEnabled: boolean;
  reminderTime: string;
  onThemeChange: (value: string) => void;
  onRemindersEnabledChange: (value: boolean) => void;
  onReminderTimeChange: (value: string) => void;
}

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

const reminderTimes = [
  { value: "08:00", label: "08:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "18:00", label: "06:00 PM" },
  { value: "20:00", label: "08:00 PM" },
  { value: "21:00", label: "09:00 PM" },
];

export function AppPreferences({
  theme,
  remindersEnabled,
  reminderTime,
  onThemeChange,
  onRemindersEnabledChange,
  onReminderTimeChange,
}: AppPreferencesProps) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
            <Bell className="size-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-foreground">
              Account & App Preferences
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Configure app behavior and notifications
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Selector */}
        <div className="space-y-2">
          <Label htmlFor="theme" className="text-foreground">
            Interface Theme
          </Label>
          <Select value={theme} onValueChange={onThemeChange}>
            <SelectTrigger
              id="theme"
              className="w-full border-border bg-background text-foreground sm:w-48"
            >
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              {themes.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  <div className="flex items-center gap-2">
                    <t.icon className="size-4 text-muted-foreground" />
                    <span>{t.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Reminders */}
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
            <div className="space-y-0.5">
              <Label htmlFor="reminders" className="text-foreground">
                Daily Reminders
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive push/email notifications to practice
              </p>
            </div>
            <Switch
              id="reminders"
              checked={remindersEnabled}
              onCheckedChange={onRemindersEnabledChange}
            />
          </div>

          {remindersEnabled && (
            <div className="ml-4 space-y-2 border-l-2 border-primary/20 pl-4">
              <Label htmlFor="reminder-time" className="text-foreground">
                Reminder Time
              </Label>
              <Select value={reminderTime} onValueChange={onReminderTimeChange}>
                <SelectTrigger
                  id="reminder-time"
                  className="w-full border-border bg-background text-foreground sm:w-40"
                >
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {reminderTimes.map((time) => (
                    <SelectItem key={time.value} value={time.value}>
                      {time.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
