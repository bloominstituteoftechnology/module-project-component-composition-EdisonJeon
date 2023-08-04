import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function fetchPhoto() {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((res) => {
          console.log(res.data);
          console.log("testing from inside the axios call.");
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }

    fetchPhoto();
  }, []);

  if (!data) return "Fetching Photo of the Day...";
  return (
    <div>
      <section>
        <Card data={data} />
      </section>
    </div>
  );
}

export default App;
