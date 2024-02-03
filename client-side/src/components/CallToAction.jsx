import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Are you ready to learn the Truth?
            </h2>
            
            <Button gradientDuoTone='pinkToOrange' className='rounded-tl-xl rounded-bl-none'>
            <Link
          to='/search'
          className='text-xs sm:text-sm text-whitefont-bold hover:underline'
        >
          View all posts
        </Link>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://m.media-amazon.com/images/I/41s5HARbp+L._UXNaN_FMjpg_QL85_.jpg" />
        </div>
    </div>
  )
}