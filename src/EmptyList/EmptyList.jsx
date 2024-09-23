import "./empty-list.css"

const EmptyList = ({image, query}) => {
    return (
        <div className="empty-list-container">
            <h1>{query !== "" ? `Your search for '${query}' returned no result found.` : "Please search a movie"}</h1>
            <img 
                src={image}
                alt="Empty List" 
                className="empty-list-svg" 
            />
        </div>
    );
};

export default EmptyList;