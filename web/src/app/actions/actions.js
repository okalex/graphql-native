'use strict'

const startingRequest = () => {
  return {
    type: "STARTING_REQUEST"
  }
};

const finishedRequest = (response) => {
  return {
    type: "FINISHED_REQUEST",
    response: response
  }
};

const runQuery = (query) => {
  return (dispatch) => {
    dispatch(startingRequest());
    let result = query().then(response => {
      dispatch(finishedRequest(response))
    });
    return result;
  }
}

module.exports = {
  runQuery
}
