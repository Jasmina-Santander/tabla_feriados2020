let url = "https://www.feriadosapp.com/api/holidays.json";

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));

const mostrarData = (data) => {
  console.log(data.data);
  let body = "";
  for (var i = 0; i < data.data.length; i++) {
    body += `<tr><td>${i+1}</td><td>${data.data[i].date}</td><td>${data.data[i].title}</td><td>${data.data[i].extra}</td><td>${data.data[i].law}</td></tr>`;
  }
  document.getElementById("contenido").innerHTML = body;
};
