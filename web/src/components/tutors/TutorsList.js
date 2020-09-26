import React, { useRef, useState, useCallback } from 'react';
import Tutor from './Tutor';
import useFetchTutors from './useFetchTutors';
import Loading from 'components/common/LoadingSpinner';

const TutorList = () => {

    const [pageNumber, setPageNumber] = useState(0);

    const {
        loading,
        error,
        tutors,
        hasMore
    } = useFetchTutors(pageNumber);

    const observer = useRef();

    const lastTutorRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    return(
        <>
            {tutors.map((tutor, idx) => {
                if (tutors.length === idx + 1) {
                    return(
                        <div key={idx} ref={lastTutorRef}>
                            <Tutor tutor={tutor} />
                        </div>
                    )
                }
            
                return(
                    <div key={idx}>
                        <Tutor tutor={tutor} />
                    </div>
                )
            })}

            {error && <div>Error...</div>}
            {loading && <Loading />}
        </>
    )
}
 
export default TutorList;