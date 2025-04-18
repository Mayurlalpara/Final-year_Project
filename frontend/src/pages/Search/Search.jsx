/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect, useCallback } from 'react';
import './Search.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodItem from '../../components/FoodItem/FoodItem';
import { StoreContext } from '../../context/StoreContext.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

const Search = () => {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const { food_list } = useContext(StoreContext);

    // Debounce search input to avoid unnecessary searches
    const debouncedSearch = useCallback(() => {
        if (search.trim() === "" && category === "All") {
            setResults(food_list);
        } else {
            const filteredResults = food_list.filter(item =>
                (category === "All" || item.category.toLowerCase() === category.toLowerCase()) &&
                (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase()))
            );
            setResults(filteredResults);
        }
        setLoading(false);
    }, [search, category, food_list]);

    useEffect(() => {
        setResults(food_list);
    }, [food_list]);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(debouncedSearch, 300); // Debounce for 300ms
        return () => clearTimeout(timer);
    }, [search, category, debouncedSearch]);

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
                <button onClick={debouncedSearch} type='button' className="search-button">Search</button>
            </div>
            {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
            <br/>
            <h2>Your Favorite Flavors, Just a Click Away!!</h2>
            <br/>
            <br/>
            {loading && <div className="spinner">Loading...</div>}
            <div className="search-results">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index} className="food-item-wrapper">
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
