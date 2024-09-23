import "./error-component.css"

const ErrorComponent = ({image,message}) => {
    return (
        <div className="error-container">
            <h1>{message}</h1>
            <img 
                src={image}
                alt="Empty List" 
                className="error-svg" 
            />
        </div>
    );
}

export default ErrorComponent