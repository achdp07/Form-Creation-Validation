async function fetchUserData() {
  // await can be used inside
  const ApiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');
  
  try {
  // Code that may throw an error
    const response = await fetch(apiUrl);
    const users = await response.json();
    
    // Step 1: Clear loading message
    dataContainer.innerHTML = '';

    // Step 2: Create and append user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 3: Error handling
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error("Fetch error:", error.message);
  }
}

// Step 4: Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);