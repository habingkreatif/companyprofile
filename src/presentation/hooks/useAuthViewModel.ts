import { useState, useEffect } from "react";
import { AuthUser } from "../../domain/entities/auth";
import { AuthRepositoryImpl } from "../../data/repository/AuthRepositoryImpl";
import { LoginUseCase } from "../../domain/usecase/auth/LoginUseCase";
import { RegisterUseCase } from "../../domain/usecase/auth/RegisterUseCase";
import { LogoutUseCase } from "../../domain/usecase/auth/LogoutUseCase";
import { UserRepositoryImpl } from "../../data/repository/UserReposiroty";

// Manual Dependency Injection
const authRepository = new AuthRepositoryImpl();
const userRepository = new UserRepositoryImpl();
const loginUseCase = new LoginUseCase(authRepository);
const registerUseCase = new RegisterUseCase(authRepository, userRepository);
const logoutUseCase = new LogoutUseCase(authRepository);

export function useAuthViewModel() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = authRepository.observeAuthState((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await loginUseCase.execute(email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, username: string, additionalData?: { phone?: string, address?: string, position?: string, department?: string }) => {
    setLoading(true);
    setError(null);
    try {
      await registerUseCase.execute(email, password, username, additionalData);
      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await logoutUseCase.execute();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
}
