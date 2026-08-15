import { useEffect, useRef, useState } from "react";

import { useChatStore } from "../store/useChatStore.js";
import { useAuthStore } from "../store/useAuthStore.js";

import { formatMessageTime } from "../lib/utils.lib.js";

import ChatHeader from "./ChatHeader.jsx";
import MessageSkeleton from "./MessageSkeleton.jsx";
import MessageInput from "./MessageInput.jsx";
import EmptyChat from "./EmptyChat.jsx";
import ImageModal from "./ImageModal.jsx";

export default function ChatContainer() {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id).then();
  }, [selectedUser._id, getMessages]);

  const imageModalRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  if (isMessagesLoading)
    return (
      <div className="flex flex-col flex-1 overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );

  const handleOpenImageModel = (image) => {
    setSelectedImage(image);
    imageModalRef?.current?.showModal();
  };

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-300/50">
        {messages.length === 0 && <EmptyChat />}
        {messages.length > 0 &&
          messages.map((message) => (
            <div
              key={message._id}
              className={`chat ${message?.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={
                      message?.senderId === authUser._id
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>
              <div className="chat-bubble flex flex-col gap-2 items-start">
                {message.image && (
                  <img
                    onClick={() => handleOpenImageModel(message.image)}
                    src={message.image}
                    className={`rounded-md max-w-md w-full cursor-pointer ${message.text ? "mt-1" : "my-1"}`}
                    alt="attachment"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          ))}
      </div>

      <MessageInput />
      <ImageModal imageModalRef={imageModalRef} imageSrc={selectedImage} />
    </div>
  );
}
