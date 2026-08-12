export default function AuthImagePattern({ title, subtitle }) {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-primary/20 animate-pulse"
              style={{ animationDelay: `${i % 2 === 0 ? i * 100 : i * 500}ms` }}
            ></div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 first-letter:uppercase">
          {title}
        </h2>
        <p className="text-base-content/60 first-letter:uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
