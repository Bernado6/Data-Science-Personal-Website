import { useState } from "react";
import Switch from "react-switch";

const SwitchExample = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <label>
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
};

export default SwitchExample;




