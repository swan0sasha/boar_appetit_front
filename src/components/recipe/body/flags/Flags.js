import "../../../../styles/recipe/flags.css"

function Flags() {
    let tags = [
        "Посытнее"
    ]
    let favourite_ingredients = [
        "Творог",
        "Сгущеное молоко"
    ]
    let ignored_ingredients = [
        "Помидор"
    ]

    function circle(color) {
        return (
            <svg className="tag-circle" width="10" height="11" viewBox="0 0 10 11" fill="none">
                <ellipse cx="4.91178" cy="5.49104" rx="4.85294" ry="5.24551" fill={color}/>
            </svg>
        )
    }

    function label(tag, dotColor, classname, textStyle) {
        return (
            <div className={classname}>
                {circle(dotColor)}
                <span className={textStyle}>{tag}</span>
            </div>
        )
    }

    return (
        <div className="flags-content">
            <h2 className="handsome-dude">Тэги</h2>
            {tags.map((tag) => (label(tag, "black", "flag tag", "plain-text")))}
            <h2 className="handsome-dude">Избранные ингредиенты</h2>
            {favourite_ingredients.map((ingredient) => (label(ingredient, "white", "flag favourite", "plain-text white")))}
            <h2 className="handsome-dude">Исключенные ингредиенты</h2>
            {ignored_ingredients.map((ingredient) => (label(ingredient, "white", "flag ignored", "plain-text white")))}
        </div>
    )
}

export default Flags