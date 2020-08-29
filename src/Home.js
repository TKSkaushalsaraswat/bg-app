import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <nav className="navbar bg-dark ind">
        <h1>
          <img
            className="logo"
            src="https://i.ibb.co/PgYdCbL/logo.png"
            alt="theCodemate"
          />
        </h1>
        <ul>
          <li>
            <Link to="/trending">Explore</Link>
          </li>
          <li>
            <Link to="/palette/new">Generate</Link>
          </li>
        </ul>
      </nav>
      <section className="bg-blue">
        <section className="section section-top">
          <div>
            <img
              className="img-home"
              alt="theCodemate"
              src="https://i.ibb.co/60mbSHs/bg4u.png"
            />
          </div>

          <div className="content rellax" data-rellax-speed="5">
            <h1>The Super Fast Color Palette Generator.</h1>
            <Link to="/trending" className="btn-1 btn--white">
              Explore Trending Palettes
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
