import ParamEditor from './components/ParamEditor';
import './App.css';

function App() {
  const params = [
    { id: 1, name: 'Назначение', type: 'string' },
    { id: 2, name: 'Длина', type: 'string' },
    // { id: 3, name: 'Новый параметр', type: 'string' },
  ];

  const model = {
    paramValues: [
      { paramId: 1, value: 'повседневное' },
      { paramId: 2, value: 'макси' },
      // { paramId: 3, value: 'новый' },
    ],
    colors: [],
  };
  return (
    <div className='main'>
      <ParamEditor
        params={params}
        model={model}
      />
    </div>
  );
}

export default App;
