import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'

const Headers = () => {
    const {currentUser}=useSelector(state=>state.user)
  return (
    <header className='bg-slate-200 shadow-md' >
    <div className='flex justify-between items-center max-w-6xl max-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
            <span className='text-slate-500'>REAL</span>
            <span className='text-slate-700'>ESTATE</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-centre'>
            <input type="text" placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64'/> 
            <FaSearch/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
            <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
            <Link to='/profile'>
                {currentUser? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>):
                <li className='hidden sm:inline text-slate-700 hover:underline'>Sign</li>}
            </Link>
         </ul>
    </div>
     
    </header>
    )
}

export default Headers