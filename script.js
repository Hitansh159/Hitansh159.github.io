let session;

function preload(){
  // Loading Model for inferance 
  session = LoadModel();
}

function setup() {
  // Setting up canvas as background
  canvas = createCanvas(192,144);

  // Seting up camera to capture input
  capture = createCapture(VIDEO);
  capture.size(192,144)
  capture.hide();
  
  
}

function draw() {
  // Settign background to gray
  background(150);

  // drawing video feed captured from webcam
  image(capture, 0, 0);

  // Drawing frame rate on video
  stroke(150);
  textSize(25)
  text(frameRate(), 5,25);

  // converting captured image to tensor for inferance
  const input = new ort.Tensor('int32', CaptureImage(), [1, 192, 192, 3]);

  // infering from image captured
  const pred = Infer(input, threshold = 0.3 ); 
  
  // Drawing circles for predicted parts
  pred.then((pred)=>{
    for(var i=0;i<17;i++){
      if(i<5) fill(255,0,0);
      circle(pred[i][1], pred[i][0], 5);
      fill(0);
    }
      
  })

}

function CaptureImage(){
  // Capture all pixels
  loadPixels();

  /* changing color space 
    RGBA -> RGB
      by ignoring every 4th element
  */ 
  temp = [];
  for (var i = 0; i < 192*192*4 ; i += 4) {
    temp.push( pixels[i],  pixels[i + 1],  pixels[i + 2]);
  }
  return temp;
}

async function LoadModel(){
  try {
    /* 
      Creating session in ORT (ONNX Runtime)
      it uses WASM as backend
      Loading Model used for imferance
    */
    session = await ort.InferenceSession.create('./movenet_lightning.onnx', { executionProviders: ['wasm'] });
  }
  catch (e) {
    console.log("Error:", e);
  }
  return session;
}

async function Infer(input, threshold){
  const feeds = { input: input };
  const pred = await session.run(feeds);

  temp = Array.prototype.slice.call(pred.keras_layer_1.data);
  let keypoints = []
  while (temp.length){
    if(temp[2] < threshold){
      temp.splice(0,3);
      keypoints.push([0,0,0])
    } 

      keypoints.push(temp.splice(0, 3));
  } 

  return keypoints.map(x=> [x[0]*192, x[1]*192, x[2]]);
}