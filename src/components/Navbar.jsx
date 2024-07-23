
import head from '../../public/head.png'


function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#682381] to-[#A326CE] max-w-screen-xl mx-auto justify-center h-24">
    <div className="flex justify-between align-middle w-10/12 ml-10">
        <div className="flex gap-3 justify-center text-center m-5 ml-10">
          <img src={head} className='h-12 w-12 ' />
          <h1 className='font-bold text-3xl text-white'>Meme Generator</h1>
        </div>

        <p className="text-white font-normal text-center justify-items-center m-7">React Course - Project 3</p>

    </div>
    </div>
  )
}

export default Navbar