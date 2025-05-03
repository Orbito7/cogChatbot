function handleChat() {
  const input = document.getElementById("userInput").value.trim();
  const chatbox = document.getElementById("chatbox");
  const bias = document.getElementById("biasSelect").value;

  if (!input) return;

  const userMsg = `<p class="user">You: ${input}</p>`;
  const botMsg = `<p class="bot">Bot: ${generateBiasResponse(input, bias)}</p>`;

  chatbox.innerHTML += userMsg + botMsg;
  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

function generateBiasResponse(input, bias) {
  switch (bias) {
    case "confirmation":
      return `Absolutely — "${input}" is a great point! I was thinking the same.`;
    case "negativity":
      return `Hmm, that sounds risky... Are you sure about "${input}"? Could be a problem.`;
    case "optimism":
      return `That's a fantastic idea! "${input}" could really lead to something amazing.`;
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
