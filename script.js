async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    let random = data[Math.floor(Math.random() * quotes.length)];
    textt.innerText = `“${random.text}.”`;
    autor.innerText = random.author;  
  }
  getQuotes();


  document.querySelector("button").addEventListener('click', getQuotes)