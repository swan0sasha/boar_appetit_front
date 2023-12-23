import "../../../../styles/main-page/search-panel.css"
import "../../../../styles/fonts.css"
function SortingSelector() {
    return(
        <select className="sorting-selector shy-guy">
            <option value="">По рейтингу</option>
            <option value="">По времени приготовления</option>
            <option value="">По релевантности</option>
        </select>
    )
}
export default SortingSelector