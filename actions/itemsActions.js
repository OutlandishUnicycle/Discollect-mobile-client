const optimisticSetItems = (items) => (
  {
    type: 'GET_INITIAL_ITEMS',
    items, // property shorthand
  }
);

const itemActions = {
  getLatestListings: () => (
    (dispatch) => {
      const url = 'http://localhost:3000/api/getAllListings';
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((response) => {
        dispatch(optimisticSetItems(response));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  ),
  createNewItem: () => (
    (dispatch) => {

    }
  )
};

module.exports = itemActions;
