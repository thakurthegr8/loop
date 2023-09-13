import { initializeApp } from "firebase/app";
import config from "..";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const app = initializeApp(config);

export const auth = getAuth(app);

export const mapErrorMessage = (errorCode) => {
  console.log(errorCode);
  const BASE = "Firebase: Error";
  switch (errorCode) {
    case `${BASE} (auth/invalid-email).`:
      return "Invalid email address";
    case `${BASE} (auth/user-not-found).`:
      return "User not found";
    // Add more cases as needed
    default:
      return "An error occurred";
  }
};

export const signInWithGoogle = async () => {
  const googleProviderInstance = new GoogleAuthProvider();
  const response = {
    data: null,
    error: null,
  };
  try {
    const data = await signInWithPopup(auth, googleProviderInstance);
    response.data = data?.user;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export const signInWithCredentials = async (email, password) => {
  const response = {
    data: null,
    error: null,
  };
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    response.data = data?.user;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export const signOutLocal = async () => {
  const response = {
    data: null,
    error: null,
  };
  try {
    const data = await signOut(auth);
    response.data = data?.user;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export const registerWithCredentials = async (email, password) => {
  const response = {
    data: null,
    error: null,
  };
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    response.data = data?.user;
  } catch (error) {
    response.error = error;
  }
  return response;
};
