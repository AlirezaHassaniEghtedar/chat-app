import { useAuthStore } from "../store/useAuthStore.js";
import { Mail, Plus, Trash, User } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const {
    authUser,
    isUpdatingProfile,
    updateProfile,
    deleteProfile,
    isDeletingProfile,
  } = useAuthStore();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const handleDeleteProfileImage = async () => {
    await deleteProfile();
    setSelectedImage(null);
  };

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-200 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold capitalize">profile</h1>
            <p className="mt-2 first-letter:uppercase">
              your profile information
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImage || authUser.profilePic || "/avatar.png"}
                alt="profile picture"
                className="size-32 rounded-full object-cover border-4"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0
                 bg-base-content hover:scale-105
                 p-2 rounded-full cursor-pointer
                 transition-all duration-200
                 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
              >
                <Plus className="w-4 h-4 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUploadImage}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <button
              className={`btn btn-soft btn-error ${isDeletingProfile ? "animate-pulse" : ""}`}
              onClick={handleDeleteProfileImage}
            >
              <Trash className="size-4" />
              delete profile picture
            </button>
            <p className="text-sm text-zinc-400 first-letter:uppercase">
              {isUpdatingProfile && "uploading..."}
              {isDeletingProfile && "deleting..."}
              {!isUpdatingProfile &&
                !isDeletingProfile &&
                "click the camera icon to update your photo"}
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2 capitalize">
                <User className="w-4 h-4" />
                full name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-zinc-400">
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2 capitalize">
                <Mail className="w-4 h-4" />
                email address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-zinc-400">
                {authUser?.email}
              </p>
            </div>
          </div>

          <div className="mt-6 bg-base-200 rounded-xl">
            <h2 className="text-lg font-medium mb-2 capitalize">
              account information
            </h2>
            <div className="text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span className="capitalize">member since</span>
                <span>{authUser?.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="capitalize">account status</span>
                <span className="text-green-500">active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
