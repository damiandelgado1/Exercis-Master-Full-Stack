import List from "./list";
import "./App.css";

const App = () => {
    const items = ["React", "JavaScript", "Vue", "Angular", "Svelte"];

    return (
        <div className="container mx-auto py-10">
            <ul className="list-disc">
                {items.map((item, index) => {
                    <li key={index}> {item} </li>
                })}
            </ul>
        </div>
    )
}