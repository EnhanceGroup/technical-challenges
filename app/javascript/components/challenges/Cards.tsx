import * as React from 'react';

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';

  const [images, setImages] = React.useState([]); // declare state variable "images" to an empty array and "setImages" method to update images state

  function getImage(date: string) {
   return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
   .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.hdurl;
      });
  }
  React.useEffect(() => {
    getImage('2020-02-13').then(response => setImages(currentarray=>[...currentarray, response]));
    getImage('2020-02-12').then(response => setImages(currentarray=>[...currentarray, response]));
    getImage('2020-02-02').then(response => setImages(currentarray=>[...currentarray, response]));
    getImage('2020-02-01').then(response => setImages(currentarray=>[...currentarray, response]));
    
}, []);

  
const [index, setIndex] = React.useState(0);
const [indexRandom, setIndexRandom] = React.useState(0);
    
    const nextImage = () => {
      if(index < images.length-1)
      {setIndex(index + 1);}
      else{alert('Last image');}
      };

  const previousImage = () => {
    const nextIndex = index - 1;
    if (index <= 0) {
      alert('First image');
       } else {
      setIndex(index-1);
    }
  };

  const randomImage =() => {
    setIndexRandom(Math.floor(Math.random()*images.length));
    
  }

  const buttonStyles: React.CSSProperties = {
    padding: '10px 20px',
    background: 'grey',
    color: 'white',
    margin: '10px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🥇 Challenge 3</h1>
      <a href="/thanks">Click here when you're finished</a>
      {/* NASA API docs here: https://api.nasa.gov/ */}
      <h3>Slider</h3>
      <h3>1. Refactor this code to remove duplication and make it more 'Reacty'.</h3>
      <h3>2. Convert the images into a slider using the pagination buttons.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${images[index]})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={previousImage}>Previous</button>
        <button style={buttonStyles} onClick={nextImage}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${images[indexRandom]})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={randomImage}>Randomise</button>
      </div>
    </div>
  );
}
