import { useEffect } from "react";

import { useChatStore } from "../store/useChatStore.js";

import SidebarSkeleton from "./SidebarSkeleton.jsx";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

export default function Sidebar() {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers().then();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="capitalize font-medium hidden lg:block">
            contacts
          </span>
        </div>
        {/*  TODO : online filter toggle */}
      </div>

      <div className="overflow-y-auto w-full">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full p-3 flex items-center gap-3
             hover:bg-base-300 transition-colors cursor-pointer focus:outline-none
             ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}`}
          >
            <div className="relative shrink-0 mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900"></span>
              )}
            </div>

            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400 capitalize">
                {onlineUsers.includes(user._id) ? "online" : "offline"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
