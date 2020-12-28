import _ from "lodash";
import {
  CREATE_EVENT,
  READ_EVENTS,
  DELETE_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
} from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case CREATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case READ_EVENTS:
    case UPDATE_EVENT:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENTS:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
