import api from '../services/api.js';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

const LOCAL_TOKEN_KEY = 'ai-resume-token';
const LOCAL_USER_KEY = 'ai-resume-user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(LOCAL_USER_KEY);
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem(LOCAL_TOKEN_KEY));
  const [remembered, setRemembered] = useState(() => Boolean(localStorage.getItem(LOCAL_TOKEN_KEY)));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (remembered && token) {
      localStorage.setItem(LOCAL_TOKEN_KEY, token);
      if (user) localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(LOCAL_TOKEN_KEY);
      localStorage.removeItem(LOCAL_USER_KEY);
    }
  }, [remembered, token, user]);

  const login = async ({ email, password, remember }) => {
  try {
    setLoading(true);

    const response = await api.post('/auth/login', {
      email,
      password,
    });

    const { user, token } = response.data.data;

    setUser(user);
    setToken(token);
    setRemembered(Boolean(remember));

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || 'Login failed',
    };
  } finally {
    setLoading(false);
  }
};

  const register = async ({ name, email, password }) => {
  try {
    setLoading(true);

    const response = await api.post('/auth/register', {
      name,
      email,
      password,
    });

    const { user, token } = response.data.data;

    setUser(user);
    setToken(token);
    setRemembered(true);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || 'Registration failed',
    };
  } finally {
    setLoading(false);
  }
};

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(LOCAL_USER_KEY);
    localStorage.removeItem(LOCAL_TOKEN_KEY);
  };

  const value = useMemo(() => ({ user, token, loading, login, logout, register }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
