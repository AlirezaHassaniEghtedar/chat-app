import { useChatStore } from "../store/useChatStore.js";

import Sidebar from "../components/Sidebar.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import ChatContainer from "../components/ChatContainer.jsx";

export default function HomePage() {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-full bg-base-200">
      <div className="h-full flex items-center justify-center">
        <div className="h-full bg-base-100 rounded-lg shadow-xl w-full">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}
