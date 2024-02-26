import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-full">
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle hidden lg:hidden"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="drawer-a lg:hidden">
            \
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-black rounded-md p-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-400 text-base-content">
            <li>
              <h1 className="text-xl items-center upper justify-center underline hover:decoration-4">
                Sidebar Menu
              </h1>
            </li>
            <li onClick={() => navigate("/")}>
              <a
                className="btn btn-active btn-neutral m-2 text-xl "
                data-tip="Home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                DashBoard
              </a>
            </li>
            <li onClick={() => navigate("/Users")}>
              <a class="btn btn-active btn-neutral m-2 text-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M5 16a1 1 0 011-1h2a1 1 0 011 1v2h6v-2a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3zm1-3a3 3 0 016 0v1H6v-1zm8-2a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Users
              </a>
            </li>
            <li onClick={() => navigate("/create")}>
              <a class="btn btn-active btn-neutral m-2 text-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5z"
                    clip-rule="evenodd"
                  />
                </svg>
                Add
              </a>
            </li>
          </ul>
          <div className="mt-auto">
            <ul className="menu p-4 w-80 min-h-full bg-slate-400 text-base-content">
              <li>
                <a className="btn btn-active btn-neutral m-2 text-xl flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13 7a1 1 0 00-1-1H7a1 1 0 100 2h5a1 1 0 001-1zM9 11a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7 4a1 1 0 00-1 1v10a1 1 0 002 0V5a1 1 0 00-1-1zM14 4a1 1 0 10-2 0v10a1 1 0 102 0V5zM9 19a7 7 0 100-14 7 7 0 000 14z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
