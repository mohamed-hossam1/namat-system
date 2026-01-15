import { TriangleAlert } from "lucide-react";

interface ConfirmDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  button: string;
}

const ConfirmDelete = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  button,
}: ConfirmDeleteProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative flex flex-col bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden w-full max-w-md dark:bg-neutral-900 dark:border-neutral-800">
        <div className="p-4 sm:p-10">
          <div className="flex gap-x-4">
            <span className="shrink-0 inline-flex justify-center items-center size-12 rounded-full border border-border  text-red-500">
              <TriangleAlert className="w-6 h-6" />
            </span>
            <div className="grow">
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
                Confirm
              </h3>
              <p className="text-gray-500 dark:text-neutral-500">{message}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t border-gray-200 dark:bg-neutral-950 dark:border-neutral-800">
          <button
            onClick={onClose}
            className="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 cursor-pointer bg-white text-gray-800 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-3 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
