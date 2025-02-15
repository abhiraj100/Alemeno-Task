import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const CourseCard = ({ item }) => {
    return (
        <div className='p-3 relative rounded overflow-hidden group bg-white min-h-36 flex flex-col  lg:flex-row gap-2 grid-cols'>
            <div className='md:flex-1'>
                <img 
                    src={item.thumbnail} 
                    className="object-cover rounded w-full h-full" 
                    alt={item.name} 
                />
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='p-1'>
                    <p className='text-sm font-semibold'>{item.name}</p>
                    <p className='text-xs text-slate-400'>~{item.instructor}</p>
                </div>
                <div className='flex-1'>
                    <p className='text-sm text-slate-700'>{item.description}</p>
                </div>
                <div className='text-xs flex justify-end mt-3 text-purple-600'>
                    <Link
                        to={`/courses/${item.id}`}
                        className='flex items-end gap-1 font-semibold'>
                        <span>view course</span>
                        <IoIosArrowForward />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
