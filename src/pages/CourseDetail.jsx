import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { enrollCourse } from '../redux/slices/course.slice'

const CourseDetail = () => {
    let { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        const course = state.courses.courses
        return course[id-1]
    })
    const {isLoggedIn,user} = useSelector((state) => {
        return state.user
    })
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const handleEnroll =()=>{
        if(!isLoggedIn) {
            toast.error("Please log in")
            return
        }
        const index=id-1
        console.log(index)
        dispatch(enrollCourse({...user,index}))
        toast.success("Enrolled successfully..")
    }
    return (
        <div>
            <div className=''>
                <div className='p-4 sm:6 md:p-16  flex flex-col gap-5 bg-slate-50'>
                    <p className='text-4xl'>{data.name}</p>
                    <p className='text-slate-700'><span className='font-semibold'>Instructor:</span> {data.instructor}</p>
                    <div className='flex flex-col gap-3'>
                        <button
                            className='shadow w-full sm:w-fit text-sm text-purple-700 bg-purple-200 disabled:cursor-not-allowed disabled:text px-8 py-2 rounded'
                            disabled={data.enrollmentStatus == "Closed"}
                            onClick={handleEnroll}>
                            Enroll for free
                        </button>
                        <p><span className='font-semibold '>{data.students?.length}</span> students allready enrolled</p>
                    </div>
                    <p><span className='font-semibold'>Location:</span> {data.location}</p>
                    <div className='flex items-center justify-end gap-2  text-xs md:text-base'>
                        <p>EnrollmentStatus:</p>
                        <span className={`px-4 py-1 rounded-full font-semibold ${data.enrollmentStatus == "Open" ? "text-green-700 bg-green-100" : ""}`}>{data.enrollmentStatus}</span>
                    </div>
                </div>
                <div className='p-4 sm:6 md:p-16  flex flex-col gap-5 '>
                    <div className=' max-w-md flex flex-col gap-2  '>
                        <p className=' font-semibold border-b-2 py-2 '>Description </p>
                        <p className='text-sm'>
                            {data.description}
                        </p>
                    </div>
                    <div>
                        <p>Duration: {data.duration}</p>
                    </div>
                    <div >
                        <p >Prerequisites</p>
                        <div className='flex gap-3 my-2 items-cener flex-wrap'>
                            {
                                data.prerequisites?.map((item, index) => (
                                    <div key={index} className='text-slate-700 bg-slate-200 px-2 py-1 text-xs rounded-full'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>{data.schedule}</div>
                    <div>
                        <p className='my-3 font-semibold'>What will you learn</p>
                        <div className='flex flex-col gap-3 max-w-md '>
                            {
                                data.syllabus.map((item, index) => (
                                    <div className='rounded-xl overflow-hidden' key={index} >
                                        <p
                                            className='font-semibold p-2 bg-slate-100 cursor-pointer  '
                                            onClick={() => handleToggle(index)}>
                                            {item.week + " " + item.topic}
                                        </p>
                                        {openIndex === index && (
                                            <p className='bg-slate-50 p-2 transition-all duration-1000 ease-in-out text-xs md:text-sm'>
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CourseDetail
