const textInput = document.getElementById("textInput")
const wordCount = document.getElementById("wordCount")
const charCount = document.getElementById("charCount")
const sentenceCount = document.getElementById("sentenceCount")
const calculateReadingTime = document.getElementById("calculateReadingTime")
const spaceCount = document.getElementById("spaceCount")
const paragraphCount = document.getElementById("paragraphCount")
const digitCount = document.getElementById("digitCount")
const symbolCount = document.getElementById("symbolCount")
textInput.addEventListener("input", ()=> {
    const text = textInput.value.trim()
    charCount.textContent =  text.length;

    const words = text.split(" ").filter(word=> word!== "")
    wordCount.textContent= words.length;

    const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "")
    sentenceCount.textContent = sentences.length;

    const spaces = (text.match(/ /g) || []).length;
    spaceCount.textContent = spaces;
    const paragraphs = text.split(/\n+/).filter(p=> p.trim() !== "");
    paragraphCount.textContent = paragraphs.length;

    const digits = (text.match(/[0-9]/g) || []).length;
    digitCount.textContent = digits;

    const symbols = (text.match(/[@#$%^&*+=<>/\\|~`_\-]/g) || []).length;
    symbolCount.textContent = symbols;

    

    const averageWPM = 250;
const mins = Math.floor(words.length / averageWPM);
const secs = Math.round((words.length / averageWPM - mins) * 60);
calculateReadingTime.textContent = words.length
  ? `${mins}m ${secs}s read`
  : `0m 0s read`;

        })



        


        
    const rightMenu = document.getElementById("rightMenu");

    function openRightMenu() {
      rightMenu.classList.remove("translate-x-full");
    }

    function closeRightMenu() {
      rightMenu.classList.add("translate-x-full");
    }
