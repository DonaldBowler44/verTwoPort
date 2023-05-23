import React, { useRef, useEffect, useState } from 'react';
import './TVisonBox.css';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';
import MySVGComponent from './MySVGComponent';
import backgroundSound from './audio/FollowYouHome.mp3';
import { useNavigate } from 'react-router-dom';


const MODEL_URL = '/models';

function TVisionBox() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // const audioRef = useRef(null);
  // const audio = new Audio(backgroundSound);
  const [randomNumber1, setRandomNumber1] = useState("");
  const [randomNumber2, setRandomNumber2] = useState("");
  const [randomNumber3, setRandomNumber3] = useState("");
  const [randomNumber4, setRandomNumber4] = useState("");
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const videoWidth = 911;
  const videoHeight = 680;
  const navigate = useNavigate();

  
  function ChangeNumber1() {
    var newNumber = Math.floor(Math.random(9) * 1000000000000);
    var formattedNumber = newNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " "); // format the number with spaces
    setRandomNumber1(formattedNumber); // set the state variable to the formatted number
  }

  function ChangeNumber2() {
    var newNumber = Math.floor(Math.random(9) * 1000000000000); // generate a 12-digit number
    var formattedNumber = newNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " "); // format the number with spaces
    setRandomNumber2(formattedNumber); // set the state variable to the formatted number
  }

  function ChangeNumber3() {
    var newNumber = Math.floor(Math.random(9) * 1000000000000); // generate a 12-digit number
    var formattedNumber = newNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " "); // format the number with spaces
    setRandomNumber3(formattedNumber); // set the state variable to the formatted number
  }

  function ChangeNumber4() {
    var newNumber = Math.floor(Math.random(9) * 1000000000000); // generate a 12-digit number
    var formattedNumber = newNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " "); // format the number with spaces
    setRandomNumber4(formattedNumber); // set the state variable to the formatted number
  }

  function ChangeNumber5() {
    var newNumber = Math.floor(Math.random(9) * 100000);
    document.getElementById('randomscan').textContent = newNumber;
  }

  // useEffect(() => {
  //   audioRef.current = new Audio(backgroundSound);
  //   audioRef.current.addEventListener('canplaythrough', () => {
  //     setAudioLoaded(true);
  //   });
  //   audioRef.current.load();
  // }, []);

  // useEffect(() => {
  //   if (audioLoaded) {
  //     audioRef.current.play();
  //   }
  // }, [audioLoaded]);
  
  

  useEffect(() => {
    ChangeNumber1();
    ChangeNumber2();
    ChangeNumber3();
    ChangeNumber4();
    ChangeNumber5();

    const interval = setInterval(() => {
      ChangeNumber1();
      ChangeNumber2();
      ChangeNumber3();
      ChangeNumber4();
      ChangeNumber5();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  


  useEffect(() => {
    const loadModels = async () => {
      await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
      await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
      await faceapi.loadFaceExpressionModel(MODEL_URL);
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (!webcamRef.current || !canvasRef.current) return;
    const interval = setInterval(async () => {
      const detections = await detectFaces(webcamRef.current.video);
      drawDetections(canvasRef.current, detections);

      if (detections.length > 0) {
        setFaceDetected(true);
      } else {
        setFaceDetected(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [webcamRef, canvasRef]);

  const detectFaces = async (video) => {
    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 });
    const detections = await faceapi
    .detectAllFaces(video, options)
    .withFaceLandmarks(true)
    .withFaceExpressions();

    return detections;
  };

  const drawDetections = (canvas, detections) => {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    const resizedDetections = faceapi.resizeResults(detections, {
      width: canvas.width,
      height: canvas.height,
    });
  
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    resizedDetections.forEach((detection) => {
      const box = detection.detection.box;
      const emotions = detection.expressions;
      const primaryEmotion = Object.keys(emotions).reduce((a, b) =>
        emotions[a] > emotions[b] ? a : b
      );
      const labelText = `${primaryEmotion}: ${emotions[primaryEmotion].toFixed(2)}`;
  
      drawCustomBox(canvas, box, labelText, "rgba(255, 0, 0, 1)", "white");

    });

  };
  
  const drawCustomBox = (canvas, box, labelText, boxColor, textColor) => {
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = boxColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(box.x, box.y, box.width, box.height);
  
    const textWidth = ctx.measureText(labelText).width;
    const textHeight = parseInt("16px", 10);
  
    ctx.fillStyle = boxColor;
    ctx.fillRect(box.x, box.y - textHeight, textWidth + 6, textHeight);
  
    ctx.fillStyle = textColor;
    ctx.font = "16px Arial";
    ctx.fillText(labelText, box.x + 3, box.y - 3);
  };
  
  
  

  return (
    <div className="App">
      {/* <audio ref={audioRef} loop /> */}

      <header className="App-header">
        <Webcam ref={webcamRef} mirrored={false}
         width={videoWidth}
        height={videoHeight}
         style={{ position: 'absolute' }} />

        <canvas ref={canvasRef} 
        width={videoWidth}
        height={videoHeight}
         style={{ position: 'absolute' }} />
         <h1 className="terminator-vision-title">Bowler OS</h1>
         <div className="left-text">
          <p>SYSTEM BOOT<span className="flash">_</span></p>
          <p>ANALYSIS</p>
          <p>***************</p>
          
          <p id="randomnumber1">{randomNumber1 || "0000 0000 0000"}</p>
          <p id="randomnumber2">{randomNumber2 || "0000 0000 0000"}</p>
          <p id="randomnumber3">{randomNumber3 || "0000 0000 0000"}</p>
          <p id="randomnumber4">{randomNumber4 || "0000 0000 0000"}</p>
          
          <br></br><br></br>

					<p>THREAT ASSESSMENT</p>
					<p>***************</p>
					<p>TOLERANCE LVL4</p>
          </div>
          <div className='right-text'>
            <p>SCAN MODE <span id='randomscan'>438894</span></p>
            <p>***************</p>
            <div className='modelinfo'>
            <p>Model T-888</p>
					  <p>TOK715 Ver. 20.9</p>
            <p>Skynet Cyberdyne Systems</p>
            </div>
            <br></br>
            <MySVGComponent />
  

          </div>
         <div
          className="red-filter"
          style={{
            position: 'absolute',
            width: videoWidth,
            height: videoHeight,
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
          }}
    ></div>
      {faceDetected && (
          <div className="button-container">
            <button className="click-me-button" onClick={() => navigate('/home')}>Visit Site</button>

          </div>
        )}
      </header>
    </div>
  );
}

export default TVisionBox;