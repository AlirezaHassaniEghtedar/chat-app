import { useAuthStore } from "../store/useAuthStore.js";
import { useChatStore } from "../store/useChatStore.js";
import { X } from "lucide-react";

export default function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" || e.key === "Escape") {
      setSelectedUser(null).then();
    }
  });

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70 capitalize">
              {onlineUsers.includes(selectedUser._id) ? "online" : "offline"}
            </p>
          </div>
        </div>

        <button
          className="mr-4 cursor-pointer"
          onClick={() => setSelectedUser(null)}
        >
          <X />
        </button>
      </div>
    </div>
  );
}
