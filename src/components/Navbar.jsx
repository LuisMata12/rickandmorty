import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={`/rickandmorty/`}style={{textDecoration:'none'}}>
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
              </Link>
              <Link to={`/rickandmorty/characters`} style={{textDecoration:'none'}}>
                <li className="nav-item">
                <a className="nav-link" href="#">Characters</a>
                </li>
              </Link>
              <Link to={`/rickandmorty/chapters`} style={{textDecoration:'none'}}>
                <li className="nav-item">
                <a className="nav-link" href="#"  aria-disabled="true">Chapters</a>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}
