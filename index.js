const gTTS = require("gtts");

let speech =
  "bilgehan nasılsın, ayşe bugün okula gidicek. ";
const gtts = new gTTS(speech, "tr");

gtts.save("Voice.mp3", function (err, result) {
  if (err) {
    throw new Error(err);
  }
  console.log("Text to speech converted!");
});

// ! https://www.npmjs.com/package/gtts
// ! https://deasciifier.com/  yaziyi turkce karakterlere cevirme
