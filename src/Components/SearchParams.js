import {useState} from "react";

const SearchParams = () => {
    const [Location, setLocation] = useState(initState);
    return(
        <div className="veneto-wrapper">
            <form>
                <label htmlFor="location" className="label-wrapper">
                    Location
                    <input
                        id="location"
                        value={Location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default SearchParams;
