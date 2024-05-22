import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { booksData } from "../data/books";
import React from "react";
const BooksPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {booksData.map((item) => {
          return (
            <div>
              <Link to={`/books/${item.id}`}>
                <div className="pageImg" style={{ padding: "10px" }}>
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <br />
              <br />
              <br />
              <div className="proModel">{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BooksPage;
