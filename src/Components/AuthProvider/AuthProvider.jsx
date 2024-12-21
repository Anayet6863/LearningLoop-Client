import { Children, createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.onfig";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  
  // State for managing firebase:
  const [user, setUser] = useState(null);
  //console.log(user);
  const provider = new GoogleAuthProvider();
  // FirebaseAuthentication:
  const handleLogOut = () => {
    return signOut(auth);
  };
  const handleRegister = (email, password) => {
     //console.log(email,password);
    return createUserWithEmailAndPassword(auth,email,password)
  };
  const handleLogin = (email, password) => {
     //console.log(email,password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin =async () => {
    return await signInWithPopup(auth, provider);
  };
  const manageProfile = (name, photo) => {
   // console.log(name, photo);
   return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

const handleResetPassword = (email)=>{
 return sendPasswordResetEmail(auth, email)
}
  const AuthInfo = {
    handleLogin,
    handleGoogleLogin,
    handleLogOut,
    handleRegister,
    user,
    manageProfile,
    loading,
    handleResetPassword,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
