import { CircleX, TriangleAlert } from "lucide-react";

interface ErrorAlertProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ErrorAlert = ({ isOpen, onClose, message }: ErrorAlertProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm p-4 ">
      <div className="bg-background border-primary-foreground rounded-2xl flex flex-col items-center justify-center">
        <div className="w-full max-w-md  overflow-hidden">
          <div className="relative flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
            <div className="absolute top-2 end-2">
              <button
                onClick={onClose}
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-danger-alert"
              >
                <CircleX className="cursor-pointer w-6 h-6 text-gray-400 hover:text-red-500" />
              </button>
            </div>

            <div className="p-4  sm:p-10 overflow-y-auto">
              <div className="flex justify-center items-center  gap-x-4 md:gap-x-7">
                <span className="shrink-0 inline-flex justify-center items-center size-11 sm:w-15.5 sm:h-15.5 rounded-full border border-border ">
                  <TriangleAlert color="red"/>
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
    </div>
  );
};

export default ErrorAlert;
