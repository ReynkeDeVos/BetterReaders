import { useState, useEffect } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";

function ContentfulCDN() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const response = await axios.get(
        //   'https://cdn.contentful.com/spaces/22o80r3chpjd/environments/master/entries?access_token=nRXiDfnL2oToKVO7_59GIVbJ1AB-1fJaNII3e7R3a6A'
        // );
        const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
        const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`;
        const response = await axios.get(url);
        console.log(response);
        setEntries(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
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

  return (
    <div>
      {entries.map((entry) => {
        console.log(entry.fields);
        return (
          <div key={entry.fields.bookId}>
            <h1>{entry.fields.bookTitle}</h1>
            <h2>{entry.fields.bookAuthor}</h2>
            {/* <img
              src={entry.fields.bookCover.fields.file.url}
              alt={entry.fields.bookTitle}
              width="50%"
            /> */}
            <p>{entry.fields.bookDescription}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ContentfulCDN;

// https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
