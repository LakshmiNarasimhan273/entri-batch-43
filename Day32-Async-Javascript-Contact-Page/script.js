async function fetchUsers() {
    const container = document.getElementById("user-container");
    try {

        const response = await fetch("https://fakestoreapi.com/users");

        const users = await response.json();

        document.getElementById("loading").style.display = "none";

        let cards = "";

        users.forEach((data) => {
            // Get initials for avatar (e.g. "JD" from "John Doe")
            const initials = data.name.firstname[0].toUpperCase() + data.name.lastname[0].toUpperCase();
            console.log(initials);

            // Cards Designs
            cards += `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="bg-primary rounded-top-4 p-3 text-white">
                    <div class="d-flex align-items-center gap-3">
                        <div class="bg-white text-primary fw-bold rounded-3 d-flex align-items-center justify-content-center"
                        style="width: 48px; height: 48px; font-size: 1.1rem"
                        >
                        ${initials}
                        </div>

                        <div>
                        <div class="fw-bold fs-6">${data.name.firstname} ${data.name.lastname}</div>
                        <div class="small opacity-75">${data.username}</div>
                        </div>
                    </div>
                    </div>

                    <div class="card-body d-flex flex-column gap-2 py-3">

                        <!-- Email -->
                        <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary-subtle text-primary rounded-2 p-2"><i class="bi bi-envelope-fill"></i></span>
                        <div>
                        <div class="text-muted" style="font-size:0.68rem">EMAIL</div>
                        <div class="fw-medium small">${data.email}</div>
                        </div>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-success-subtle text-success rounded-2 p-2"><i class="bi bi-telephone-fill"></i></span>
                        <div>
                        <div class="text-muted" style="font-size:0.68rem">PHONE</div>
                        <div class="fw-medium small">${data.phone}</div>
                        </div>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-warning-subtle text-warning rounded-2 p-2"><i class="bi bi-geo-alt-fill"></i></span>
                        <div>
                        <div class="text-muted" style="font-size:0.68rem">CITY</div>
                        <div class="fw-medium small">${data.address.city}, ${data.address.street}</div>
                        </div>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-info-subtle text-info rounded-2 p-2"><i class="bi bi-pin-map-fill"></i></span>
                        <div>
                        <div class="text-muted" style="font-size:0.68rem">ZIPCODE</div>
                        <div class="fw-medium small">${data.address.zipcode}</div>
                        </div>
                        </div>
                    
                    </div>

                    <div class="card-footer border-top d-flex justify-content-between align-items-center py-2">
                        <span class="badge bg-light text-muted border">ID #${data.id}</span>

                        <button class="btn btn-sm btn-primary rounded-pill px-3">View</button>
                    </div>
                    
                </div>
            </div>
            `
        });

        container.innerHTML = cards;

    } catch (err) {
        console.log(err);
        document.getElementById("loading").style.display = "none";
        document.getElementById("error-msg").style.display = "block";
    }
}

fetchUsers();