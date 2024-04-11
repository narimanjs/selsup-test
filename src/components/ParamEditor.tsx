/* eslint-disable @typescript-eslint/prefer-as-const */
import React, { useState, useEffect } from 'react';

export interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const styles = {
  editor: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    margin: '0 auto',
    maxWidth: '300px',
  },
  paramGroup: {
    marginBottom: '10px',
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

const ParamInput: React.FC<{
  param: Param;
  value: string;
  onChange: (paramId: number, value: string) => void;
}> = ({ param, value, onChange }) => {
  return (
    <div style={styles.paramGroup}>
      <label
        style={styles.label}
        htmlFor={`param-${param.id}`}
      >
        {param.name}
      </label>
      <input
        style={styles.input}
        id={`param-${param.id}`}
        type='text'
        value={value}
        onChange={e => onChange(param.id, e.target.value)}
      />
    </div>
  );
};

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<Model['paramValues']>(
    model.paramValues
  );

  const handleParamChange = (paramId: number, value: string) => {
    setParamValues(
      paramValues.map(pv => (pv.paramId === paramId ? { ...pv, value } : pv))
    );
  };

  useEffect(() => {
    setParamValues(model.paramValues);
  }, [model.paramValues]);

  return (
    <div style={styles.editor}>
      {params.map(param => {
        const paramValue =
          paramValues.find(pv => pv.paramId === param.id)?.value || '';
        return (
          <ParamInput
            key={param.id}
            param={param}
            value={paramValue}
            onChange={handleParamChange}
          />
        );
      })}
    </div>
  );
};

export default ParamEditor;
