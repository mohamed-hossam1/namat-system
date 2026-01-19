import { TriangleAlert, Check } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ConfirmType = "negative" | "positive";

interface ConfirmProps {
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  onConfirm: () => void;
  message: string;
  button: string;
  type?: ConfirmType;
}

const Confirm = ({
  isOpen,
  setIsOpen,
  onConfirm,
  message,
  button,
  type = "negative",
}: ConfirmProps) => {

  const isPositive = type === "positive";
  const iconColor = isPositive ? "text-green-500" : "text-red-500";
  const iconBg = isPositive
    ? "bg-green-100 border-green-50"
    : "bg-red-100 border-red-50";
  const buttonColor = isPositive
    ? "bg-green-600 hover:bg-green-700"
    : "bg-red-500 hover:bg-red-600";
  const Icon = isPositive ? Check : TriangleAlert;

  const dialogVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      z: -100,
      rotateY: 25,
      rotateX: 5,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      rotateY: 0,
      z: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      z: -100,
      rotateY: 25,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return typeof document !== "undefined"
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-[3px] z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
                <motion.div
                  className="pointer-events-auto"
                  variants={dialogVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ transformPerspective: 500 }}
                >
                  <div className="rounded-[10px] border border-border bg-background p-5 min-w-[300px]">
                    <div className="flex gap-3 items-center mb-5">
                      <Icon color={isPositive ? "#22c55e" : "#ef4444"}></Icon>
                      <h2 className="text-2xl m-0  text-text-color">
                        {isPositive ? "Confirm" : "Confirm"}
                      </h2>
                    </div>
                    <p className="text-text-secondary mb-5">{message}</p>
                    <div className="border-t border-gray-700 pt-5 mt-5 flex justify-end gap-2.5">
                      <motion.button
                        onClick={() => setIsOpen(false)}
                        whileTap={{ y: 1 }}
                        className="bg-gray-700 text-[#f5f5f5] text-base px-5 py-2.5 rounded-[10px] border-none cursor-pointer hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        onClick={onConfirm}
                        whileTap={{ y: 1 }}
                        className={`${buttonColor} text-white text-base px-5 py-2.5 rounded-[10px] border-none cursor-pointer transition-colors`}
                      >
                        {button}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;
};

export default Confirm;
