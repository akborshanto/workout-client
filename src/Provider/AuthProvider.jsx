import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import auth from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPablic from "../Hooks/useAxiosPpablic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPablic();

  const googleProvider = new GoogleAuthProvider();

  // creat user by email & pass
  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user by email & password

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   upadata user profile and name
  const updateUserProfile = async (displayName, photoURL) => {
    try {
      setLoading(true); 
      const profileData = {};
      if (displayName) {
        profileData.displayName = displayName;
      }
      if (photoURL) {
        profileData.photoURL = photoURL;
      }
      await updateProfile(auth.currentUser, profileData);
      console.log("User profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
  
  
  // sign in with google
  const singInUserByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic
          .post("/jwt", userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          })
          .catch((err) => console.log(err));
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  });

  const authInfo = {
    setLoading,
    loading,
    creatNewUser,
    user,
    updateUserProfile,
    singInUserByGoogle,
    signOutUser,
    signInUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
