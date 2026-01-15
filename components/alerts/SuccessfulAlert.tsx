import { X, Zap } from "lucide-react";

interface SuccessfulAlertProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SuccessfulAlert = ({
  isOpen,
  onClose,
  message,
}: SuccessfulAlertProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm p-4 ">
      <div className="bg-background border-primary-foreground rounded-2xl flex flex-col items-center justify-center">
        <div className="w-full max-w-md  overflow-hidden">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
            <div className="absolute top-2 end-2">
              <button
                onClick={onClose}
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-task-created-alert"
              >
                <X className="cursor-pointer w-6 h-6 text-gray-400 hover:text-red-500" />
              </button>
            </div>

            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <span className="mb-4 inline-flex justify-center items-center size-11 rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                {/* <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg> */}
                <Zap />
              </span>

              <h3
                id="hs-task-created-alert-label"
                className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200"
              >
                {message}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulAlert;
