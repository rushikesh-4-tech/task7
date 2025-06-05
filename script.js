function fetchUsers() {
  const container = document.getElementById("user-container");
  container.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      container.innerHTML = "";
      users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(userCard);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color: red;">Failed to fetch data: ${error.message}</p>`;
    });
}

// Initial fetch
fetchUsers();
