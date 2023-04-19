import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";


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

export default loginUser