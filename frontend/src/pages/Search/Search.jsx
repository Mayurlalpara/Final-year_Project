/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import './Search.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodItem from '../../components/FoodItem/FoodItem';
import { StoreContext } from '../../context/Storecontext';

const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const { food_list } = useContext(StoreContext);

    const handleSearch = () => {
        setLoading(true);
        if (search.trim() === "") {
            setResults(food_list);
        } else {
            const filteredResults = food_list.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase())
            );
            setResults(filteredResults);
        }
        setLoading(false);
    };

    useEffect(() => {
        setResults(food_list);
    }, [food_list]);

    return (
        <div className="search-container">
            <ToastContainer />
            <div className="search-bar">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for food..."
                    className="search-input"
                />
                <button onClick={handleSearch} type='button' className="search-button">Search</button>
            </div>
            {loading && <p className="loading-message">Loading...</p>} {/* Added class */}
            <div className="search-results">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index} className="food-item-wrapper"> {/* Wrapper for transition */}
                            <FoodItem
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        </div>
                    ))
                ) : (
                    !loading && <p className="no-results">No results found</p>
                )}
            </div>
        </div>
    );
};

export default Search;