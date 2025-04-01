const cardBtn = document.querySelectorAll(".card-btn");
for(let i = 0; i<cardBtn.length ; i ++ ){
    const cardButton = cardBtn[i]
    cardButton.addEventListener("click",function(event){
       const shop = document.getElementById("bdr")
       shop.innerHTML=""
       const Area = document.createElement('div')
       const productImage= cardButton.querySelector("img").src;
       const productName = cardButton.querySelector("h5").innerText;
       const funPrice = cardButton.getAttribute('data-price')
       
       
       Area.innerHTML = `
        <div class="flex pt-32">
            <img class="w-72" src="${productImage}" alt="empty">
            <div>
                <h5>${productName}</h5>
                <p id="price" data-fun-price="${funPrice}">$${funPrice}</p>

                <div class="bg-gray-100 mb-8">
                    <button
                    class="cursor-pointer px-4 py-2 text-gray-600 hover:text-gray-800 quantity-button"
                    >
                    -
                    </button>
                    <span id="quantity" class="px-4">0</span>
                    <button
                    class="cursor-pointer px-4 py-2 text-gray-600 hover:text-gray-800 quantity-button"
                    >
                    +
                    </button>
                </div>
                <!-- Open the modal using ID.showModal() method -->
                    <!--<button id="modalt" class="btn" onclick="my_modal_1.showModal()">open modal</button>-->
                    <button id="order" class="py-2 px-5 bg-blue-500 rounded-md cursor-pointer">Order</button>
                    <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <form action="code.php" method="post">
                            <label for="fn">Address : </label> <br>
                            <input type="text" name="fn" id="fn" ><br>
                            <label for="email">Email : </label> <br>
                            <input type="email" name="email" id="email"><br>
                            <label for="product">ProductName : </label> <br>
                            <input type="text" name="product" id="product" value="${productName}"><br>
                            <input class="py-2 px-5 bg-blue-500 rounded-md cursor-pointer mt-3" id="submit-frm" type="submit" value="submit">
                        </form>
                        <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn">Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
            </div>
           
        </div>
        `;
       shop.appendChild(Area);
      
       document.getElementById('sec-3').style.display = "none"
       document.getElementById('sec-2').style.display = "none"
       document.getElementById('head-ban').style.display = "none"
       document.getElementById('last-link').style.display = "block"
       document.getElementById('home-part').style.display = "none"
       document.getElementById('blog-part').style.display = "none"
       document.getElementById('about-part').style.display = "none"
       document.getElementById('contact-part').style.display = "none"

    })
}
document.getElementById('last-link').addEventListener("click",function(){
    document.getElementById('ber').innerHTML = "";
     document.getElementById('sec-2').style.display = "block"
      document.getElementById('head-ban').style.display = "flex"
      document.getElementById("bdr").style.display = "block"
      document.getElementById('sec-3').style.display = "block"
      document.getElementById('contact-us').style.display = "none"
      document.getElementById('last-link').style.display = "none"
    // document.getElementById('blog-section').style.display = "none"
    // document.getElementById('about-section').style.display = "none"
    document.getElementById('home-part').style.display = "block"
    document.getElementById('blog-part').style.display = "block"
    document.getElementById('about-part').style.display = "block"
    document.getElementById('contact-part').style.display = "block"
    document.getElementById('home-part').classList.add('text-green-500')
    

    
      
})
document.getElementById("bdr").addEventListener("click",function(event){
    if(event.target.classList.contains("quantity-button")){
        const price = document.getElementById("price")
        const funPrice = parseInt(price.getAttribute("data-fun-price"))
        
        const quantityElement = document.getElementById("quantity").innerText
        let newQuantity =  parseInt(quantityElement)
        if(event.target.innerText === "+"){
            newQuantity++;
            let sum =funPrice * newQuantity;
            document.getElementById("quantity").innerText = newQuantity;
            document.getElementById("price").innerText = `${"$"} ${sum} ` ;
        }
        else if(event.target.innerText === "-" && newQuantity > 0){
            newQuantity--;
            let sum =funPrice * newQuantity;
            document.getElementById("quantity").innerText = newQuantity;
            document.getElementById("price").innerText = `${"$"} ${sum} ` ;
        }

    }
    if(event.target.id === "order"){
        const quantityElement = document.getElementById("quantity").innerText
        let newQuantity =  parseInt(quantityElement)
        if(newQuantity > 0){
            document.getElementById("my_modal_1").showModal()
        }
        else{
            alert("quantity not add")
            return;
        }
    }
    if(event.target.id === "submit-frm"){
        event.preventDefault();
        const adderss = document.getElementById("fn").value;
        const email = document.getElementById("email").value;
        const product = document.getElementById("product").value;

        if(adderss === "" ||  email === "" || product === ""){
            alert("Fill up all")
            return;
        }
        document.querySelector("form").submit()
    }
  
})

document.getElementById('load-shop').addEventListener("click",function(event){
     
      document.getElementById('load-extra').style.display= "grid"
})
document.getElementById('blog-part').addEventListener("click",function(event){
       document.getElementById('sec-3').style.display = "none"
       document.getElementById('sec-2').style.display = "none"
       document.getElementById('head-ban').style.display = "none"
       document.getElementById('contact-us').style.display = "none"
       document.getElementById('about-section').style.display = "none"
        document.getElementById('blog-section').style.display = "block"
        document.getElementById("bdr").style.display = "none"
        document.getElementById('home-part').classList.remove('text-green-500')


})
document.getElementById('about-part').addEventListener("click",function(event){
    document.getElementById('sec-3').style.display = "none"
    document.getElementById('sec-2').style.display = "none"
    document.getElementById('head-ban').style.display = "none"
    document.getElementById('contact-us').style.display = "none"
    document.getElementById('blog-section').style.display = "none"
    document.getElementById('about-section').style.display = "block"
    document.getElementById('home-part').classList.remove('text-green-500')

})

document.getElementById('contact-part').addEventListener("click",function(event){
    document.getElementById('sec-3').style.display = "none"
    document.getElementById('sec-2').style.display = "none"
    document.getElementById('head-ban').style.display = "none"
    document.getElementById('contact-us').style.display = "block"
    document.getElementById('blog-section').style.display = "none"
    document.getElementById('about-section').style.display = "none"
    document.getElementById('home-part').classList.remove('text-green-500')

})

document.getElementById('home-part').addEventListener("click",function(event){
    document.getElementById('sec-3').style.display = "block"
    document.getElementById('sec-2').style.display = "block"
    document.getElementById('head-ban').style.display = "flex"
    // document.getElementById('contact-us').style.display = "none"
    // document.getElementById('blog-section').style.display = "none"
    document.getElementById('about-section').style.display = "none"

})
const  allBtn = document.getElementsByClassName('all-btn');
document.getElementById('home-part').classList.add("text-green-600")
for(let i = 0 ; i<allBtn.length; i++){
    const allButon = allBtn[i]
    allButon.addEventListener("click",function(event){
        for(let j = 0 ; j <allBtn.length; j++){
            allBtn[j].classList.remove("text-green-600")
        }

        event.currentTarget.classList.add("text-green-600")
    })
}

document.addEventListener("click",function(event){
    if(event.target.id === "submit-frm" ){
        event.preventDefault();
        const email = document.getElementById("email").value
        if(!email.includes('@')){
            alert("email is not valid")
        }
    }
})





