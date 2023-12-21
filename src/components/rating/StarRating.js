import React, {useState, createContext} from "react";
import PropTypes from "prop-types";

import StarRatingLabel from "./StarRatingLabel";
import StarsList from "./StarsList";

export const StarRatingContext = createContext();

export default function StarRating({
                                       defaultState,
                                       emptyColor,
                                       fillColor,
                                       height,
                                       labelText,
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
        <>
            <StarRatingContext.Provider
                value={{
                    emptyColor,
                    fillColor,
                    height,
                    hover,
                    labelText,
                    rating,
                    setHover: setHoverFn,
                    setRating: setRatingFn,
                    width,
                    maxValue,
                }}
            >
                <>
                    <StarRatingLabel/>
                    <StarsList/>
                </>
            </StarRatingContext.Provider>
        </>
    );
}

StarRating.propTypes = {
    defaultState: PropTypes.number,
    emptyColor: PropTypes.string,
    fillColor: PropTypes.string,
    height: PropTypes.number,
    labelText: PropTypes.func,
    maxValue: PropTypes.number,
    onChangeHover: PropTypes.func,
    onChangeValue: PropTypes.func,
    readOnly: PropTypes.bool,
    width: PropTypes.number,
};

StarRating.defaultProps = {
    defaultState: 0,
    emptyColor: "grey",
    fillColor: "#edaa10",
    height: 30,
    labelText: (value) => `Оценить рецепт:`,
    maxValue: 5,
    onChangeHover: () => {
    },
    onChangeValue: () => {
    },
    readOnly: false,
    width: 30
};