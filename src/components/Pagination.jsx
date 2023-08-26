import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({ numPages, page, setPage }) {
  let current =
    "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  let notCurrent =
    "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0";

  let pageNumbers = [];
  for (let i = 0; i < numPages; i++) {
    pageNumbers[i] = i + 1;
  }

  const changePagination = (event) => {
    setPage(event.target.textContent - 1);
  };

  const previousClick = () => {
    setPage(page - 1);
  };

  const nextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={page == 0 ? true : false}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={previousClick}
          type="button"
        >
          Previous
        </button>
        <button
          disabled={page == numPages - 1 ? true : false}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={nextClick}
          type="button"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={page == 0 ? true : false}
              className={notCurrent}
              onClick={previousClick}
              type="button"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pageNumbers.map((number) => {
              return (
                <div
                  key={number}
                  className={page + 1 == number ? current : notCurrent}
                  onClick={changePagination}
                >
                  {number}
                </div>
              );
            })}
            <button
              disabled={page == numPages - 1 ? true : false}
              className={notCurrent}
              onClick={nextClick}
              type="button"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
