import * as React from 'react';
import {useEffect} from "react";

export default function Cards() {
  const nasaApiKey = '6H6EdNLLrDu8SC1LZMJkbJzoGIghjvrjzgQpF72W';
  const baseUri = 'https://api.nasa.gov/planetary/apod';

  const [images, setImages] = React.useState(['']);
  const [imageIndex, setImageIndex] = React.useState(0)
  const [randomIndex, setRandomIndex] = React.useState(0)

  const image = images[imageIndex]
  const randomImage = images[randomIndex]
  const dates = ['2020-02-13', '2020-02-12', '2020-02-02', '2020-02-01']

  function getRandomImage(){
    let index: number = 0
    let same = true
    while (same) {
        index = Math.floor(Math.random() * images.length)
        if (index !== randomIndex){
            same = false
        }

    }
    setRandomIndex(index)
  }

  function nextImage(){
    if (imageIndex < images.length - 1){
      setImageIndex(imageIndex+1)
    }else{
      setImageIndex(0)
    }

    }

  function prevImage(){
      if (imageIndex > 0){
      setImageIndex(imageIndex-1)
      }else{
      setImageIndex(images.length - 1)
        }
  }

  const getImages = () => {
      const arr: string[] = []
      dates.map(date =>
          getImage(date).then(response => arr.push(response)).then(()=>setImages(arr)))
  }

  useEffect(() => {

      getImages()

  }, []);


  const getImage = async (date: string) => {
    return fetch(`${baseUri}?api_key=${nasaApiKey}&date=${date}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.hdurl;
      });
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
          <div className="card" style={{ backgroundImage: `url(${image})` }}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={prevImage}>Previous</button>
        <button style={buttonStyles} onClick={nextImage}>Next</button>
      </div>
      <h3>Randomised Image</h3>
      <h3>1. Randomise the image when you click the button.</h3>
      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${randomImage})` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyles} onClick={getRandomImage}>Randomise</button>
      </div>
    </div>
  );
}
