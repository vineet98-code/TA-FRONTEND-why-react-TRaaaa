import React from 'react'
import PropTypes from 'prop-types'

export default function Header() {
    return (
        <div className="text-center nav justify-content-center my-3">
            <button type="button" class="btn btn-primary">Logo</button>
            <button type="button" class="btn btn-success">Home</button>
            <button type="button" class="btn btn-secondary">About</button>
            <button type="button" class="btn btn-danger">Contact</button>
        </div>
    )
}
// type passing as a string will throw an error, when we pass a number it will be converted to a string
Header.propTypes = {
    title: PropTypes.string
}