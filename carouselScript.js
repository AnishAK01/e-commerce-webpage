var currentCar = "1";
var currentImage = 2;
var previousValue = 0;
var maxImages = 5;

function update360(justChangeImage = false) {
    if (!justChangeImage) {
        var slider = document.getElementById("slider-range");
        var sliderValue = slider.value;

        slider.addEventListener("mousedown", function () {
            slider.classList.remove("grab");
            slider.classList.add("grabbing");
        });

        slider.addEventListener("mouseup", function () {
            slider.classList.remove("grabbing");
            slider.classList.add("grab");
        });

        currentImage = sliderValue > previousValue ? (currentImage - 1 + maxImages) % maxImages : (currentImage + 1) % maxImages;
        previousValue = sliderValue;
    }

    var image360 = document.getElementById("image360");
    image360.src = `Assets/puma/${currentImage}.png`;
}



















// //*{
//     margin: 0;
//     padding: 0;
// }
// /* .popup{
//     display: none;
// } */
// .main{
//     border: 2px solid black;
//     height: 500px;
//     width: 80%;
//     margin: 50px auto auto auto;
//     border-radius:0 50px 50px 50px;

// }
// .card-details{
//     /* border: 2px solid rgb(248, 0, 0); */
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// }
// .card-details i{
//     font-size: 30px;
// }
// .img{
//     /* border: 2px solid black; */
//     height: 60%;
//     background-image: url("Assets/cardimg-1.jpg");
//     background-repeat: no-repeat;
//     background-size:contain;
//     background-position: center;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 5px;
//     font-size: 2rem;
// }
// /* */
// .alter-options{
//     /* border: 2px solid black; */

// }
// .color{
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
// }
// .color span{
//     padding: 5px;
//     width: 300px;
//     /* border: 2px solid black; */
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

// }
// .color .size{
//     width: 100%;
//     color: aqua;
// }

// .color .red,.blue,.white,.black {
//     border: 0.2px solid black;
// height: 20px;
//     border-radius: 50%;
//     width: 20px;
    
// }
// .size-no{
//     /* border: 2px solid black; */
//     display: flex;
//     /* flex-direction: column; */
//     justify-content: space-between;
//     width: 100%;

// }
// .description{
//     /* border: 2px solid rgb(0, 213, 255); */
// display: flex;
// justify-content: space-evenly;

// }
// .rbc{
//     display: flex;
//     justify-content: space-between;
// }
// .rating{
//     padding: 10px;
// }
// .rating i{
//     font-size: 20px;
// }



















// .container360{
//     position: relative;
//     height: 65%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     /* transform: translateY(150%); */
// }
// #main360 {
//     height: 100%;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }
// #image360 {
//     /* height: 100%; */
//     /* width: 100%; */
//     z-index: 1;
//     /* object-fit: contain; */
// }
// #slider-range {
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     opacity: 0;
//     z-index: 2;
// }

// .grab {
//     cursor: grab;
// }

// .grabbing {
//     cursor: grabbing;
// }

