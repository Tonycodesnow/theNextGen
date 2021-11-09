let items = [];

const divItems = document.getElementById("divItems");
const itemName = document.getElementById("name");
const itemUrl = document.getElementById("item_url");

document.addEventListener("DOMContentLoaded", async () => {
  await getItems();
});

async function addItemHandler(event) {
  const item = {
    name: itemName.value,
    item_url: itemUrl.value,
  };
  if (item.name === "" || item.item_url === "") {
    alert("Please fill all the fields");
    return;
  }
  await postItem(item);
  itemName.value = "";
  itemUrl.value = "";
  itemName.focus();
}
function renderItems(items) {
  divItems.innerHTML = "";

  items.map((item) => {
    const divItem = document.createElement("div");
    divItem.innerHTML = `
       <div class="col-12">
            <div class="card card-event mb-2">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                <div>
                    <h3>${item.name}</h3>
                </div>
                <div class="d-flex justify-content-between">
                    <a
                    class="btn btn-danger btn-circle mx-1 delete-item"
                    data-id="${item.id}"
                    >
                    <i data-id="${item.id}" class="fas fa-trash-alt delete-item"></i>
                    </a>
                    <a
                    class="btn btn-default btn-giftby btn-circle"
                    href=${item.item_url}
                    target="_blank"
                    >
                    <i class="far fa-eye"></i>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
      `;
    divItems.appendChild(divItem);
  });
}

async function postItem(item) {
  const response = await fetch("/api/wishitems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  console.log(data);

  await getItems();
}

async function getItems() {
  const response = await fetch("/api/wishitems");
  const data = await response.json();
  items = data;
  renderItems(items);
}

async function deleteItem(id) {
  const response = await fetch(`/api/wishitems/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
  await getItems();
}

document
  .getElementById("buttonAddItem")
  .addEventListener("click", addItemHandler);

document
  .getElementById("divItems")
  .addEventListener("click", async function (event) {
    if (event.target.classList.contains("delete-item")) {
      const id = event.target.dataset.id;
      console.log("remove", id);
      await deleteItem(id);
    }
  });
