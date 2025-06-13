import type { ChangeEvent } from "react";

type InputProps = {
    type: "text" | "number" | "date",
    label: string
    name: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {

    const { type, label, name, value, onChange } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;