import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { MagnifyingGlass } from "react-loader-spinner";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

function Fantasy() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(entries.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageEntries = entries.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // pagination end

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries()
      .then((response) => {
        // console.log(response.items);

        // filtering part

        const filtered = response.items.filter((entry) =>
          entry.fields.bookGenre.includes("Fantasy")
        );

        // end filter
        // console.log(filtered);
        setEntries(filtered);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <p>Loading...</p>
      </>
    );
  }

  // console.log(entries);
  // console.log(entry.fields.bookCover.fields.file.url);
  return (
    <div className="">
      {currentPageEntries.map((entry) => {
        // console.log(entry.fields.bookCover);
        return (
          <div
            key={entry.fields.bookId}
            className="border-double border-4 border-black rounded-md p-2 m-1 overflow-hidden shadow-2xl bg-gradient-to-r  from-cyan-600 to-yellow-400 object-cover"
          >
            <img
              src={entry.fields.bookCover[0].fields.file.url}
              alt={entry.fields.bookTitle}
              // width="50%"
              className="h-auto w-44 float-start m-1 pr-3"
            />
            <h1 className="uppercase text-2xl font-extrabold text-left">
              {entry.fields.bookTitle}
            </h1>

            <h2 className="font-medium text-left text-xl">
              {entry.fields.bookAuthor}
            </h2>
            <h3 className="text-left">
              Genre(s):{" "}
              {entry.fields.bookGenre.length > 1
                ? entry.fields.bookGenre.join(", ")
                : entry.fields.bookGenre}{" "}
            </h3>

            <p className="text-justify indent-5 pt-3 pr-2">
              {entry.fields.bookDescription}
            </p>
            <br />
          </div>
        );
      })}
      {/* pagination part */}
      <div className="pagination inline-flex">
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={
                currentPage === index + 1
                  ? "active bg-gray-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              }
            >
              {index + 1}
            </button>
          ))}
      </div>
      {/* pagination part end */}
    </div>
  );
}

export default Fantasy;

// https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
