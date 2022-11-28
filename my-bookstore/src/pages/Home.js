import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BookContext } from "../context/books";

const Home = () => {
    const { featured } = useContext(BookContext);
    if (!featured.length) {
        return <h3>No Featured Books</h3>
    }
    return (
        <>
            
            <section className="featured">
                <header className="featured-head">
                    <h3>Bestsellers</h3>
                </header>
                <div className="books featured-list">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="book featured-book">
                            <div className="book-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`books/${id}`} className="btn book-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;