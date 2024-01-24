"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import './style.css';
import { Link } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';


const Home = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/items', item);
      console.log('Item added successfully:', response.data);
      // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error adding item:');
      // Handle error, show an error message, etc.
    }
  };

  return (
    <main>
      <link rel="icon" href="/assets/images/logo.svg" />
      <>
        <section>
          <div>
            <div>
              <h1>Host, Connect, Celebrate: Your Events, Our Platform!</h1>
              <p>Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community</p>
              <Button>
                <a href="#events"></a>
                Explore Now
              </Button>
            </div>
            <Image
              src="/assets/images/hero.png"
              width={1000}
              height={1000}
              alt='hero'
            />
          </div>
        </section>
        <section id='addItem'>
          <h2>Add Item</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={item.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={item.description}
                onChange={handleChange}
              />
            </div>
            <Button className="b" type="submit">Add Item</Button>
          </form>
        </section>
        <section id='events'>
          <h2>
            Trusted by <br /> Thousands of Events
          </h2>
          <div>
            Search
            CategoryFilter
          </div>
        </section>
      </>
    </main>
  );
};

export default Home;
