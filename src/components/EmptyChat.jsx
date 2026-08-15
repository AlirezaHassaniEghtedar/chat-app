import { MessagesSquare } from "lucide-react";

export default function EmptyChat() {
  return (
    <div className="w-full h-full grid place-content-center justify-items-center gap-4 text-center">
      <MessagesSquare className="size-16 animate-bounce opacity-70" />
      <p className="capitalize text-2xl font-medium opacity-70">
        no messages here yet type
      </p>
      <p className="text-lg font-medium opacity-90 animate-pulse">
        send a message to start chatting...
      </p>
    </div>
  );
}
