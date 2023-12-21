import React, {useState, createContext} from "react";
import PropTypes from "prop-types";
import "../../styles/style-guide.css"

import StarsList from "./StarsList";

export const StarRatingContext = createContext(undefined);

export default function StarRating({
                                       defaultState,
                                       emptyColor,
                                       fillColor,
                                       borderColor,
                                       height,
                                       maxValue,
                                       onChangeHover,
                                       onChangeValue,
                                       readOnly,
                                       width,
                                   }) {
    const [rating, setRating] = useState(defaultState);
    const [hover, setHover] = useState(null);

    const setRatingFn = (value) => {
        if (readOnly) return;

        setRating(value);
        onChangeValue(value);
    }

    const setHoverFn = (value) => {
        if (readOnly) return;

        setHover(value);
        onChangeHover(value);
    }

    return (
        <div className="star-rating">
            <StarRatingContext.Provider
                value={{
                    emptyColor,
                    fillColor,
                    borderColor,
                    height,
                    hover,
                    rating,
                    setHover: setHoverFn,
                    setRating: setRatingFn,
                    width,
                    maxValue,
                }}
            >
                <StarsList/>
            </StarRatingContext.Provider>
        </div>
    );
}

StarRating.propTypes = {
    defaultState: PropTypes.number,
    emptyColor: PropTypes.string,
    fillColor: PropTypes.string,
    borderColor: PropTypes.string,
    height: PropTypes.number,
    maxValue: PropTypes.number,
    onChangeHover: PropTypes.func,
    onChangeValue: PropTypes.func,
    readOnly: PropTypes.bool,
    width: PropTypes.number,
};

StarRating.defaultProps = {
    defaultState: 0,
    emptyColor: "var(--light-gray)",
    fillColor: "var(--tags)",
    borderColor: "black",
    height: 30,
    maxValue: 5,
    onChangeHover: () => {
    },
    onChangeValue: () => {
    },
    readOnly: false,
    width: 30
};