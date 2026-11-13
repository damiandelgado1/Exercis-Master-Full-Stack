// Query the empty list
let list = document.querySelector("ol");

// Get the protocol, the domain, the port, the path and the actual address parameters of the list
let listProtocol = location.protocol;
let listDomain = location.hostname;
let listPort = location.port;
let listPathname = location.pathname;
let listAddressParameters = location.search || "(sin parametros)";

// Insert the information in the list
let data = [
    `Protocolo: ${listProtocol}`,
    `Dominio: ${listDomain}`,
    `Puerto: ${listPort}`,
    `Ruta: ${listProtocol}`,
    `Parametros de Direccion actual: ${listAddressParameters}`,
];

// Display the protocol, the domain, the port, the path and the actual address parameters of the list in the list
data.forEach(information => {
        let li = document.createElement("li");

        li.textContent = information;
        list.appendChild(li);
    }
);