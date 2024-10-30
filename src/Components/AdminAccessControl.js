import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const AdminAccessControl = () => {
  const [showAdminContent, setShowAdminContent] = useState(false);
  const [showUserContent, setShowUserContent] = useState(false);

  const handleAdmin = () => {
    setShowAdminContent(true);
    setShowUserContent(false);
  };
  const handleUser = () => {
    setShowAdminContent(false);
    setShowUserContent(true);
  };
  return (
    <div>
      <h1>AdminAccessControl</h1>
      <h6>
        Objective: Create a component that displays different content based on
        whether the user is an admin or a regular user.
      </h6>

      <div style={{ width: 700, flexDirection: "row" }}>
        <div
          style={{
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          <Button
            variant={"primary"}
            style={{
              marginTop: 20,
              width: 100,
              borderRadius: 12,
            }}
            onClick={handleAdmin}
          >
            Admin
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          <Button
            variant={"primary"}
            style={{
              marginTop: 20,
              width: 100,

              borderRadius: 12,
            }}
            onClick={handleUser}
          >
            User
          </Button>
        </div>
      </div>

      {showAdminContent ? (
        <div>
          <h1>Admin content</h1>
          <p>
            Admin accounts can be a security risk if their credentials are
            compromised. To mitigate this risk, organizations can: Limit the
            number of users with admin privileges Require a strong password and
            Multi-Factor Authentication (MFA) for admin accounts Store passwords
            in a password vault
          </p>
        </div>
      ) : (
        <></>
      )}

      {showUserContent ? (
        <div>
          <h1>User Content</h1>
          <p>
            A user account is a way for an entity to access resources, such as a
            computer, software service, or human being. User accounts allow
            users to log in, set preferences, and access resources based on
            their account permissions. User accounts are important for the
            security of a system. They are a target for cyber attacks, so
            organizations should follow guidelines for creating,
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminAccessControl;
