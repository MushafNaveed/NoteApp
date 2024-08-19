import React from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Note from "./Note";
import Fotter from "./Fotter";
import ErrorBoundary from "../../Error Boundary/ErrorBoundary";

export default function Home() {

  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sticky-top">
          <ErrorBoundary>
          <SideBar Title="MyNotes" />
          </ErrorBoundary>
        </div>
        <div className="col-md-10 mt-2">
          <div className="row">
            <div className="col-md-10">
              <SearchBar />
            </div>
            <div className="row my-5 NotesContainer">
              <div className="col-md-12 d-flex">
                <Note />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 fixed-bottom">
            <Fotter />
          </div>
        </div>
      </div>
    </div>
  );
}
