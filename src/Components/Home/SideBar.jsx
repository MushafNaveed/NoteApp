import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveColor, NoteAdd } from "../../redux/NodeSlice";
import ScrollReveal from 'scrollreveal';

export default function SideBar(props) {

  useEffect(() => {
    ScrollReveal().reveal('.Title, .AddButton, .Colors', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
      opacity: 0,
    });
  }, []);





  const Notes = useSelector((state) => state.AddNote.Notes);
  const ActiveId = useSelector((state) => state.AddNote.ActiveId);
  const checked = useSelector((state) => state.AddNote.checked);
  const dispatch = useDispatch();
  const [AlertShow, setAlertShow] = useState(false);
  const handleActiveBtn = (id, color) => {
    dispatch(ActiveColor({ id, color }));
  };

  const handleAddBtn = () => {
    if (checked) {
      dispatch(NoteAdd());
      setAlertShow(false);
    } else {
      setAlertShow(true);
    }
  };

  if (typeof props.Title !== "string") {
    throw new Error("Title must be a string");
  }

  return (
    <div className="container-fluid">
      {AlertShow ? (
        <div className="BtnAlert">
          <p>Please select a color first.</p>
          <button className="btn Alert btn-primary" onClick={()=>{setAlertShow(false)}}>Okay</button>
        </div>
      ): null
      }

      <div className="SideBar position-relative">
        <div className="Title">
          <h5>{props.Title}</h5>
        </div>
        <div className="AddButton">
          <button
            className="btn btn-primary rounded-circle my-4"
            onClick={handleAddBtn}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="Colors mt-5 my-5 py-5 d-flex flex-column align-items-center ">
          <button
            className={`YellowBtn ${
              ActiveId === 1 ? "active" : ""
            } btn-primary rounded-circle my-1 p-2`} id="YBtn"
            onClick={() => handleActiveBtn(1, "#ffde4d")}
          >
            123
          </button>
          <button
            className={`PinkBtn ${
              ActiveId === 2 ? "active" : ""
            } btn-primary rounded-circle my-1 p-2`}
            onClick={() => handleActiveBtn(2, "#ff7ee2")}
          >
            123
          </button>
          <button
            className={`GreenBtn ${
              ActiveId === 3 ? "active" : ""
            } btn-primary rounded-circle my-1 p-2`}
            onClick={() => handleActiveBtn(3, "#9cdba6")}
          >
            123
          </button>
          <button
            className={`BrownBtn ${
              ActiveId === 4 ? "active" : ""
            } btn-primary rounded-circle my-1 p-2`}
            onClick={() => handleActiveBtn(4, "#fd9b63")}
          >
            123
          </button>
        </div>
      </div>
    </div>
  );
}
