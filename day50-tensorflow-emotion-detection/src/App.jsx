import React, { useEffect, useRef, useState } from 'react'
import * as faceapi from "face-api.js";


/*
1 Camera Access and start the camera
2 Model loading
- 3 Detect the emotion from camera video
- 4 Output
*/

function App() {

  const videoRef = useRef();
  const [emotion, setEmotion] = useState("Loading...");

  useEffect(() => {
    async function start() {
      const model_url = "/models";

      // Load Models
      await faceapi.nets.tinyFaceDetector.loadFromUri(model_url);
      await faceapi.nets.faceExpressionNet.loadFromUri(model_url);

      console.log("Model Loaded");

      // Start Camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });

      videoRef.current.srcObject = stream;
      setEmotion("Detecting...")

    }

    start();
  }, []);

  useEffect(() => {

    const interval = setInterval(async () => {

      if (!videoRef.current) return;

      // run the model
      const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceExpressions();

      console.log(detections);

      if(detections.length > 0){
        const expressions = detections[0].expressions;
        
        // MAXIMUM EMOTION FINDING LOGIC
        const maxEmotion = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);

        setEmotion(maxEmotion);
      }

    }, 1000);

    return () => clearInterval(interval);

  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Emotion Detection App</h1>

      <video ref={videoRef} autoPlay muted width="600" height="450"></video>
      <h2>Current Emotion: {emotion}</h2>
    </div>
  )
}

export default App