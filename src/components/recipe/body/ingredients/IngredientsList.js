function IngredientsList() {
    let ingredients = new Map([
        ["Творог", "1 кг"],
        ["Топленый творог", "1 кг"],
        ["Вареное сгущенное молоко", "500 г"],
        ["Пшеничная мука ", " 100 г"],
        ["Сахар ", " 150 г"],
        ["Ванилин ", " 1 штука"],
        ["Куриное яйцо ", " 4 штуки"],
        ["Соль ", "по вкусу"]
        // ["1Творог", "1 кг"],
        // ["2Топленый творог", "1 кг"],
        // ["3Вареное сгущенное молоко", "500 г"],
        // ["4Пшеничная мука ", " 100 г"],
        // ["5Сахар ", " 150 г"],
        // ["6Ванилин ", " 1 штука"],
        // ["7Куриное яйцо ", " 4 штуки"],
        // ["8Соль ", "по вкусу"]
    ])

    return (
        <div className="ingredients-list">
            {Array.from(ingredients).map(([ingredient, count]) => (
                <p className="plain-text compressed">{ingredient} - {count}</p>
            ))}
        </div>
    )
}
export default IngredientsList