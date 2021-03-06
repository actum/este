import React from 'react';
import Link from 'next/link';
import LocaleSwitch from '../components/LocaleSwitch';

export default () => (
  <header className="container">
    <div>
      <span className="logo">ACTUM DEVSTACK </span>
      <span className="desctiption">
        (based on
        {' '}
        <a
          className="link"
          title="Este on github"
          href="https://github.com/este"
        >
          Este
        </a>
        )
      </span>
    </div>
    <div className="menu">
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/info"><a>Info</a></Link>
      </nav>
      <LocaleSwitch className="locales" />
    </div>

    <style jsx>
      {`
        .container {
          align-items: center;
          background-color: #ed3d25;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 1em;
        }
        .description {
          font-size: 0.7em;
        }
        .logo {
          font-family: Arial;
          font-size: 1.5em;
        }
        .menu {
          display: flex;
          width: 100%;
        }
        nav, .locales {
          display: flex;
          flex: 1;
        }
        .link {
          color: white;
          font-family: Arial;
          text-decoration: none;
        }
        nav a {
          color: white;
          font-family: Arial;
          padding: 0.5em;
          text-decoration: none;
        }
    `}
    </style>
  </header>
);
