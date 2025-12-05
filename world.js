window.onload = () => {
    const lookupBtn = document.getElementById("lookup");
    const lookupCitiesBtn = document.getElementById("lookup-cities");
    const resultDiv = document.getElementById("result");
    const countryInput = document.getElementById("country");

    // Country lookup
    lookupBtn.addEventListener("click", () => {
        const country = countryInput.value.trim();

        fetch(`world.php?country=${country}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                resultDiv.innerHTML = `<p>Error: ${error}</p>`;
            });
    });

    // City lookup
    lookupCitiesBtn.addEventListener("click", () => {
        const country = countryInput.value.trim();

        fetch(`world.php?country=${country}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                resultDiv.innerHTML = `<p>Error: ${error}</p>`;
            });
    });
};
