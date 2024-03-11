import React, { useEffect, useState } from 'react'
import CourseDrawerNode from './CourseDrawerNode'


function CourseDrawer({ children }) {

    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     console.log("Search term ", searchTerm)
    // }, [searchTerm])

    function filterNodes(child) {
        if (searchTerm === '') {
            return true; // return true so that all children are displayed when there is no input
        }

        if (!child.props || !child.props.course.title) {
            console.log("No children or title found");
            return false; // when there is no matching children
        }

        const title = (child.props.course.title.toLowerCase() + '' + child.props.course.id.toString().toLowerCase()); // Add space between title and id
        const searchTermLower = searchTerm;
        // console.log("Title ", title);
        // console.log("search ", searchTermLower)


        return title.includes(searchTermLower);
    }




    return (
        <>
            <input
                className='w-full flex justify-center items-center text-center shadow-inner focus:shadow bg-white h-10 
                    focus:outline-none focus:border-b-[3px] border-b-[3px] border-white focus:border-red-500 transition-colors duration-300'
                placeholder='Search...'
                onChange={(e) => (
                    setSearchTerm(e.target.value.toLowerCase().split(" ").join('')) // makes the search term lowercase and rids the term of spaces
                )}
            >
            </input>
            <div className='flex flex-col items-center border-b w-full h-[270px] p-4 gap-3 overflow-y-auto '>
                {React.Children.toArray(children).filter(filterNodes)}
            </div>
        </>
    )
}

export default CourseDrawer