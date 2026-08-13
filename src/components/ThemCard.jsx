export default function ThemeCard({ theme, currentTheme, setTheme }) {
  return (
    <button
      className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors cursor-pointer
              ${currentTheme === theme ? "bg-base-300" : "hover:bg-base-300"}`}
      onClick={() => setTheme(theme)}
    >
      <div
        className="relative h-8 w-full rounded-md overflow-hidden"
        data-theme={theme}
      >
        <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
          <div className="rounded bg-primary"></div>
          <div className="rounded bg-secondary"></div>
          <div className="rounded bg-accent"></div>
          <div className="rounded bg-neutral"></div>
        </div>
      </div>
      <span className="text-xs font-medium truncate w-full text-center capitalize">
        {theme}
      </span>
    </button>
  );
}
