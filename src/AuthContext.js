import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    // Load users from localStorage
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    // Load logged-in user from localStorage
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Save users whenever updated
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save currentUser whenever updated
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const register = (username, email, password) => {
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("User already registered!");
      return false;
    }

    const newUser = {
      username,
      email,
      password,
      picture: "images/profile1.jpeg", // ✅ default picture
    };
    setUsers((prev) => {
      const updated = [...prev, newUser];
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;
    });

    alert("Registration successful! Please login.");
    return true;
  };

  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      alert("Invalid email or password!");
      return false;
    }
  };

  const loginWithGoogle = (googleUser) => {
    const existingUser = users.find((u) => u.email === googleUser.email);

    const user = {
      username: googleUser.name,
      email: googleUser.email,
      picture: googleUser.picture,
      mobile: existingUser?.mobile || "",
      nationality: existingUser?.nationality || "",
      dob: existingUser?.dob || "",
      gender: existingUser?.gender || "",
      address: existingUser?.address || "",
    };

    // If the user doesn't exist in users array, add them
    if (!existingUser) {
      setUsers((prev) => {
        const updated = [...prev, user];
        localStorage.setItem("users", JSON.stringify(updated));
        return updated;
      });
    }

    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const updatePassword = (email, currentPassword, newPassword) => {
    const userIndex = users.findIndex((u) => u.email === email);

    if (userIndex === -1) {
      alert("Email not found.");
      return false;
    }

    const user = users[userIndex];

    if (user.password !== currentPassword) {
      alert("Current password is incorrect.");
      return false;
    }

    const updatedUser = { ...user, password: newPassword };
    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;

    setUsers(updatedUsers);

    // If currentUser matches, update that too
    if (currentUser && currentUser.email === email) {
      setCurrentUser(updatedUser);
    }

    alert("Password updated successfully!");
    return true;
  };

  const saveDetails = (
    name,
    email,
    mobile,
    nationality,
    dob,
    gender,
    address
  ) => {
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
      alert("Email not found.");
      return false;
    }
    const user = users[userIndex];
    const updatedUser = {
      ...user,
      name: name,
      mobile: mobile,
      nationality: nationality,
      dob: dob,
      gender: gender,
      address: address,
    };
    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;
    setUsers(updatedUsers);

    if (currentUser && currentUser.email === email) {
      setCurrentUser(updatedUser);
    }

    alert("Data Add successfully!");
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
        loginWithGoogle,
        setUsers,
        setCurrentUser,
        updatePassword,
        saveDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
