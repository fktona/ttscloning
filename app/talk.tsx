"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, Square, Play, Pause, VolumeX, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReactMediaRecorder = React.lazy(() =>
  import("react-media-recorder").then((module) => ({
    default: module.ReactMediaRecorder,
  }))
);

async function transcribeAudio(blob: Blob): Promise<string> {
  const formData = new FormData();
  formData.append("file", blob, "audio.webm");

  const response = await fetch("/api/transcribe", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to transcribe audio");
  }

  const data = await response.json();
  return data.text;
}

async function textToSpeech(text: string): Promise<string> {
  try {
    const response = await fetch("/api/audio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    console.log("data", data);
    if (data.audioUrl) {
      return data.audioUrl;
    } else {
      throw new Error("Failed to generate speech");
    }
  } catch (error) {
    console.error("Error in text-to-speech:", error);
    throw error;
  }
}

export default function Talk() {
  const [transcription, setTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [responses, setResponses] = useState([]);
  const [history, setHistory] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentStatus, setCurrentStatus] = useState("Idle");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onplay = () => setIsPlaying(true);
      audioRef.current.onpause = () => setIsPlaying(false);
      audioRef.current.onended = () => setIsPlaying(false);
    }
  }, [audioUrl]);

  const handleStopRecording = async (blobUrl: string) => {
    try {
      setCurrentStatus("Transcribing...");
      const blob = await fetch(blobUrl).then((res) => res.blob());
      const result = await transcribeAudio(blob);
      setTranscription(result);

      setCurrentStatus("Processing...");
      const payload = {
        userName: "28",
        name: "ug",
        text: result,
      };

      const response = await fetch(
        "https://app.eventblink.xyz/truth/dfe68425-9f80-07aa-a089-a7610296f191/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResponses(data);
        const newResponse = data[0].text;
        //@ts-ignore
        setHistory((prevHistory) => [...prevHistory, newResponse]);

        setCurrentStatus("Generating speech...");
        const speechUrl = await textToSpeech(newResponse);
        setAudioUrl(speechUrl);
        setCurrentStatus("Ready to play");
      } else {
        console.error(
          "Failed to send message:",
          response.status,
          response.statusText
        );
        setCurrentStatus("Error: Failed to process");
      }
    } catch (error) {
      console.error("Error during transcription or sending:", error);
      setTranscription(
        "An error occurred while transcribing audio or sending the message."
      );
      setCurrentStatus("Error: Failed to process");
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex h-full absolute flex-col items-center justify-between gap-12 w-full">
      <h1 className="text-4xl font-medium">Trump's Response</h1>
      <div className="w-full h-[40%] max-w-xl mx-auto bg-white/30 overflow-y-auto">
        {history.map((response, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            <p className="text-gray-400 text-sm">{response}</p>
          </div>
        ))}
      </div>
      <ReactMediaRecorder
        audio
        onStop={handleStopRecording}
        render={({
          startRecording,
          stopRecording,
          pauseRecording,
          resumeRecording,
          status,
        }) => (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-400">{currentStatus}</p>
            <div className="flex gap-4">
              <Button
                aria-label={
                  isRecording
                    ? isPaused
                      ? "Resume Recording"
                      : "Pause Recording"
                    : "Start Recording"
                }
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800"
                onClick={() => {
                  if (isRecording) {
                    if (isPaused) {
                      resumeRecording();
                      setIsPaused(false);
                      setCurrentStatus(
                        status == "acquiring_media"
                          ? "connecting..."
                          : "Recording..."
                      );
                    } else {
                      pauseRecording();
                      setIsPaused(true);
                      setCurrentStatus("Paused");
                    }
                  } else {
                    startRecording();
                    setIsRecording(true);
                    setCurrentStatus("Recording...");
                  }
                }}
              >
                {isRecording ? (
                  isPaused ? (
                    <Play className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <Pause className="w-6 h-6 text-yellow-500" />
                  )
                ) : (
                  <Mic className="w-6 h-6 text-red-500" />
                )}
              </Button>
              <Button
                aria-label="Stop Recording"
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800"
                onClick={() => {
                  stopRecording();
                  setIsRecording(false);
                  setIsPaused(false);
                  setCurrentStatus("Processing...");
                }}
                disabled={!isRecording}
              >
                <Square className="w-6 h-6 text-red-500" />
              </Button>
              <Button
                aria-label={isPlaying ? "Pause" : "Play"}
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800"
                onClick={togglePlayPause}
                disabled={!audioUrl}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </Button>
              <Button
                aria-label={isMuted ? "Unmute" : "Mute"}
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800"
                onClick={toggleMute}
                disabled={!audioUrl}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        )}
      />
      <audio src={audioUrl} autoPlay />
    </div>
  );
}
