import React from "react";

// ✅ Props ke type define karte hain
type ButtonProps = {
  label: string;                 

};

// ✅ Functional Component with Type
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
return (
    <button
    
      className={`px-4 py-2 bg-amber-400`}
    >
      {props.label}
    </button>
  );
};

export default Button;
