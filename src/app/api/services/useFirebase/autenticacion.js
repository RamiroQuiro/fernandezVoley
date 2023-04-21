import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";

const userAutenticado = () => {
  onAuthStateChanged(auth, (user) => {
    //se eu realmente autenticar, retorna true e nao false
    if (user) {
      return user.uid;
    } else {
      return false;
    }
  });
};

const loginUser = async (email, password, isAction) => {
  const login = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      toast.success("Ingreso Exitoso");
      isAction(true);
      // ...
    })
    .catch((error) => {
      toast.error("Error, volver a intentar");
      isAction(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
const provider = new GoogleAuthProvider();

const sigInGoogle = async () => {
  const credential = await signInWithRedirect(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      const sigin = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      // ...
    });
};

export { loginUser, userAutenticado, sigInGoogle };
