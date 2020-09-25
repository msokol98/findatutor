import React, { useState, useRef, useCallback } from 'react';
import Tutor from 'components/general/tutor';
import useFetchTutors from 'hooks/useFetchTutors';
import './styles.css';
import Filters from 'components/common/filters';
import subjects from 'components/common/filters/subjects';

const Tutors = () => {

    const [pageNumber, setPageNumber] = useState(0);

    const {
        loading,
        error,
        tutors,
        hasMore
    } = useFetchTutors(pageNumber);

    const observer = useRef()
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
            <Filters data={subjects} />
            <div className='tutors-view'>
                {tutors.map((tutor, idx) => {
                    if (tutors.length === idx + 1) 
                        return(
                            <div key={idx} ref={lastTutorRef} className='tutor-wrapper has-background-white'>
                                <Tutor tutor={tutor} />
                            </div>
                        )
                    
                    return(
                        <div key={idx} className='tutor-wrapper has-background-white'>
                            <Tutor tutor={tutor} />
                        </div>
                    )
                })}
                {loading && <div>Loading...</div>}
                {error && <div>Error</div>}
            </div>
        </>
    ) 
}
 
export default Tutors;