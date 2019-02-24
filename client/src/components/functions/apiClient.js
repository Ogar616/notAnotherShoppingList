const server = "http://35.202.93.206";

const getItems = dispatch => {
  fetch(server + "/store/", {
    mode: "cors",
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .then(store => {
      return dispatch(store.items);
    });
};

const getSelected = dispatch => {
  fetch(server + "/store/selected", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .then(checked => {
      return dispatch(checked);
    });
};

const changeItems = (dispatch, body) => {
  fetch(server + "/store/items", {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(body)
  })
    .then(response => {
      return response.json();
    })
    .then(items => {
      return dispatch(items);
    })
    .catch(error => console.log("Ooops", error));
};
const changeSelected = (dispatch, body) => {
  fetch(server + "/store/selected/", {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(body)
  })
    .then(response => {
      return response.json();
    })
    .then(selected => {
      return dispatch(selected);
    })
    .catch(error => console.log("Ooops", error));
};

const addNewItem = (dispatch, body) => {
  fetch(server + "/store/items", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(body)
  })
    .then(response => {
      return response.json();
    })
    .then(item => {
      return dispatch(item);
    })
    .catch(error => console.log("Ooops", error));
};

const deleteItems = (dispatch, activeItem) => {
  fetch(server + "/store/", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(activeItem)
  })
    .then(response => {
      return response.json();
    })
    .then(state => {
      return state;
    })
    .catch(error => console.log("Ooops", error));
};

const editItem = (newItem, activeItem) => {
  fetch(server + "/store/", {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({activeItem: activeItem, newItem: newItem})
  })
    .then(response => {
      return response.json();
    })
    .then(state => {
      return state;
    })
    .catch(error => console.log("Ooops", error));
};

const getCosts = dispatch => {
  fetch(server + "/store/costs", {
    mode: "cors",
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .then(costs => {
      return dispatch(costs);
    });
};

const addCosts = (dispatch, costs) => {
  fetch(server + "/store/costs", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(costs)
  })
    .then(response => {
      return response.json();
    })
    .then(state => {
      return state;
    })
    .catch(error => console.log("Ooops", error));
};

export {
  getItems,
  getSelected,
  changeSelected,
  changeItems,
  addNewItem,
  deleteItems,
  editItem,
  getCosts,
  addCosts
};