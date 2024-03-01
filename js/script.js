document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.getElementById("refreshButton");
  const filterButton = document.getElementById("filterButton");
  const nameFilterInput = document.getElementById("nameFilter");
  const emailFilterInput = document.getElementById("emailFilter");
  const phoneFilterInput = document.getElementById("phoneFilter");
  const userList = document.getElementById("userList");

  refreshButton.addEventListener("click", function () {
    fetchUsers();
  });

  filterButton.addEventListener("click", function () {
    const nameFilter = nameFilterInput.value.trim().toLowerCase();
    const emailFilter = emailFilterInput.value.trim().toLowerCase();
    const phoneFilter = phoneFilterInput.value.trim().toLowerCase();
    fetchFilteredUsers(nameFilter, emailFilter, phoneFilter);
  });

  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        displayUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        userList.innerHTML =
          "<p>Error fetching users. Please try again later.</p>";
      });
  }

  function fetchFilteredUsers(nameFilter, emailFilter, phoneFilter) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredUsers = data.filter((user) => {
          const nameMatch = user.name.toLowerCase().includes(nameFilter);
          const emailMatch = user.email.toLowerCase().includes(emailFilter);
          const phoneMatch = user.phone.toLowerCase().includes(phoneFilter);
          return nameMatch && emailMatch && phoneMatch;
        });
        displayUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        userList.innerHTML =
          "<p>Error fetching users. Please try again later.</p>";
      });
  }

  function displayUsers(users) {
    userList.innerHTML = "";
    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div>
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
          </div>
          `;
      userList.appendChild(card);
    });
  }

  fetchUsers();
});
