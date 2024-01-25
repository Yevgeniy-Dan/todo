import React, { Dispatch, SetStateAction } from "react";
import { FaSort } from "react-icons/fa6";
import AppFilter from "./AppFilter";

const TodoCardsHeader: React.FC<{
  prioritySort: "asc" | "desc";
  statusFilter: "All" | "Done" | "Undone";
  onPrioritySortChange: Dispatch<SetStateAction<"asc" | "desc">>;
  onStatusFilterChange: Dispatch<SetStateAction<"All" | "Done" | "Undone">>;
}> = ({
  prioritySort,
  statusFilter,
  onPrioritySortChange,
  onStatusFilterChange,
}) => {
  return (
    <div className="flex flex-row gap-4">
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() =>
          onPrioritySortChange(prioritySort === "asc" ? "desc" : "asc")
        }
      >
        <FaSort />
        Sort By Priority
      </div>
      <AppFilter
        onStatusFilterChange={(statusFilter) =>
          onStatusFilterChange(statusFilter)
        }
        statusFilter={statusFilter}
      />
    </div>
  );
};

export default TodoCardsHeader;
