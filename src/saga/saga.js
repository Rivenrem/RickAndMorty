import { put, takeEvery } from "redux-saga/effects";

function* fetchLocations(action) {
  try {
    const locationsJSON = yield fetch(
      "https://rickandmortyapi.com/api/location"
    );
    const locations = yield locationsJSON.json();

    yield put({
      type: "locations/fetchLocations",
      locations: locations,
    });
  } catch (error) {
    yield put({
      type: "locations/fetchLocations",
      message: error.message,
    });
  }
}

function* mySaga() {
  yield takeEvery("fetchLocations", fetchLocations);
}

export default mySaga;
