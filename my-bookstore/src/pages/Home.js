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
                    <article key={"c5f2e5e3-9a2e-45c1-b8e9-e6b9cd39ab7c"} className="book featured-book">
                        <div className="book-image">
                            <img src={"https://mybookstorefcae635fe0b84fe5b7e27d5b5833d248205228-prod.s3.us-east-1.amazonaws.com/public/images/ca7af14d-c6ae-4714-8a67-de85ecad4e4dbook1.png"} alt={"Book1"} />
                        </div>
                        <Link to={`books/${"c5f2e5e3-9a2e-45c1-b8e9-e6b9cd39ab7c"}`} className="btn book-link">details</Link>
                    </article>
                    <article key={"198643ad-b0f6-4a03-a572-5c1a4b1f2801"} className="book featured-book">
                        <div className="book-image">
                            <img src={"https://mybookstorefcae635fe0b84fe5b7e27d5b5833d248205228-prod.s3.us-east-1.amazonaws.com/public/images/d2d52e62-d1e1-4d6a-97d4-1f17d7fedb98book2.png"} alt={"Book2"} />
                        </div>
                        <Link to={`books/${"198643ad-b0f6-4a03-a572-5c1a4b1f2801"}`} className="btn book-link">details</Link>
                    </article>
                    <article key={"68b1c5f8-11bf-4ae9-bdfa-e2a45faae496"} className="book featured-book">
                        <div className="book-image">
                            <img src={"https://mybookstorefcae635fe0b84fe5b7e27d5b5833d248205228-prod.s3.us-east-1.amazonaws.com/public/images/0d4145c8-709d-42bf-a55e-75625c1c5a4fbook3.png"} alt={"Book3"} />
                        </div>
                        <Link to={`books/${"68b1c5f8-11bf-4ae9-bdfa-e2a45faae496"}`} className="btn book-link">details</Link>
                    </article>
                    <article key={"fd83937b-fe51-4ac2-bdaf-8ef824cac495"} className="book featured-book">
                        <div className="book-image">
                            <img src={"https://mybookstorefcae635fe0b84fe5b7e27d5b5833d248205228-prod.s3.us-east-1.amazonaws.com/public/images/31334908-1785-4dec-8704-22bd3533d85ebook4.png"} alt={"Book4"} />
                        </div>
                        <Link to={`books/${"fd83937b-fe51-4ac2-bdaf-8ef824cac495"}`} className="btn book-link">details</Link>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Home;