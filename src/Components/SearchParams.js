import {useEffect, useState} from "react";
import Pet from "../Components/Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [Location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [pets, setPets] = useState([]);
    const [breed, setBreed] = useState("");
    const breeds = [];

    useEffect(() => {
        // eslint-disable-next-line no-undef
        requestPets();
    },[]);// eslint-disable-line react-hooks/exhaustive-deps

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function requestPets() {
        const res = await fetch(
            // eslint-disable-next-line no-restricted-globals
            `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={Location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option>
                                key={animal}
                                value={animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                       disabled={!breeds.length}
                       id="breed"
                       value={breed}
                       onChange={(e) => setBreed(e.target.value)}
                       onBlur={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button className="btn btn-primary">Submit</button>
            </form>

            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            };
        </div>
    );
};
export default SearchParams;
