function List(props) {
    
    const category = props.category;
    const itemList = props.items;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically sort the fruits
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetically sort the fruits
    // fruits.sort((a, b)=> a.calories - b.calories); // Alphabetically sort the fruits by calories
    // fruits.sort((a, b)=> b.calories - a.calories); // Reverse alphabetically sort the fruits by calories

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b></li>);
    return (<>
                <h3>{category}</h3>
                <ol>{listItems}</ol>
            </>);
}

export default List;