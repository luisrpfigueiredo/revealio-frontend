import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { saveSecret } from "./../../services/secrets";
import { ReactComponent as SuccessIcon } from "../../assets/success-icon.svg";
import SecretContainer from "../secret-container/secret-container";
import SecretTextField from "../secret-text-field/secret-text-field";

import "./create-secret.css";

const CreateSecret = () => {
  const [secret, setSecret] = useState("");
  const [helperText, setHelperText] = useState("");
  const [displayLink, setDisplayLink] = useState("");

  const isValidSecret = (text) => {
    return text.length;
  };

  const onSecretChange = (event) => {
    const newSecret = event.target.value;
    if (helperText) setHelperText("");
    setSecret(newSecret);
  };

  const submitForm = async () => {
    if (!isValidSecret(secret)) {
      setHelperText("Please fill in your secret");
      return;
    }

    try {
      const response = await saveSecret({
        secret,
      });

      setDisplayLink(response.linkForSecret);
    } catch (_e) {
      // TODO: add some error flag, this is unexpected behavior
    }
  };

  return (
    <SecretContainer>
      <div className="CreateSecret">
        <div className="CreateSecretMessage">
          Sharing a secret has never been easier!
        </div>
        <div className="CreateSecretForm">
          <SecretTextField
            helperText={helperText}
            value={secret}
            onChange={onSecretChange}
          />
          {!displayLink && (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={submitForm}
            >
              Share now
            </Button>
          )}
          {displayLink && (
            <Button
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<SuccessIcon />}
            >
              Success!
            </Button>
          )}
        </div>
        {displayLink && (
          <div className="SecretDisplay">
            <p>
              This is your secret link, but be warned! The link can only be
              revealed once, afterwards it self-destructs.
            </p>
            <div className="DisplayLinkText">
              <TextField
                value={displayLink}
                readOnly
                fullWidth
                variant="outlined"
              />
            </div>
          </div>
        )}
      </div>
    </SecretContainer>
  );
};

export default CreateSecret;
