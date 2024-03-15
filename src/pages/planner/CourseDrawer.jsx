import React, { useEffect, useState } from 'react'
import CourseDrawerNode from './CourseDrawerNode'
import ErrorMessage from '../../components/ErrorMessage';


function CourseDrawer({ children }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const matchingResult = React.Children.toArray(children).filter(filterNodes);
        setIsError(matchingResult.length === 0);
    }, [searchTerm, children])


    /**
     * 
     * @param {Object} child: a course object that is represented as a React DOM element in the drawer
     * @returns {Boolean} returns the search results matching the search term
     */
    function filterNodes(child) {
        if (searchTerm === '') {
            return true; // return true so that all children are displayed when there is no input
        }

        if (!child.props || !child.props.course.title) {
            console.log("No children or title found");
            return false;
        }

        // setIsError(false)
        const title = (child.props.course.title.toLowerCase() + '' + child.props.course.id.toString().toLowerCase()); // Add space between title and id
        const searchTermLower = searchTerm;
        // console.log("Title ", title);
        // console.log("search ", searchTermLower)

        return title.includes(searchTermLower);
    }

    return (
        <>
            <input
                className={`w-full flex justify-center items-center text-center shadow-inner bg-white h-10 
                    focus:outline-none focus:border-b-[3px] border-b-[3px] border-white  ${ isError ? `focus:border-red-500` : `focus:border-gray-100`} transition-colors duration-300`}
                placeholder='Search Course'
                onChange={(e) => (
                    setSearchTerm(e.target.value.toLowerCase().split(" ").join('')) // makes the search term lowercase and rids the term of spaces
                )}
            >
            </input>
            <div className='flex flex-col items-center border-b w-full h-[270px] p-4 gap-3 overflow-y-auto'>
                {React.Children.toArray(children).filter(filterNodes)}
                {isError && <ErrorMessage errorMessage={"No results"} errorState={isError} color={"red"} background={false}/>}
            </div>
        </>
    )
}

export default CourseDrawer