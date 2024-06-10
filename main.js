prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jCAR3XKbY/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    img = document.getElementById("captured_image");
    model.classify(img,showResult);
}
function showResult(error,result){
    if(error){
        console.log(error);
    }
    if(result){
        console.log(result);
        prediction_1 = result[0].label;
        document.getElementById("done").innerHTML = "Prediction 1 - "+result[0].label;
        if(prediction_1 == "Mask worn"){
        document.getElementById("update_emoji").innerHTML = "&#128567;";
        }else{
        document.getElementById("update_emoji").innerHTML = "&#x26d4; ";
        }
    }
}
//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 


//define function gotResult(error, results)