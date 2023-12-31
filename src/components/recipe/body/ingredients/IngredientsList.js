function IngredientsList() {
    let ingredients = new Map([
        ["Творог", "500 г"],
        ["Морковь", "1 шт"],
        ["Масло сливочное", "1 ст.л"],
        ["Крупа манная", "2 ст.л"],
        ["Мука ", "3 ст.л"],
        ["Куриное яйцо ", " 2 штуки"],
        ["Чернослив", " 100 г"],
        ["Изюм", " 50 г"],
        ["Сахар", " 2 ст.л"],
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