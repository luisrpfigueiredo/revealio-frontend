import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import SecretContainer from "../secret-container/secret-container";
import SecretTextField from "../secret-text-field/secret-text-field";
import { getSecret } from "../../services/secrets";
import { ReactComponent as WarningIcon } from "../../assets/warning-icon.svg";

import "./retrieve-secret.css";

const RetrieveSecret = () => {
  const [revealedSecret, setRevealedSecret] = useState("");
  const [error, setError] = useState();
  useEffect(() => {}, []);

  const onRevealClick = async () => {
    const secretLink = window.location.pathname.substring(1);
    try {
      const { secret } = await getSecret(secretLink);
      setRevealedSecret(secret);
    } catch (e) {
      setError(e.response.status);
    }
  };

  return (
    <SecretContainer>
      <div className="RetrieveSecret">
        {error && (
          <div className="RetrieveSecretErrorContainer CenterContents">
            {error === 404 && (
              <>
                <h2>4-oh no-4</h2>
                <p>This secret has been deleted already</p>
              </>
            )}
            {error !== 404 && (
              <>
                <h2>{error}</h2>
                <p>Something went wrong</p>
              </>
            )}
          </div>
        )}
        {!error && (
          <>
            <p className="RetrieveSecretMessage">
              {revealedSecret
                ? "Here you go!"
                : "Hush! A secret has been shared with you"}
            </p>
            {!revealedSecret && (
              <div className="SecretBackdrop">
                <div className="RevealWindow CenterContents">
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={onRevealClick}
                  >
                    Reveal now
                  </Button>
                  <div className="RevealWarning">
                    <WarningIcon />
                    <p>
                      This is a one-time secret and will be deleted from the
                      server once you reveal it.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {revealedSecret && (
              <SecretTextField value={revealedSecret} readOnly />
            )}
          </>
        )}
      </div>
    </SecretContainer>
  );
};

export default RetrieveSecret;
