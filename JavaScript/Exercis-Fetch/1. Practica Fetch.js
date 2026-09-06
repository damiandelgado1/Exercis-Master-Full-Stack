const URL = "https://jsonplaceholder.typicode.com/users/1";

fetch(URL)
    .then((response) => {
        if (response.ok) {
            console.log(response);

            return response.json();
        }

        return Promise.reject(
            "No se ha encontrado el Usuario con ese Identificador"
        );
    })
    .then((user) => console.log(user))
    .catch((error) => console.log(error));


const URL_CARS = "https://myfakeapi.com/api/cars/";
const URL_UNIQUE_CARS = "https://myfakeapi.com/api/cars/5";

const getCarsFromFirtCarYear = async() => {
    const firstCarYear = await fetch(URL_CARS)
        .then((response) => response.json())
        .then((cars) => cars["cars"][0].car_model_year);

    const allCarsFilterByYear = await fetch(URL_CARS)
        .then((response) => response.json())
        .then((cars) => cars["cars"].filter(car => car.car_model_year == firstCarYear));

        console.log(allCarsFilterByYear);
}

fetch (URL_CARS)
    .then(response => response.json())
    .then(cars => console.log(cars['cars'][0].car_model_year));