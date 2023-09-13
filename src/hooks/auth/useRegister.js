import { createUserWithEmailAndPassword } from "firebase/auth";
import { useReducer } from "react";
import { auth } from "../../services/firebase/auth";

const actions = {
  start: "START",
  fulfill: "FULFILL",
  reject: "REJECT",
};

const initialRegisterPayload = {
  data: null,
  loading: false,
  error: null,
};
const registerReducer = (state, action) => {
  if (action === actions.start) {
    return {
      data: null,
      loading: true,
      error: null,
    };
  }
  if (action === actions.fulfill) {
    return {
      ...initialRegisterPayload,
      data: action.payload.data,
    };
  }
  if (action === actions.reject) {
    return {
      ...initialRegisterPayload,
      error: action.payload.error,
    };
  }
};

const useRegister = () => {
  const [registerPayload, dispatch] = useReducer(
    initialRegisterPayload,
    registerReducer
  );
  const registerHandler = async (email, password) => {
    dispatch({ type: actions.start });
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: actions.fulfill, payload: { data: response.user } });
    } catch (error) {
      dispatch({ type: actions.reject, payload: { error } });
    }
  };
  return { registerPayload, registerHandler };
};

export default useRegister;
