const food_item_div = document.getElementById("food-item-container");
const customer_cart_container = document.getElementById("customer-cart-container-id");
const btn_confirm_order = document.getElementById("btn-confirm-order");
const btn_add_customer = document.getElementById("btn-add-customer");

const load_admin = document.getElementById("load-admin");
const load_menu = document.getElementById("load-menu");

const root = document.getElementById("root")
const tablemain = document.getElementById("tablemain");




const menuItems = [
    //Burger
    { itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750.00, discount: 0, img: "https://images.pexels.com/photos/5554607/pexels-photo-5554607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500.00, discount: 15, img: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1003", itemName: "Turkey Burger", price: 1600.00, discount: 0, img: "https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: 1400.00, discount: 0, img: "https://images.pexels.com/photos/15832879/pexels-photo-15832879/free-photo-of-cheeseburger-with-french-fries-and-three-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800.00, discount: 20, img: "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: 1000.00, discount: 0, img: "https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600.00, discount: 0, img: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1008", itemName: "Bacon Burger", price: 650.00, discount: 15, img: "https://images.pexels.com/photos/15146310/pexels-photo-15146310/free-photo-of-burgere-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1009", itemName: "Shawarma Burger", price: 800.00, discount: 0, img: "https://images.pexels.com/photos/18188571/pexels-photo-18188571/free-photo-of-burger-and-a-shawarma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1010", itemName: "Olive Burger", price: 1800.00, discount: 0, img: "https://images.pexels.com/photos/11401287/pexels-photo-11401287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1012", itemName: "Double-Cheese Burger", price: 1250.00, discount: 20, img: "https://images.pexels.com/photos/10922927/pexels-photo-10922927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: 0, img: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: 1600.00, discount: 10, img: "https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1015", itemName: "Paneer Burger", price: 900.00, discount: 0, img: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  
    //Submarine
    { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: 0,img:"https://images.pexels.com/photos/7595072/pexels-photo-7595072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: 0,img:"https://images.pexels.com/photos/7595073/pexels-photo-7595073.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: 1800.00, discount: 3,img:"https://media.istockphoto.com/id/2149693429/photo/sandwich-one-fresh-big-submarine-sandwich-with-ham-cheese-lettuce-tomatoes-and-microgreens-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=itGnQ8ll2i7tS0Alef39zqyd1krP72RdtIqcONPm-QU=" },
    { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: 1400.00, discount: 0,img:"https://media.istockphoto.com/id/157718121/photo/foot-long-ham-and-swiss-cheese-sub.webp?a=1&b=1&s=612x612&w=0&k=20&c=3HuT3jrMfztas9I4e7T1wS7n-iIaPdapn3I9A5ZoT_g=" },
    { itemCode: "B1020", itemName: "Grinder Submarine", price: 2300.00, discount: 0,img:"https://www.sargento.com/assets/Uploads/Recipe/Image/Sargento11501__FillWzExNzAsNTgzXQ.jpg" },
    { itemCode: "B1021", itemName: "Cheese Submarine", price: 2200.00, discount: 0 ,img:"https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: 1900.00, discount: 16,img:"https://www.foodrepublic.com/img/gallery/tiktoks-viral-grinder-sandwich-is-basically-a-better-salad/intro-1694677635.jpg" },
    { itemCode: "B1023", itemName: "Special Horgie Submarine", price: 2800.00, discount: 0 ,img:"https://i.shgcdn.com/2bbb0953-8b9f-4a81-b717-1d7cb1644e55/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},
    { itemCode: "B1024", itemName: "MOS Special Submarine", price: 3000.00, discount: 0,img:"https://images.pexels.com/photos/20867465/pexels-photo-20867465/free-photo-of-sandwich-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600" },
  
    // Fries
    { itemCode: "B1025", itemName: "Steak Fries (Large)", price: 1200.00, discount: 0 ,img:"https://www.paintthekitchenred.com/wp-content/uploads/2022/03/Air-fryer-frozen-steak-fries-L1-Paint-the-Kitchen-Red-scaled.jpg"},
    { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: 600.00, discount: 0 ,img:"https://www.pinkwhen.com/wp-content/uploads/2023/05/Red-Robin-Frozen-Steak-Fries-in-Air-Fryer-1-500x375.jpg"},
    { itemCode: "B1027", itemName: "French Fries (Large)", price: 800.00, discount: 0 ,img:"https://recipes.net/wp-content/uploads/2023/05/johnnys-bacon-cheese-fries-recipe_8536f8fd0bcf26e94e04352e8d2b48ba.jpeg"},
    { itemCode: "B1028", itemName: "French Fries (Medium)", price: 650.00, discount: 0 ,img:"https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg"},
    { itemCode: "B1029", itemName: "French Fries (Small)", price: 450.00, discount: 0 ,img:"https://www.indianveggiedelight.com/wp-content/uploads/2019/07/air-fryer-potato-fries-featured.jpg"},
    { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: 600.00, discount: 0 ,img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Baked-Sweet-Potato-Fries-Recipe.jpg"},
  
    // Pasta
    { itemCode: "B1031", itemName: "Chicken Cheese Pasta", price: 1600.00, discount: 15,img:"https://saltedmint.com/wp-content/uploads/2018/05/Creamy-tuscan-tomato-pasta-2.jpg" },
    { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: 1700.00, discount: 0,img:"https://www.vincenzosplate.com/wp-content/uploads/2021/08/610x350-Photo-4_862-How-to-Make-CHICKEN-PASTA-Like-an-Italian-V1.jpg"  },
    { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: 2900.00, discount: 10,img:"https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg"  },
    { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: 2000.00, discount: 0,img:"https://www.sipandfeast.com/wp-content/uploads/2023/01/spicy-creamy-mushroom-pasta-snippet.jpg"  },
    { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: 1950.00, discount: 0,img:"https://shortgirltallorder.com/wp-content/uploads/2021/07/lemon-butter-pasta-square.jpg"  },
    { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: 2400.00, discount: 1,img:"https://images.themodernproper.com/billowy-turkey/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=0104e0b241aea73e5709db128503d749"  },
    { itemCode: "B1037", itemName: "Baked Ravioli", price: 2000.00, discount: 1 ,img:"https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2022/06/pasta-primavera-1.jpg" },
  
    // Chicken
    { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: 1200.00, discount: 0,img:"https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" },
    { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: 2300.00, discount: 10,img:"https://www.therusticelk.com/wp-content/uploads/2018/09/Southern-fried-chicken-2.jpg" },
    { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: 3100.00, discount: 5,img:"https://airfryermom.com/wp-content/uploads/2022/05/Cook-Fried-Chicken-in-Air-Fryer.jpg" },
    { itemCode: "B1041", itemName: "Hot Wings (Large)", price: 2400.00, discount: 0 ,img:"https://www.browneyedbaker.com/wp-content/uploads/2020/12/buttermilk-fried-chicken-12-square.jpg"},
    { itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: 900.00, discount: 0,img:"https://foodserviceindia.com/wp-content/uploads/2023/07/Frame-65.jpg" },
    { itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: 2100.00, discount: 0,img:"https://poshjournal.com/wp-content/uploads/2021/02/thai-bbq-chicken-wings-8.jpg" },
    // Beverages
    { itemCode: "B1044", itemName: "Pepsi (330ml)", price: 300.00, discount: 5,img:"https://www.ocado.com/productImages/612/612029011_1_640x640.jpg?identifier=03aff14ac20f6f9db3749cf29dd865b7" },
    { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: 350.00, discount: 0,img:"https://i.pinimg.com/originals/99/af/9c/99af9cd03aaf6a856fdfea9d27802f24.jpg" },
    { itemCode: "B1046", itemName: "Sprite (330ml)", price: 150.00, discount: 3 ,img:"https://i.pinimg.com/736x/da/29/54/da29549b7fd367669b7d8502d9d0028c.jpg"},
    { itemCode: "B1047", itemName: "Mirinda (330ml)", price: 200.00, discount: 7 ,img:"https://i.pinimg.com/736x/99/0b/46/990b466538fbdc1f4b6722a6a393e908.jpg"},
  ];


let CartArray = [];
let CustomerArray = [];




class Customer {
    constructor(phone_no, name, address) {
        this.phone_no = phone_no;
        this.name = name;
        this.address = address;
        this.orders = [];
    }
}


class Order {
    constructor(itemCode, itemName, qty,price) { 
        this.itemCode = itemCode; 
        this.itemName = itemName;
        this.qty = qty;
        this.price = price*qty;
    }
}



function AddOrder(itemCode, itemName, qty,price) { 
    const order = new Order(itemCode, itemName, qty,price);
    CartArray.push(order);
    console.log(CartArray);
    alert("Item is added to the Cart")

    tablemain.innerHTML = 
    `
    <tr>
    <td colspan="4">CART</td>
    </tr>

    <tr>
    <td>Item Code</td>
    <td>Item Name</td>
    <td>Qty</td>
    <td>Price</td>
    </tr>

    `


        let i = 0;
        CartArray.forEach(element => {
        tablemain.innerHTML += 
            `
            <tr>
                <td>${element.itemCode}</td>
                <td>${element.itemName}</td>
                <td>${element.qty}</td>
                <td>${element.price}</td>
            </tr>
        
            `
            
            i++;
        }
    );

    LoadItems();
}


function LoadItems() {
    food_item_div.innerHTML = ``;
    menuItems.forEach(element => {
        food_item_div.innerHTML += `  

<div>
    <div class="card border-0 shadow-lg card-hover position-relative" style="width: 22rem; background-color: #34495e; height: 100% !important;">
        <div class="position-relative">
            <img src="${element.img}" class="card-img-top" style="height: 250px; object-fit: cover;">
            <div class="gradient-overlay"></div>
        
        <div class="card-body text-white" style="background-color: #34495e;">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h4 class="card-title text-white fw-bold mb-1">${element.itemName}</h4>
                    <small class="text-white">${element.itemCode}</small>
                </div>
                <i class="bi bi-bookmark-plus text-warning fs-3"></i>
            </div>
            
            <div class="d-flex align-items-center mb-3">
                <div class="input-group me-3" style="max-width: 120px;">
                    <span class="input-group-text bg-dark text-white">Qty</span>
                    <input type="number" id="quantity-${element.itemCode}" class="form-control text-center" min="1" max="10" value="1">
                </div>
            </div>
            
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0 text-warning fw-bold">Rs: ${element.price}</h5>
                <button class="btn btn-outline-warning" onclick="AddOrder('${element.itemCode}', '${element.itemName}', document.getElementById('quantity-${element.itemCode}').value,'${element.price}')">
                 <i class="bi bi-cart-plus" >Add to Cart</i>
                </button>
            </div>
        </div>
    </div>
</div>

        `;
    });
}

LoadItems();

function AddCustomer(){

    let phone_no = document.getElementById('phone_no_txt').value;
    let name = document.getElementById('name_txt').value;
    let address = document.getElementById('address_txt').value;

    let newCustomer = new Customer(phone_no, name, address);
    CustomerArray.push(newCustomer); 

    console.log(CustomerArray);

}


function AddOrdertoCustomer() {
    let phone_no = document.getElementById('phone_no_txt').value;
    let name = document.getElementById('name_txt').value;
    let address = document.getElementById('address_txt').value;

    
    let existingCustomer = CustomerArray.find(customer => customer.phone_no === phone_no);

    
    if (!existingCustomer) {
        
        let newCustomer = new Customer(phone_no, name, address);
        CustomerArray.push(newCustomer); 
        newCustomer.orders = [...CartArray]; 
        console.log("New customer added:", newCustomer);

    } else {
        existingCustomer.orders.push(...CartArray);
        console.log("Existing customer found. Orders updated:", existingCustomer);
    }

    CartArray = [];
    console.log("Cart cleared after adding to customer orders.");

    alert("Order Confirmed!")

    tablemain.innerHTML = 
    `

    `


        let i = 0;
        CartArray.forEach(element => {
        tablemain.innerHTML += 
            `
            <tr>
                <td>${element.itemCode}</td>
                <td>${element.itemName}</td>
                <td>${element.qty}</td>
                <td>${element.price}</td>
            </tr>
        
            `
            
            i++;
        }
    );

    LoadItems();

    console.log(CustomerArray);

    
}

function LoadAdminHTML(){
    root.innerHTML = ``;
    root.innerHTML += 
    `
<table id="order-history-table">
  <thead>
      <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Orders</th>
      </tr>
  </thead>
  <tbody>
  </tbody>
</table>
    
    `

    generateOrderHistoryTable();
    food_item_div.style.display = "none";
    customer_cart_container.style.display = "none";

    
}

function LoadHomeHTML(){
    root.innerHTML = ``;
    root.innerHTML += 
    `
    <div class="item-collection-div">

    <h2>Food Items</h2>

    `
    food_item_div.style.display = "flex";
    customer_cart_container.style.display = "flex";


}

btn_confirm_order.addEventListener("click",AddOrdertoCustomer);
btn_add_customer.addEventListener("click",AddCustomer);

load_admin.addEventListener("click",LoadAdminHTML);
load_menu.addEventListener("click",LoadHomeHTML);







function generateOrderHistoryTable() {
    const tableBody = document.getElementById('order-history-table').getElementsByTagName('tbody')[0];


    tableBody.innerHTML = '';


    CustomerArray.forEach((customer, customerIndex) => {

        const customerRow = tableBody.insertRow(customerIndex);


        const customerCell = customerRow.insertCell(0);
        customerCell.innerHTML = customer.name;

        const addressCell = customerRow.insertCell(1);
        addressCell.innerHTML = customer.address;

        const phoneNoCell = customerRow.insertCell(2);
        phoneNoCell.innerHTML = customer.phone_no;


        const ordersCell = customerRow.insertCell(3);
        ordersCell.innerHTML = '';

 
        const ordersTable = document.createElement('table');
        ordersTable.style.width = '100%';
        ordersTable.style.borderCollapse = 'collapse';


        const ordersTableHeader = ordersTable.createTHead();
        const ordersTableRow = ordersTableHeader.insertRow(0);

        const itemCodeHeader = ordersTableRow.insertCell(0);
        itemCodeHeader.innerHTML = 'Item Code';

        const itemNameHeader = ordersTableRow.insertCell(1);
        itemNameHeader.innerHTML = 'Item Name';

        const qtyHeader = ordersTableRow.insertCell(2);
        qtyHeader.innerHTML = 'Quantity';

        const priceHeader = ordersTableRow.insertCell(3);
        priceHeader.innerHTML = 'Price';



        const ordersTableBody = ordersTable.createTBody();


        customer.orders.forEach((order, orderIndex) => {
            const orderRow = ordersTableBody.insertRow(orderIndex);

            const itemCodeCell = orderRow.insertCell(0);
            itemCodeCell.innerHTML = order.itemCode;


            const itemNameCell = orderRow.insertCell(1);
            itemNameCell.innerHTML = order.itemName;


            const qtyCell = orderRow.insertCell(2);
            qtyCell.innerHTML = order.qty;


            const priceCell = orderRow.insertCell(3);
            priceCell.innerHTML = order.price;

        });


        ordersCell.appendChild(ordersTable);
    });
}


function Logout(){
    window.location.href = '\login.html';
}


const logout_btn = document.getElementById("logout-btn");

logout_btn.addEventListener("click",Logout);














