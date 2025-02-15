import { createSlice } from "@reduxjs/toolkit";
import courses from '../../data/courses.json'



const courseSlice = createSlice({
    name: "Course",
    initialState: {
        loading: true,
        courses: [...courses.courseData],
        error: "",
    },
    reducers: {
        enrollCourse: (state,  action ) => {
            const {index,name,email,id} = action.payload;
            console.log(name)
            state.courses[index].students?.push({id,name,email,progress:0})
        },
        markAsCompleted: (state, action) => {
            const { index, user } = action.payload;
            const course = state.courses[index];  
            const studentIndex = course.students?.findIndex((item) => item.id === user.id);
        
            if (studentIndex !== -1) {
               
                course.students[studentIndex].progress = 100;
            }
            console.log(studentIndex, index);
        }
        
    },
    
});

export const { enrollCourse,markAsCompleted } = courseSlice.actions;
export default courseSlice.reducer;
