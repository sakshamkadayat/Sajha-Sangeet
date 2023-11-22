import React from 'react';
import "../Styles/Home.css";

const cardsData = [
  {
    title: 'Into the Unknown',
    lyrics: `
      [Verse 1]
      [Em] Lost in the shadows, [C] chasing the light,
      [G] Searching for answers, in the [D] dead of the night.
      [Em] Whispers of echoes, [C] calling my name,
      [G] Longing for something, that feels [D] just the same.
    `,
    imageUrl: 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Into the Unknown',
    lyrics: `
      [Verse 1]
      [Em] Lost in the shadows, [C] chasing the light,
      [G] Searching for answers, in the [D] dead of the night.
      [Em] Whispers of echoes, [C] calling my name,
      [G] Longing for something, that feels [D] just the same.
    `,
    imageUrl: 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }, {
    title: 'Into the Unknown',
    lyrics: `
      [Verse 1]
      [Em] Lost in the shadows, [C] chasing the light,
      [G] Searching for answers, in the [D] dead of the night.
      [Em] Whispers of echoes, [C] calling my name,
      [G] Longing for something, that feels [D] just the same.
    `,
    imageUrl: 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Card = ({ title, lyrics, imageUrl }) => (
  <div className="card">
    <div className="image-wrapper">
      <a className="image-link" href="#">
        <img  className="blogimg" src={imageUrl} alt={title} />
      </a>
    </div>
    <div className="text-box-wrapper">
      <div className="text-box">
        <h1 className="heading">{title}</h1>
        <p className="text">{lyrics}</p>
      </div>
    </div>
    <div className="button-wrapper">
      <a className="button" href="#">
        Read More
      </a>
    </div>
  </div>
);


const CardList = () => (
  <div className="card-container-main">
  <h1 style={{textAlign:'center'}}>Recent Posts</h1>
  <div className="card-wrapper">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        lyrics={card.lyrics}
        imageUrl={card.imageUrl}
      />
    ))}
  </div>
  </div>
);

export default CardList;
