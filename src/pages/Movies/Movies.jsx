import { useState } from "react";
import Form from "components/Form";
import Button from "components/Button";

const Movies = () => {
    const [query, setQuery] = useState('')
    const [isMovie, setIsMovie] = useState(false);
    const [isCast, setIsCast] = useState(false);
    const [isReviews, setIsReviews] = useState(false);

    // перезаписывает значение query в state (App)
  const onSubmit = (query) => {
      setQuery(query);
      setIsMovie(true);
  }

    return (<>
        <h3>Movies</h3>
        {!isMovie && <Form onSubmit={onSubmit}></Form>}
        {isMovie && <Button text = "Go back"></Button>}
        
            </>    
    );
}

export default Movies;