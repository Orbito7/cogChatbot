function handleChat() {
  const input = document.getElementById("userInput").value.trim();
  const chatbox = document.getElementById("chatbox");
  const bias = document.getElementById("biasSelect").value;

  if (!input) return;

  const userMsgEl = document.createElement("p");
  userMsgEl.className = "user";
  userMsgEl.textContent = `You: ${input}`;

  const botMsgEl = document.createElement("p");
  botMsgEl.className = "bot";
  botMsgEl.textContent = `Bot: ${generateBiasResponse(input, bias)}`;

  chatbox.appendChild(userMsgEl);
  chatbox.appendChild(botMsgEl);

  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

document
  .getElementById("userInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleChat();
    }
  });

function generateBiasResponse(input, bias) {
  switch (bias) {
    case "confirmation":
      return `I completely agree! "${input}" makes total sense, I was thinking the same.`;
    case "negativity":
      return `I'm not sure that's a good idea. "${input}" may cause some problems.`;
    case "optimism":
      return `That sounds great! "${input}" could really lead to something amazing.`;
    default:
      return "Interesting!";
  }
}

document
  .getElementById("biasSelect")
  .addEventListener("change", updateBiasDescription);

function updateBiasDescription() {
  const bias = document.getElementById("biasSelect").value;
  const desc = document.getElementById("biasDescription");

  switch (bias) {
    case "confirmation":
      desc.textContent =
        "Confirmation Bias: The tendency to favor information that confirms your existing beliefs.";
      break;
    case "negativity":
      desc.textContent =
        "Negativity Bias: The tendency to focus more on negative events than positive ones.";
      break;
    case "optimism":
      desc.textContent =
        "Optimism Bias: The belief that things will generally turn out well, often underestimating risks.";
      break;
    default:
      desc.textContent = "";
  }
}

// Show default description on load
updateBiasDescription();
