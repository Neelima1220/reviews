import * as React from 'react';
import './style.css';

const reviewsData = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

export default function App() {
  const [data, setData] = React.useState(reviewsData);
  const [selected, setSelected] = React.useState(0);

  const goPrev = () => {
    if (selected === 0) {
      setSelected(data.length - 1);
    } else {
      setSelected(selected - 1);
    }
  };
  const goNext = () => {
    if (selected === data.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };
  const randomPerson = () => {
    const rand = Math.floor(Math.random() * data.length);
    if (rand === selected) {
      if (selected === 0) {
        setSelected(data.length - 1);
      } else {
        setSelected(selected - 1);
      }
    } else {
      setSelected(rand);
    }
  };
  return (
    <div
      style={{
        width: '30vh',
        margin: 'auto',
        height: '20rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightGray',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h3 style={{ margin: '0' }}>{data[selected].name}</h3>
        <p>{data[selected].job}</p>
      </div>
      <div>
        <button style={{ marginRight: '0.5rem' }} onClick={goPrev}>
          {' '}
          prev{' '}
        </button>
        <button onClick={goNext}> next</button>
      </div>
      <button style={{ marginTop: '1rem' }} onClick={randomPerson}>
        Random person
      </button>
    </div>
  );
}
