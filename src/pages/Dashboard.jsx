import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import CourseCard from '../components/Card/CourseCard';
import { markAsCompleted } from '../redux/slices/course.slice';


const Dashboard = () => {
    const { isLoggedIn, user } = useSelector((state) => state.user);
    const data = useSelector((state) => {
        const courses = state.courses.courses;
        
        
        const filtered = courses.filter((course) => {
            return course.students.some((item) => item?.id === user.id);
        });
        return filtered;
    });
    console.log(data)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
            toast.error("Please login.");
        }
    }, [isLoggedIn, navigate]);

    const handleComplete = (index) => {
        dispatch(markAsCompleted({index,user}))
        toast.success(`Marked course ${name} as completed.`);
    };

    return (
        <div className='p-4 md:p-10 bg-slate-100 min-h-dvh'>
            <h1>Hey, {user.name}</h1>
            <div>
                <h3 className='text-xl border-b py-2 mb-2'>My Courses</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-stretch'>
                    {data.length > 0 ? (
                        data.map((item, index) => {
                            
                            const userProgress = item.students.find(student => student.id === user.id)?.progress || 0;
                            
                            return (
                                <div key={index} className='relative group'>
                                    <div className='absolute bottom-5 left-2 group-hover:block hidden z-10  text-purple-700 bg-purple-200 text-xs rounded'>
                                        {userProgress!=100&&<button className='px-2  py-1' onClick={() => handleComplete(item.id-1)}>Mark as Completed</button>}
                                    </div>

                                    <CourseCard item={item} />
                                    <div className='w-full bg-gray-300 h-1 rounded-lg'>
                                        <div
                                            className='bg-purple-500 h-full rounded-lg transition-all duration-300 ease-in-out'
                                            style={{ width: `${userProgress}%` }}  
                                        ></div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No courses enrolled.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
