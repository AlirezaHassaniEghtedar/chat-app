import { THEMES } from "../constants/themes.constants.js";

import { useThemeStore } from "../store/useThemeStore.js";

import ThemeCard from "../components/ThemCard.jsx";
import PreviewSection from "../components/PreviewSection.jsx";

export default function SettingsPage() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold capitalize">theme</h2>
          <p className="text-sm text-base-content/70 first-letter:uppercase">
            choose a theme for your chat interface
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <ThemeCard
              key={t}
              theme={t}
              currentTheme={theme}
              setTheme={setTheme}
            />
          ))}
        </div>
        <PreviewSection />
      </div>
    </div>
  );
}
