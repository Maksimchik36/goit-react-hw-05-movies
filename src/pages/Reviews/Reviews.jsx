import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "service/movie-service";
import { ReviewsSt, ReviewSt, AuthorSt, ContentSt, DataSt } from "./Reviews.styled";

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
                console.log("dataReviews", dataReviews);
                setReviewsInformation(dataReviews)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getInformation();
     }, [movieId])

    console.log("reviewsInformation", reviewsInformation);

    return <ReviewsSt>Reviews: {reviewsInformation.map(({ author, content, updated_at }) => (<ReviewSt key={author}>
        <AuthorSt>{author}</AuthorSt>
        <ContentSt>{content}</ContentSt>
        <DataSt>{updated_at}</DataSt>

        </ReviewSt>))}</ReviewsSt>;}

export default Reviews;