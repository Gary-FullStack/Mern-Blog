import { Button, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


export default function UserProfile() {
    const {currentUser} = useSelector((state) => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const filePickerRef = useRef();

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file){
            setImageFile(e.target.files[0]);
            setImageUrl(URL.createObjectURL(file));
        }       
    };
    useEffect(() => {
        if (imageFile){
            uploadImage();
        }
    }, [imageFile]);

    const uploadImage = async () => {
        console.log('loading...');
    };

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>My Profile</h1>
        <form className='flex flex-col gap-4'>
            <input type='file' accept='image/*' onChange={handleImage} ref={filePickerRef} className='hidden'/>
            <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' 
            onClick={() => filePickerRef.current.click()}>
                <img src={ imageUrl || currentUser.profilePicture} 
                alt="user avatar" 
                className='rounded-full w-full h-full object-cover border-8 border-[gray]'/>
            </div>
            <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
            
            <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} />

            <TextInput type='password' id='password' placeholder='password'/>

            <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
        </form>

        <div className='text-red-500 flex justify-between mt-5'>
            <span className='cursor-pointer'>Delete Account</span>
            <span className='cursor-pointer'>Sign Out</span>
        </div>

    </div>
  )
} 
