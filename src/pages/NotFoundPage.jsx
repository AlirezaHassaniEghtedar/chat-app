import { Link } from "react-router";

import { ChevronRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="h-full grid place-content-center text-center gap-8">
      <p className="text-9xl font-bold text-neutral-500">404</p>
      <p className="text-3xl font-bold capitalize text-neutral-500">
        not found
      </p>
      <Link
        to="/"
        className="link link-primary transition-colors mt-8 text-xl flex items-end gap-1 capitalize"
      >
        return to the home page
        <ChevronRight className="size-6" />
      </Link>
    </div>
  );
}
