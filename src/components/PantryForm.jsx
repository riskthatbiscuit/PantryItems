import {useState} from 'react';

function PantryForm(props) {
  const [input, setInput] = useState('');
  let [section, setSectionPantry] = useState('');

  const sectionPantry = ['Dry Items', 'Fridge', 'Spices'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!section) {
      section = 'Dry Items'
    };

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      section: section
    });

    setInput('');
    setSectionPantry('');
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <form className='bg-slate-400 w-full flex' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your pantry item"
          value={input}
          name="text"
          className='bg-purple-300'
          onChange= {handleChange}
        ></input>
        <div className='bg-lime-700 '>
          <button className={`bg-red-500 ${section} hover:bg-green-300`}>
            {section || 'Pantry Section'}
          </button>
          <div className='border-4 hidden'>
            <p onClick={() => setSectionPantry(sectionPantry[0])}>Dry Items</p>
            <p onClick={() => setSectionPantry(sectionPantry[1])}>Fridge</p>
            <p onClick={() => setSectionPantry(sectionPantry[2])}>Spices</p>
          </div>
        </div>
        <button className='bg-white'>Add pantry item</button>
      </form>
    </div>
  )
}

export default PantryForm;