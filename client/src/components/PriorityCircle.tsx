"use client";

import React, { useState } from "react";
import PriorityModal from "./PriorityModal";
import { priorityTable } from "@/constants";

const PriorityCircle: React.FC<{
  priority: number;
  size?: number;
  className?: string;
  modalClassName?: string;
  onChange: (priority: number) => void;
}> = ({ priority, className, size = 8, onChange, modalClassName }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <span
        className={`inline-flex items-center justify-center w-${size} h-${size} text-sm font-semibold text-${priorityTable[priority]}-800 bg-${priorityTable[priority]}-200 rounded-full ${className} cursor-pointer`}
        onClick={() => setIsShow(!isShow)}
      >
        {priority}
      </span>

      <PriorityModal
        isShow={isShow}
        onClose={() => setIsShow(!isShow)}
        onSelect={(p) => onChange(p)}
        selected={1}
        modalClassName={modalClassName}
      />
    </div>
  );
};

export default PriorityCircle;
