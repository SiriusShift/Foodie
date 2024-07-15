import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail
  //   sendPasswordResetEmail,
  //   sendEmailVerification,
  //   updatePassword,
} from "firebase/auth";

export const registerEmailPass = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailPass = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // add user to firestore
};

export const doSignInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // const credential = FacebookAuthProvider.credentialFromResult(result);
  // const accessToken = credential.accessToken; 
  const user = result.user;
}

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = async (email) => {
  console.log(email);
  return sendPasswordResetEmail(auth, email);
};

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };
