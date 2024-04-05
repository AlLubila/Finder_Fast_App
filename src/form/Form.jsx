import { useState } from "react";
import "./Form.css";

export const Form = ({ onVideoData }) => {
  const [inputValue, setInputValue] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("short")

  const handleSubmit = (e) =>{
    e.preventDefault()

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&order=rating&type=video&videoDuration=${selectedDuration}&videoType=any&key=AIzaSyDfA5tmuGZ6y3wpqXKYJKiftfff0RYWuGA`)
      .then((response) => response.json())
      .then((data) => {
        if (onVideoData) {
          onVideoData(data.items);
        }
      });
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>  
      <div className="container">
        <h1>Finder Fast</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title of video</label>
            <input type="text" name="title" id="title" value={inputValue} onChange={handleChange} />

            <label htmlFor="duration">Duration of video</label>
            <select name="duration" id="duration" value={selectedDuration} onChange={e => setSelectedDuration(e.target.value)}>
              <option value={"short"}>Under 4 min</option>
              <option value={"medium"}>4 - 20 min</option>
              <option value={"long"}>Over 20 min</option>
            </select>

            <button type="Submit">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};
