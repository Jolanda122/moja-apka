// Ta funkcja uruchamia się, kiedy klikniesz przycisk "Dodaj"
function addTask() {

    // Pobieramy pole tekstowe (input)
    const input = document.getElementById("taskInput");

    // Pobieramy tekst wpisany przez użytkownika
    const text = input.value;

    // Jeśli pole jest puste, to nic nie rób
    if (text === "") return;

    // Tworzymy nowy element listy <li>
    const li = document.createElement("li");

    // Wpisujemy do niego tekst zadania
    li.textContent = text;

    // Po kliknięciu na zadanie — usuń je
    li.onclick = () => li.remove();

    // Dodajemy nowe zadanie do listy <ul>
    document.getElementById("taskList").appendChild(li);

    // Czyścimy pole tekstowe po dodaniu zadania
    input.value = "";
}
