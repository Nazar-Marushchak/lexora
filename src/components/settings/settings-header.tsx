import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface SettingsHeaderProps {
  onSave: () => void;
  isSaving?: boolean;
}

export function SettingsHeader({ onSave, isSaving }: SettingsHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <Settings className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>
      </div>
      <Button
        onClick={onSave}
        disabled={isSaving}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
}
