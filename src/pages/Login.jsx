import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import AuthIdle from "../assets/images/auth-idle.svg";
import AuthFace from "../assets/images/auth-face.svg";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import LoadModel from "../assets/mp3/LoadModel.mp3";
import LoadModelSuccess from "../assets/mp3/LoadModelSuccess.mp3";
import FaceReg from "../assets/mp3/FaceReg.mp3";
function Login() {
  const handleAudio = () => { 
    const audio = new Audio(LoadModel);
    audio.play();
  }
  const handleSuccessAudio = () => { 
    const audio = new Audio(LoadModelSuccess);
    audio.play();
  }

  useEffect(() => {
    handleAudio();
  }, []);
  const [tempAccount, setTempAccount] = useState("");
  const [localUserStream, setLocalUserStream] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [faceApiLoaded, setFaceApiLoaded] = useState(false);
  const [loginResult, setLoginResult] = useState("PENDING");
  const [imageError, setImageError] = useState(false);
  const [counter, setCounter] = useState(5);
  const [labeledFaceDescriptors, setLabeledFaceDescriptors] = useState({});
  const videoRef = useRef();
  const canvasRef = useRef();
  const faceApiIntervalRef = useRef();
  const videoWidth = 640;
  const videoHeight = 360;

  const location = useLocation();
  const navigate = useNavigate();

  if (!location?.state) {
    return <Navigate to="/" replace={true} />;
  }

  const loadModels = async () => {
    // const uri = import.meta.env.DEV ? "/models" : "/react-face-auth/models";
    const uri = "/models";

    await faceapi.nets.ssdMobilenetv1.loadFromUri(uri);
    await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
    await faceapi.nets.faceRecognitionNet.loadFromUri(uri);
  };

  useEffect(() => {
    setTempAccount(location?.state?.account);
  }, []);
  useEffect(() => {
    if (tempAccount) {
      loadModels()
        .then(async () => {
          const labeledFaceDescriptors = await loadLabeledImages();
          setLabeledFaceDescriptors(labeledFaceDescriptors);
        })
        .then(() => setModelsLoaded(true));
    }
  }, [tempAccount]);

  useEffect(() => {
    if (loginResult === "SUCCESS") {
      const counterInterval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);

      if (counter === 0) {
        videoRef.current.pause();
        videoRef.current.srcObject = null;
        localUserStream.getTracks().forEach((track) => {
          track.stop();
        });
        clearInterval(counterInterval);
        clearInterval(faceApiIntervalRef.current);
        localStorage.setItem(
          "faceAuth",
          JSON.stringify({ status: true, account: tempAccount })
        );
        navigate("/protected", { replace: true });
      }

      return () => clearInterval(counterInterval);
    }
    setCounter(5);
  }, [loginResult, counter]);

  const getLocalUserVideo = async () => {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setLocalUserStream(stream);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const scanFace = async () => {
    faceapi.matchDimensions(canvasRef.current, videoRef.current);
    const faceApiInterval = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptors();
      const resizedDetections = faceapi.resizeResults(detections, {
        width: videoWidth,
        height: videoHeight,
      });

      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

      const results = resizedDetections.map((d) =>
        faceMatcher.findBestMatch(d.descriptor)
      );

      if (!canvasRef.current) {
        return;
      }

      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

      if (results.length > 0 && tempAccount.id === results[0].label) {
        setLoginResult("SUCCESS");
      } else {
        setLoginResult("FAILED");
      }

      if (!faceApiLoaded) {
        setFaceApiLoaded(true);
      }
    }, 1000 / 15);
    faceApiIntervalRef.current = faceApiInterval;
  };

  async function loadLabeledImages() {
    if (!tempAccount) {
      return null;
    }
    const descriptions = [];

    let img;

    try {
      const imgPath =
        tempAccount?.type === "CUSTOM"
          ? tempAccount.picture
          : // : import.meta.env.DEV
            // ? `/temp-accounts/${tempAccount.picture}`
            // : `/react-face-auth/temp-accounts/${tempAccount.picture}`;
            `/temp-accounts/${tempAccount.picture}`;

      img = await faceapi.fetchImage(imgPath);
    } catch {
      setImageError(true);
      return;
    }

    const detections = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detections) {
      descriptions.push(detections.descriptor);
    }

    return new faceapi.LabeledFaceDescriptors(tempAccount.id, descriptions);
  }

  if (imageError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-[24px] max-w-[840px] mx-auto">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-rose-700 sm:text-4xl">
          <span className="block">
            Upps! There is no profile picture associated with this account.
          </span>
        </h2>
        <span className="block mt-4">
          Please contact administration for registration or try again later.
        </span>
      </div>
    );
  }

  const handleVoiceLoadModel = () => { 
    const audio = new Audio(LoadModelSuccess);
    audio.play();
  }
  const handleVoiceOnFocus = () => { 
    const audio = new Audio(FaceReg);
    audio.play();
  }
  const [isSpeaked, setIsSpeaked] = useState(false);
  if (modelsLoaded ){
    if (!isSpeaked){
    handleVoiceLoadModel();
    setIsSpeaked(true);
    }
  }
  return (
    <div className="h-full flex flex-col items-center justify-center gap-[24px] max-w-[720px] mx-auto">
      {!localUserStream && !modelsLoaded && (
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            Bạn đang đăng nhập bằng nhận diện khuôn mặt.
          </span>
          <span className="block text-blue-900 mt-2">Đang chuẩn bị dữ liệu...</span>
        </h2>
      )}
      {!localUserStream && modelsLoaded && (
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" onFocus={handleVoiceOnFocus}>
          <span className="block text-blue-900 mt-2">
            Nhận diện khuôn mặt để đăng nhập
          </span>
        </h2>
      )}
      {localUserStream && loginResult === "SUCCESS" && (
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-blue-900 mt-2">
            Đăng nhập thành công
          </span>
          <span className="block text-blue-900 mt-2">
            Chờ {counter} vài giây...
          </span>
        </h2>
      )}
      {localUserStream && loginResult === "FAILED" && (
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-rose-700 sm:text-4xl">
          <span className="block mt-[56px]">
            Chúng tôi không thể nhận diện.
          </span>
        </h2>
      )}
      {localUserStream && !faceApiLoaded && loginResult === "PENDING" && (
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block mt-[56px]">Nhận diện khuôn mặt...</span>
        </h2>
      )}
      <div className="w-full">
        <div className="relative flex flex-col items-center p-[10px]">
          <video
            muted
            autoPlay
            ref={videoRef}
            height={videoHeight}
            width={videoWidth}
            onPlay={scanFace}
            style={{
              objectFit: "fill",
              height: "360px",
              borderRadius: "10px",
              display: localUserStream ? "block" : "none",
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              display: localUserStream ? "block" : "none",
            }}
          />
        </div>
        {!localUserStream && (
          <>
            {modelsLoaded ? (
              <>
                <button
                  onClick={getLocalUserVideo}
                  type="button"
                  className="flex justify-center items-center w-full py-2.5 px-5 mr-2 text-sm font-medium text-white bg-blue-900 hover:bg-blue-900 rounded-lg border border-gray-200 inline-flex items-center"
                  onFocus={handleVoiceOnFocus}
                >
                  Nhận diện khuôn mặt
                </button>
              </>
            ) : (
              <>
                
                <button
                  disabled
                  type="button"
                  className="cursor-not-allowed flex justify-center items-center w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-900 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline mr-2 w-4 h-4 text-gray-200 animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  Xin hãy đợi...
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
