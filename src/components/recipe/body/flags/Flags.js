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
            <svg className="flag-circle" width="10" height="10" viewBox="0 -2 10 10" fill="none">
                <ellipse cx="3" cy="3" rx="3" ry="3" fill={color}/>
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
            {tags.map((tag) => (label(tag, "var(--white-lake)", "flag tag", "plain-text white centered")))}
            <h2 className="handsome-dude">Избранные ингредиенты</h2>
            {favourite_ingredients.map((ingredient) => (label(ingredient, "var(--white-lake)", "flag favourite", "plain-text white centered")))}
            <h2 className="handsome-dude">Исключенные ингредиенты</h2>
            {ignored_ingredients.map((ingredient) => (label(ingredient, "var(--white-lake)", "flag ignored", "plain-text white centered")))}
        </div>
    )
}

export default Flags