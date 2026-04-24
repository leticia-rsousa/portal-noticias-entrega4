interface Props {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}

const InputField = ({ label, value, onChange, type = "text" }: Props) => {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default InputField;