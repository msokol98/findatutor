import { useEffect, useState } from 'react'
import axios from 'axios'
import apiHost from 'config';

export default function useFetchTutors(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tutors, setTutors] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: 'GET',
      url: `${apiHost}/tutors`,
      params: { projection: 1, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(async res => {

        const moreTutors = await fetchLazyEntities(res.data._embedded.tutors);
        setTutors(prevTutors => [...prevTutors, ...moreTutors]);
        setHasMore(pageNumber < res.data.page.totalPages);
        setLoading(false);

    }).catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
    });

    return () => cancel();
  }, [pageNumber]);

  return { loading, error, tutors, hasMore }
}


const fetchLazyEntities = async tutors => {
    const the_tutors =  await Promise.all(tutors.map(async (tutor) => {

        const BASE_URL = `${apiHost}/tutors/${tutor.id}/`;
        const locationPromise = axios.get(BASE_URL + 'location');
        const subjectsPromise = axios.get(BASE_URL + 'subjects');
        const reviewsPromise = axios.get(BASE_URL + 'reviews')

        let [location, subjects, reviewsDetails] = await Promise.all([locationPromise, subjectsPromise, reviewsPromise]);

        location = location.data;
        subjects = subjects.data._embedded.subjects;
        reviewsDetails = calcReviewsDetails(reviewsDetails.data._embedded.reviews);
        
        return { ...tutor, location, subjects, reviewsDetails };
    }))

    return the_tutors;

}

const calcReviewsDetails = reviewsDetails => {
    const sum = reviewsDetails.reduce((a, b) => a + (b.rating || 0), 0);
    const num = reviewsDetails.length;
    return {
        avgRating: sum / num,
        num: num
    }
}