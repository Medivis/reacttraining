import React from 'react'

export default function Icon({ name, color, size, gradient, frame }) {
    let styleJson = {};
    if (color) styleJson.color = color;
    if (gradient) {
        styleJson.backgroundImage = gradient;
        styleJson.backgroundClip = "text";
        styleJson.WebkitTextFillColor = "transparent"
    };
    if (size) {
        styleJson.fontSize = size;
    }
    if (frame) {
        styleJson.height = frame;
        styleJson.width = frame;
        styleJson.textAlign = "center"
    }
    return (
        <i className={name} style={styleJson}></i>
    )
}
