import ListItem from "./ListItem"

const List = ({ items }) => {
    return (
        <ul className="list-disc font-bold">
            {items.map(((item, index) => {
                <ListItem key={ index } item={ index } />
            }))}
        </ul>
    )
}

export default List;