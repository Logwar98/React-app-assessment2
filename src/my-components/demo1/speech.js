// Text to Speech

export const synth = window.speechSynthesis;

export const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 0;
  voice.rate = 1;
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice);
}