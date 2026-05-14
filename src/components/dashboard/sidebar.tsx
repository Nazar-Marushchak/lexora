import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  BookOpen,
  BookMarked,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Units", active: false },
  { icon: BookMarked, label: "Dictionary", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function DashboardSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-background p-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
          <BookOpen className="size-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-foreground">
          FlashLearn
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "justify-start gap-3 px-3 text-muted-foreground hover:text-foreground",
              item.active &&
                "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary",
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-border pt-4">
        <div className="flex items-center gap-3 rounded-lg p-2">
          <Avatar className="size-9">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Premium</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="size-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
}
