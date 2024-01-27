import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, FileInput, Select, TextInput } from 'flowbite-react';

export default function CreatePost() {





  return (

    <div className="p-3 max-w-3xl mx-auto min-h-screen">

        <h1 className="text-center text-3xl my-7 font-semibold">Make a New Post</h1>

        <form className="flex flex-col gap-4">

            <div className="flex flex-col gap-4 sm:flex-row justify-between">

                <TextInput type="text" 
                    placeholder="Title" 
                    required
                    id='title'
                    className='flex-1 '/>
                    <Select>
                        <option value="uncategorized">Pick a Topic</option>
                        <option value="rants">Rants</option>
                        <option value="politics">Politics</option>
                        <option value="security">Security</option>
                    </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                <FileInput type="file" accept='image/*' id='image' />
                <Button type="button" gradientDuoTone="purpleToBlue" size="sm" outline> Upload Image</Button>
            </div>

            <ReactQuill theme="snow" className="h-80 mb-10" placeholder='write something here, dummy' required/>
            <Button type="submit" gradientDuoTone="purpleToBlue" outline> Submit Post</Button>

        </form>
    
    
    </div>










  )
}