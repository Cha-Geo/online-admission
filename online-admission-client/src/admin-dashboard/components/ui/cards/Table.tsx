import React, { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import PageLoader from "@/components/loader/PageLoader";



function Pagination({
  handleNextPaginate,
  handlePrevPaginate,
  hasPrevPage,
  hasNextPage,
}: IPaginationProps) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#!"
          style={{
            pointerEvents: hasPrevPage ? "visible" : "none",
            opacity: hasPrevPage ? "" : "0.3",
          }}
          onClick={handlePrevPaginate}
          className={` relative inline-flex items-center rounded-md border border-gray-300 bg-blueGray-600 px-4 py-2 text-sm font-medium text-white hover:bg-blueGray-600`}
        >
          Previous
        </a>
        <a
          href="#!"
          style={{
            pointerEvents: hasNextPage ? "visible" : "none",
            opacity: hasNextPage ? "" : "0.3",
          }}
          onClick={handleNextPaginate}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-blueGray-600 px-4 py-2 text-sm font-medium text-white hover:bg-blueGray-600"
        >
          Next
        </a>
      </div>
    </div>
  );
}

function ContentNotFound(props: ContentNotFoundProps) {
  return (
    <div className="mx-auto text-center">
      <Image src="/img/404.png" alt="404 Not Found" width={400} height={300} />
    </div>
  );
}

function SearchComponent({
  handleChange,
  value,
  addBulk,
}: ISearchComponentProps) {
  return (
    <div
      className={`my-2 ${
        addBulk ? "w-9/12" : "w-10/12"
      } justify-center flex items-center`}
    >
      <div className="flex items-center bg-blueGray-300 rounded-l-md border-2 border-blueGray-300 justify-center w-12 h-12 text-blueGray-600 ">
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="pointer-events-none absolute w-5 fill-blueGray-600 transition"
        >
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input
        onChange={handleChange}
        value={value}
        name="name"
        type="search"
        className="border-0 px-3 py-3 mt-3 mb-3 placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder="Search"
      />
    </div>
  );
}

export default function TableTemplate({
  title,
  columns,
  rows,
  paginate,
  Add = false,
  Edit = false,
  Delete = false,
  addLink,
  toggleEdit,
  toggleDelete,
  label = "Add",
  addBulk = false,
  addBulkLink,
  hasNextPage,
  hasPrevPage,
  handleNextPaginate,
  handlePrevPaginate,
  handleSearch,
  searchValue,
  loading = true,
}: ITableTemplateProps) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700 text-left">
              {title}
            </h3>
          </div>
          <SearchComponent
            handleChange={handleSearch}
            value={searchValue}
            addBulk={addBulk}
          />
          {Add ? (
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link href={addLink}>
                <a>
                  <button
                    className="bg-green-600 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    {label}
                  </button>
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
          {addBulk ? (
            <div className="relative w-full max-w-full flex-grow flex-1 text-right">
              <Link href={addBulkLink!}>
                <a>
                  <button
                    className="bg-green-600 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Add Bulk
                  </button>
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {loading ? (
          <PageLoader />
        ) : rows.length > 0 ? (
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {columns.map((value, index) => (
                  <th
                    key={index}
                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {Object.keys(row).map((value, index) => (
                    <td
                      key={index}
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      {row[value]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                {columns.map((value, index) => (
                  <th
                    key={index}
                    className="px-6 bg-blueGray-50 text-blueGray-500 align-right border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        ) : (
          <ContentNotFound />
        )}
      </div>
      {paginate && (
        <Pagination
          handleNextPaginate={handleNextPaginate}
          handlePrevPaginate={handlePrevPaginate}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      )}
    </div>
  );
}
