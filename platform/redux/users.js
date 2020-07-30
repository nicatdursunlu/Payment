// ACTION TYPES
const SET_USERS = "SET_USERS";

// SELECTORS
export const MODULE_NAME = "user";
export const selectUser = (state) => state[MODULE_NAME].users;

// REDUCER

const initialState = {
  users: [
    {
      id: 1,
      name: "Ada Lovelace",
      money: 1300.5,
      avatar:
        "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_1280.jpg",
      date: "24 May 20",
      type: "Debt",
      payWidth: "Credit Account",
    },
    {
      id: 2,
      name: "Mark Hopper",
      money: 720.25,
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/12/15/23/man-984504_1280.jpg",
      date: "30 July 20",
      type: "Credit",
      payWidth: "Credit Account",
    },
    {
      id: 3,
      name: "Margaret Hamilton",
      money: 420.83,
      avatar:
        "https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg",
      date: "25 Jan 18",
      type: "Debt",
      payWidth: "Credit Account",
    },
  ],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload,
      };

    default:
      return state;
  }
}

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
