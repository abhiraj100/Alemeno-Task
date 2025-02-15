import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { signup } from '../../redux/slices/user.slice'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
const Signup = ({mode,setMode}) => {
    const dispatch=useDispatch()
    const  handleSubmit=(e)=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        const obj={}
        obj.email=formdata.get('email')
        obj.name=formdata.get('name')
        console.log(obj)
        dispatch(signup(obj))
        setMode(false)
        toast.success("user successfully logged in")

    }
    return (
        <div className={`bg-slate-700/15 fixed top-0 left-0 w-full h-dvh z-10 place-items-center ${mode?"grid":"hidden"}`}>
            <div className='bg-white p-6 rounded-2xl max-w-xs w-full'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold '>Sign up</h2>
                    <RxCross2 onClick={()=>setMode(false)}/>
                </div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 my-5'>
                    <input
                        type="text"
                        name='name'
                        placeholder='Your name'
                        className='text-xs border border-slate-400 p-2 outline-none w-full rounded-lg'
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='Your email'
                        className='text-xs border border-slate-400 p-2 outline-none w-full rounded-lg'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Your password'
                        className='text-xs border border-slate-400 p-2 outline-none w-full rounded-lg'
                    />
                    <button 
                        className='text-sm px-8 py-2 rounded-lg bg-purple-200 text-purple-700 mt-5'
                        >
                        Register
                    </button>
                </form>
                <div className='text-xs text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aperiam.</div>
            </div>
        </div>
    )
}

export default Signup
