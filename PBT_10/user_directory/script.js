const api = {

    baseURL:
        "https://jsonplaceholder.typicode.com",

    async getUsers() {
        const res =
            await fetch(`${this.baseURL}/users`);

        return res.json();
    },

    async getUser(id) {
        const res =
            await fetch(`${this.baseURL}/users/${id}`);

        return res.json();
    },

    async createUser(data) {
        const res = await fetch(
            `${this.baseURL}/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        return res.json();
    },

    async updateUser(id,data){
        const res = await fetch(
            `${this.baseURL}/users/${id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify(data)
            }
        );

        return res.json();
    },

    async deleteUser(id){
        return fetch(
            `${this.baseURL}/users/${id}`,
            {
                method:"DELETE"
            }
        );
    }
};
const ui = {

    renderUsers(users){

        usersContainer.innerHTML =
            users.map(user => `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.email}</p>

                <button
                    onclick="editUser(${user.id})">
                    Edit
                </button>

                <button
                    onclick="deleteUser(${user.id})">
                    Delete
                </button>
            </div>
        `).join("");
    },

    showLoading(){
        usersContainer.innerHTML =
        "<p>Loading...</p>";
    },

    hideLoading(){},

    showError(msg){
        alert(msg);
    },

    showSuccess(msg){
        alert(msg);
    }
};
async function loadUsers(){

    try{

        ui.showLoading();

        users = await api.getUsers();

        ui.renderUsers(users);

    }catch(err){

        ui.showError(err.message);
    }
}
form.addEventListener("submit",
async (e)=>{

    e.preventDefault();

    const user = {
        name:nameInput.value,
        email:emailInput.value
    };

    const newUser =
        await api.createUser(user);

    users.unshift(newUser);

    ui.renderUsers(users);
});
async function editUser(id){

    const user =
        users.find(u => u.id === id);

    nameInput.value = user.name;
    emailInput.value = user.email;

    editingId = id;
}
await api.updateUser(editingId,data);
async function deleteUser(id){

    const ok =
        confirm("Xóa user?");

    if(!ok) return;

    await api.deleteUser(id);

    users =
        users.filter(u => u.id !== id);

    ui.renderUsers(users);
}
searchInput.addEventListener(
"input",
e => {

    const keyword =
        e.target.value.toLowerCase();

    const filtered =
        users.filter(user =>
            user.name
                .toLowerCase()
                .includes(keyword)
            ||
            user.email
                .toLowerCase()
                .includes(keyword)
        );

    ui.renderUsers(filtered);
});