import { useState } from "react";
import { toast } from "sonner";
import { SettingsHeader } from "./settings-header";
import { ProfileSettings } from "./profile-settings";
import { LearningPreferences } from "./learning-preferences";
import { AppPreferences } from "./app-preferences";

// Mock initial data - replace with your data fetching logic
const mockSettings = {
  name: "John Doe",
  email: "john@example.com",
  nativeLanguage: "en",
  targetLanguage: "ja",
  dailyGoal: "regular",
  soundEffects: true,
  showPhonetics: true,
  theme: "dark",
  remindersEnabled: true,
  reminderTime: "20:00",
};

export function SettingsContainer() {
  // Profile state
  const [name, setName] = useState(mockSettings.name);
  const [email, setEmail] = useState(mockSettings.email);
  const [nativeLanguage, setNativeLanguage] = useState(
    mockSettings.nativeLanguage,
  );

  // Learning preferences state
  const [targetLanguage, setTargetLanguage] = useState(
    mockSettings.targetLanguage,
  );
  const [dailyGoal, setDailyGoal] = useState(mockSettings.dailyGoal);
  const [soundEffects, setSoundEffects] = useState(mockSettings.soundEffects);
  const [showPhonetics, setShowPhonetics] = useState(
    mockSettings.showPhonetics,
  );

  // App preferences state
  const [theme, setTheme] = useState(mockSettings.theme);
  const [remindersEnabled, setRemindersEnabled] = useState(
    mockSettings.remindersEnabled,
  );
  const [reminderTime, setReminderTime] = useState(mockSettings.reminderTime);

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Mock save delay - replace with your mutation logic
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSaving(false);
    toast.success("Settings saved", {
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <SettingsHeader onSave={handleSave} isSaving={isSaving} />

      <div className="flex flex-col gap-6">
        <ProfileSettings
          name={name}
          email={email}
          nativeLanguage={nativeLanguage}
          onNameChange={setName}
          onEmailChange={setEmail}
          onNativeLanguageChange={setNativeLanguage}
        />

        <LearningPreferences
          targetLanguage={targetLanguage}
          dailyGoal={dailyGoal}
          soundEffects={soundEffects}
          showPhonetics={showPhonetics}
          onTargetLanguageChange={setTargetLanguage}
          onDailyGoalChange={setDailyGoal}
          onSoundEffectsChange={setSoundEffects}
          onShowPhoneticsChange={setShowPhonetics}
        />

        <AppPreferences
          theme={theme}
          remindersEnabled={remindersEnabled}
          reminderTime={reminderTime}
          onThemeChange={setTheme}
          onRemindersEnabledChange={setRemindersEnabled}
          onReminderTimeChange={setReminderTime}
        />
      </div>
    </div>
  );
}
