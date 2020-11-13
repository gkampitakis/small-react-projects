import React, { ReactElement, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import List from './components/List';
import Alert, { AlertI } from './components/Alert';
import './index.scss';

const newId = () => new Date().getTime().toString();

export default function GroceryBud (): ReactElement {
  const [data, setData] = useLocalStorage<{ id: string; title: string }[]>('groceryList', []);
  const [formValue, setFormValue] = useState('');
  const [alert, setAlert] = useState<AlertI>({ msg: '', type: '' });
  const [editId, setEditId] = useState('');

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formValue) return;

    if (editId) {
      setData((data) => data.map(d => {
        if (d.id === editId) return { ...d, title: formValue }
        return d;
      }));

      setAlert({ type: 'success', msg: 'Item updated' });
      setFormValue('');
      setEditId('');
      return;
    }

    setData((data) => ([...data, { title: formValue, id: newId() }]));
    setAlert({ type: 'success', msg: 'Item added to the list' });
    setFormValue('');
  }

  function removeItem (id: string) {
    setData(data => data.filter(d => d.id !== id));
  }

  function editItem (id: string) {
    const element = data.find(item => item.id === id);
    setFormValue(element!.title);
    setEditId(id);
  }

  function clearList () {
    setAlert({ type: 'danger', msg: 'Empty List' });
    setData([]);
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <Alert data={data} msg={alert.msg} type={alert.type} />
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder='e.g. eggs'
          />
          <button type="submit" className="submit-btn">
            {editId !== '' ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <List data={data} editItem={editItem} removeItem={removeItem} />
      {!!data.length && <button className="clear-btn" onClick={clearList}>clear items</button>}
    </section>
  )
}
