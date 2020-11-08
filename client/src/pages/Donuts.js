import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function Donuts() {
  // Setting our component's initial state
  const [donuts, setDonuts] = useState([])


  useEffect(() => {
    loadDonuts()
  }, [])

  function loadDonuts() {
    API.getDonuts()
      .then(res => setDonuts(res.data))
      .catch(err => console.log(err));
  };

  function deleteDonut(id) {
    API.deleteDonut(id)
      .then(res => loadDonuts())
      .catch(err => console.log(err));
  }

  return (
      <div className="Donuts">
          {donuts.length ? (
            <List>
              {donuts.map(donut => (
                <ListItem key={donut._id}>
                  <strong>
                    {donut.title}
                  </strong>
                  <DeleteBtn onClick={() => deleteDonut(donut._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
  );
}


export default Donuts;
