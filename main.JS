Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
        document.getElementById("Camera").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
        });
    }
    
    function predict_gesture() {
    console.log("ml5.version:",ml5.version);
    classifire = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a5oCqo876/model.json',modelloaded);
    
    }

    function modelloaded(){
        console.log('Model Loaded!');
    }
    
    function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = ("The first Prediction is"+ prediction_1);
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    }
    
    function check(){
        img = document.getElementById("captured_image");
        classifire.classify(img, gotResult);
    }
    
    function gotResult(){
      if(error){
          console.log(error);
      }
      else {
        console.log(result);
        document.getElementById("update_gesture_name").innerHTML = result[0].label;
        document.getElementById("update_gesture").innerHTML = result[1].label;
        prediction_1 = result[0].label, result[1].label;
        speak();
        if( result[0].label == "amazing"){
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if( result[0].label == "victory"){
            document.getElementById("update_gesture").innerHTML = "	&#9996;";
        }
        if( result[0].label == "best"){
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if( result[1].label == "amazing"){
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if( result[1].label == "victory"){
            document.getElementById("update_gesture").innerHTML = "	&#9996;"
        }
        if( result[1].label == "best"){
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
    }}
