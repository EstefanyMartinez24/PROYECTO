document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cyclingForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const tipoBicicleta = document.getElementById("tipoBicicleta").value;
        const nivel = document.getElementById("nivel").value;
        
        const registro = {
            nombre,
            tipoBicicleta,
            nivel
        };
        
        let registros = JSON.parse(localStorage.getItem("registrosCiclismo")) || [];
        registros.push(registro);
        localStorage.setItem("registrosCiclismo", JSON.stringify(registros));
        
        mostrarRegistros();
    });

    function mostrarRegistros() {
        const recordsList = document.getElementById("recordsList");
        recordsList.innerHTML = "";
        const registros = JSON.parse(localStorage.getItem("registrosCiclismo")) || [];
        
        registros.forEach((registro, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${registro.nombre} - ${registro.tipoBicicleta} - ${registro.nivel}`;
            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.addEventListener("click", function () {
                registros.splice(index, 1);
                localStorage.setItem("registrosCiclismo", JSON.stringify(registros));
                mostrarRegistros();
            });
            
            listItem.appendChild(deleteBtn);
            recordsList.appendChild(listItem);
        });
    }

    mostrarRegistros();
});
