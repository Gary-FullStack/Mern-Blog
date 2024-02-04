import fuckoff from '../../assets/images/fuckoff.jpg'

export default function About() {
  return (
    <div className=' mt-2 mb-3 flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About this world class  blog ...
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              I spent damn near 45 hours, in total, coding this blog from scratch. 
              Dozens of components, many pages, shit ton of logic in the back end.

              Hell, theres likley a few errors here and there, I don&apos;t know.
            </p>

            <p>
              But yeah .. you scrubs can just one click install WordPress in 4 minutes and be a 
              blogging super-star within the hour.
            </p>
            
            <div className="p-7 flex-1">
             <p className='p-3'>We are not the same</p>
             <img src={fuckoff} alt='pissed off coder'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
