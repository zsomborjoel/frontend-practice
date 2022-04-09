import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import searchRepositories from "../state/action-creators";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { data, error, loading } = useTypedSelector((state: any) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    };

    return <div >
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading &&
            data.map((name: any) => <div key={name}>{name}</div>)
        }
    </div>;
};

export default RepositoriesList;