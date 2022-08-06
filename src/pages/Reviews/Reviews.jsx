import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "service/movie-service";
import { ReviewsSt, ReviewSt, AuthorSt, ContentSt } from "./Reviews.styled";
import ErrorMessage from "components/ErrorMessage";

const Reviews = () => {
    const [reviewsInformation, setReviewsInformation] = useState([]);

    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) {
            return;
        }
        
        // получает информацию о актере
        const getInformation = async () => {
            try {
                const dataReviews = await getMovieReviews(movieId);
                setReviewsInformation(dataReviews)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getInformation();
    }, [movieId])

    const isReviewsInformationEmpty = reviewsInformation.length === 0;

    return <>
        {isReviewsInformationEmpty ? <ErrorMessage text="There is no reviews." > ErrorMessage</ErrorMessage > 
        : <ReviewsSt>{reviewsInformation.map(({ author, content }) => (<ReviewSt key={author}>
        <AuthorSt>{author}</AuthorSt>
        <ContentSt>{content}</ContentSt>
    </ReviewSt>))}</ReviewsSt>}</>

}

export default Reviews;