import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link " to="/about">About</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/hero">Hero</Link>
            </li>
            
            <li class="nav-item">
                <Link class="nav-link ">Contacts</Link>
            </li>
        </ul>
    )
}
// type passing as a string will throw an error, when we pass a number it will be converted to a string
Header.propTypes = {
    title: PropTypes.string
}