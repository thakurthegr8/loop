import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
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
  console.log(action);
  if (action.type === actions.start) {
    return {
      data: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === actions.fulfill) {
    return {
      ...initialRegisterPayload,
      data: action.payload.data,
    };
  }
  if (action.type === actions.fulfill)
    return {
      ...initialRegisterPayload,
      error: action.payload.error,
    };
};

const useRegister = () => {
  const [registerPayload, dispatch] = useReducer(
    registerReducer,
    initialRegisterPayload
  );
  const sendVerificationMail = async (user) => {
    const authCodeSettings = {
      url: `http://localhost:3000/?email=${user.email}`,
    };
    const verification = await sendEmailVerification(user, authCodeSettings);
    console.log(verification);
  };
  const registerHandler = async (email, password) => {
    dispatch({ type: actions.start });
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: actions.fulfill, payload: { data: response.user } });
      await sendVerificationMail(response.user);
    } catch (error) {
      dispatch({ type: actions.reject, payload: { error } });
    }
  };
  return { registerPayload, registerHandler, sendVerificationMail };
};

export default useRegister;
