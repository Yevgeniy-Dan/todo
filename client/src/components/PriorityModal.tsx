"use client";

import React, { useRef } from "react";

import useOutsideClick from "@/hooks/useOutsideClick";
import { priorityTable } from "@/constants";

const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PriorityModal: React.FC<{
  isShow: boolean;
  selected: number | null;
  onSelect: (priority: number) => void;
  onClose: () => void;
  modalClassName?: string;
}> = ({ isShow = false, onClose, onSelect, modalClassName }) => {
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, onClose);

  if (isShow) {
    return (
      <div className="relative">
        <div
          ref={wrapperRef}
          className={`absolute top-95 left-1/2 transform ${
            modalClassName ? modalClassName : "-translate-x-1/2 mt-3"
          } py-3 w-56 max-h-200 bg-white  overflow-y-auto flex justify-center flex-wrap shadow-todo-card`}
        >
          <div className="mb-2 font-thin text-gray-800">Priority</div>
          <div className="border-b border-gray-300 w-full mb-2"></div>

          {priorities.map((priority) => {
            return (
              <div className="p-1 inline-flex " key={priority}>
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full cursor-pointer text-${priorityTable[priority]}-800 bg-${priorityTable[priority]}-200`}
                  onClick={() => {
                    onClose();
                    onSelect(priority);
                  }}
                >
                  {priority}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default PriorityModal;
