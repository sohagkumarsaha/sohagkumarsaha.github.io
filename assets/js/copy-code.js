/**
 * Copy-to-clipboard button for all code blocks.
 * Adds a "Copy" button to every <pre><code> block.
 */
(function () {
  function addCopyButtons() {
    document.querySelectorAll("div.highlighter-rouge, figure.highlight").forEach(function (block) {
      if (block.querySelector(".copy-code-btn")) return; // already added

      var btn = document.createElement("button");
      btn.className = "copy-code-btn";
      btn.innerText = "Copy";

      btn.addEventListener("click", function () {
        var code = block.querySelector("code, pre");
        var text = code ? code.innerText : "";
        navigator.clipboard.writeText(text).then(function () {
          btn.innerText = "Copied!";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.innerText = "Copy";
            btn.classList.remove("copied");
          }, 2000);
        }).catch(function () {
          btn.innerText = "Error";
          setTimeout(function () { btn.innerText = "Copy"; }, 2000);
        });
      });

      block.style.position = "relative";
      block.appendChild(btn);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addCopyButtons);
  } else {
    addCopyButtons();
  }
})();
