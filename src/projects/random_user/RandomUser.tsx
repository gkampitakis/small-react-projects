import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock
} from 'react-icons/fa';
import { useBodyStyles, useDocTitle, useFetch } from '../../hooks';
import './index.scss';

interface Person {
  image: string;
  name: string;
  email: string;
  age: string;
  street: string;
  phone: string;
  password: string;
}

const URL = 'https://randomuser.me/api/';

export default function RandomUser(): ReactElement {
  useDocTitle('Random User');
  useBodyStyles({
    background: 'hsl(210, 36%, 96%)'
  });
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');
  const [person, setPerson] = useState<Person>({
    name: 'random person',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    email: 'random@email.com',
    age: '26',
    street: 'Oxford Street 51',
    phone: '0332100000',
    password: '1234$%1'
  });
  const [data, loading, refetch, error] = useFetch<any>(URL);

  const getPerson = useCallback(() => {
    if (!data) return;
    if (error) return console.error(error);

    const result = data.results[0];
    const { phone, email } = result;
    const { large: image } = result.picture;
    const { password } = result.login;
    const { first, last } = result.name;
    const {
      dob: { age }
    } = result;
    const {
      street: { number, name }
    } = result.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`
    };

    setTitle('name');
    setValue(newPerson.name);
    setPerson(newPerson);
  }, [data, error]);

  function handleValue(e: any) {
    if (e.target.classList.contains('icon')) {
      const newValue: keyof Person = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  }

  useEffect(() => {
    getPerson();
  }, [getPerson]);

  return (
    <main className="random_user_project">
      <div className="block bck-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={person.image}
            alt="Random User"
            className={`${loading && `loading`}`}
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              data-testid="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" data-testid="change-btn" onClick={refetch}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}
