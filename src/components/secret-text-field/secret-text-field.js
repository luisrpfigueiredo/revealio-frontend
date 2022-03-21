import "./secret-text-field.css";
import { TextField } from "@material-ui/core";

const SecretTextField = ({ helperText, value, onChange, readOnly }) => {
  return (
    <div className="CreateSecretTextField">
      <TextField
        fullWidth
        multiline
        required
        variant="outlined"
        placeholder="Enter a secret..."
        helperText={helperText}
        value={value}
        onChange={onChange}
        error={!!helperText}
        readOnly={readOnly}
      />
    </div>
  );
};

export default SecretTextField;
