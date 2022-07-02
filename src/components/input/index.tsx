import { StyledRoot } from "./style";

type InputProps = {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const StyledInput: React.FC<InputProps> = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  console.log(name, value);
  return (
    <>
      <StyledRoot
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default StyledInput;
