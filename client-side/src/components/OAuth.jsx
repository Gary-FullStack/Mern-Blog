import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";

export default function OAuth() {

    const handleGooleClick = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        try{
            const resultsFromGoogle = await signInWithPopup(auth, provider);

        }catch(error){
            console.log(resultsFromGoogle);
        }
    }

    

  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGooleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2"/>
        <span className="pl-3">Sign In With Google</span>
    </Button>
  )
}
