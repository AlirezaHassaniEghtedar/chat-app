import { X } from "lucide-react";

export default function ImageModal({ imageSrc, imageModalRef }) {
  const handleClose = () => {
    imageModalRef.current?.close();
  };

  return (
    <dialog
      ref={imageModalRef}
      className="fixed inset-0 m-0 p-0 w-full h-full max-w-none max-h-none bg-neutral-800/90"
    >
      <div
        className="w-full h-full grid place-items-center bg-transparent"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div className="relative w-fit max-w-[90vw] max-h-[90vh]">
          <img
            src={imageSrc}
            alt="image modal"
            className="block max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
          />

          <button
            type="button"
            onClick={handleClose}
            className="absolute -top-3 -right-3 btn btn-circle btn-sm"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
