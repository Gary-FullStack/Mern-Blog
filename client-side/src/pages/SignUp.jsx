import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";




export default function SignUp() {

  
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  // track the input fields in state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json(); 
      if (data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    }catch(error) {
      setErrorMessage(error.message);
      setLoading(false);

    }
  };  

  return (

    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/"
            className="font-bold dark:text-white text-4xl"
            >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-red-700 to-orange-600 rounded-lg text-white">
              Recon&apos;s Rants
            </span>
          </Link>
          <p className="text-sm mt-5">
            These are my thoughts on the world. Want to disagree with me? Sign up to post. 
          </p>
        </div>

        {/* right */}
        <div className="flex-1">  

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email" 
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password" 
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size={'sm'} />
                  <span className="pl-3">Loading...</span>
                </>                
              ) : 'Sign Up'}
            </Button>
          </form>

          <div className="flex gap-3 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500 hover:text-blue-700">
              Sign In </Link>
          </div>

          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )
          }




        </div>

      </div>
    </div>
  )
}
