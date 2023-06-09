import React from "react";
import DeleteIcon from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCustomPage } from "../../utils/api";
import { deletePage } from "../../redux/slices/customPageSlice";

type DeletePageDropDownProp = {
  isOpen: boolean;
  pageId: string;
};

export default function DeletePageDropDown({
  isOpen,
  pageId,
}: DeletePageDropDownProp) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleDelete(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    await deleteCustomPage(pageId);
    dispatch(deletePage({ id: pageId }));
    navigate("/dashboard/");
  }

  return (
    <div
      className={`absolute right-2 top-10 rounded-lg border bg-white shadow-lg transition duration-200 ease-in-out
      ${isOpen ? "block" : "hidden"} `}
    >
      <div
        className="flex cursor-pointer items-center overflow-hidden px-4 py-3 text-sm text-gray-700 duration-150 hover:bg-gray-200"
        onClick={handleDelete}
      >
        <img className="h-5 w-5" src={DeleteIcon} alt="dropdown" />
        <h1 className="ml-2 font-semibold">Delete</h1>
      </div>
    </div>
  );
}
