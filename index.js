let bars = document.querySelector(".icon_1");
let toggle = document.querySelector(".toggle_menu");
let boxes =document .querySelectorAll(".services_box");
let collection =document .querySelectorAll(".collection_box");
let model =document .querySelector(".model");



boxes.forEach((box,i)=>{

    box.addEventListener("click", (e) => {
        // Add 'visibility' class to the model element
        model.classList.add("visibility");

        // To access the img and p inside the clicked box, use querySelector or direct reference:
        const img = e.currentTarget.querySelector('img');
        const p = e.currentTarget.querySelector('p');

        // console.log(img);
         // Logs the img element
        showData(img,p)
        // console.log(p.textContent);
           // Logs the p element
    });
})

collection.forEach((box,i)=>{

    box.addEventListener("click", (e) => {
        // Add 'visibility' class to the model element
        model.classList.add("visibility");

        // To access the img and p inside the clicked box, use querySelector or direct reference:
        const img = e.currentTarget.querySelector('img');
        const p = e.currentTarget.querySelector('p');

        // console.log(img);
         // Logs the img element
        showData(img,p)
        // console.log(p);
           // Logs the p element
    });
})

function xMark(){
    model.classList.remove("visibility")
}

let container = '';
function showData(img,p){
        container =`
                <div class="box_model">
            <div class="model_icon" onclick="xMark()" >
                <i class="fa-solid fa-xmark "></i>
            </div>
            <div class="content">
                <img src=${img.src} alt="">
                <div class="text_model">
                    <p>${p.textContent}</p>
                </div>
            </div>
        </div>
        `
        document.getElementById("moodel").innerHTML =container;
}


// let container = '';

// function showData(img) {
//     // Optionally reset the container if you want to replace the content each time:
//     container = `
//         <div class="box_model">
//             <div class="model_icon" onclick="xMark()" >
//                 <i class="fa-solid fa-xmark"></i>
//             </div>
//             <div class="content">
//                 <img src="${img.src}" alt="">
//                 <div class="text_model">
//                     <h5>Lorem, ipsum dolor.</h5>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, fugit.</p>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium, eaque maxime nobis culpa esse! Perspiciatis ullam eligendi nesciunt. Ipsa eos quo a dolorum consequatur eligendi id corporis perspiciatis voluptatum.</p>
//                 </div>
//             </div>
//         </div>
//     `;

//     const modalElement = document.getElementById("moodel");
//     if (modalElement) {
//         modalElement.innerHTML = container;
//     } else {
//         console.error('Element with id "moodel" not found in the DOM.');
//     }
// }



bars.addEventListener("click", () => {
    toggle.classList.toggle("transformY_2");
    bars.classList.toggle("fa-xmark")
});




