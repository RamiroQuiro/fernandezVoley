import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";


const userAutenticado=()=>{
   onAuthStateChanged(auth,(user)=>{
           //se eu realmente autenticar, retorna true e nao false
           if(user){
            return user.uid;
            
        }else{
            return false
           }
    })
   
}

const loginUser=async(email,password,isAction)=>{

 const login=await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    toast.success('Ingreso Exitoso')
    isAction(true)
    // ...
})
.catch((error) => {
      toast.error('Error, volver a intentar')
    isAction(false)
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});
}

const sigInGoogle=async()=>{
  const provider=new GoogleAuthProvider()
const sigInGoogle=await signInWithPopup(auth,provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export  {loginUser,userAutenticado,sigInGoogle}