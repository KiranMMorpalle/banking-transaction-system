import {
  LoginForm,
  storageService,
  type ILogin,
} from "@kiranmmorpalle/common-types";
import { authService } from "../../services/authService";
import { useAppDispatch } from "../../hooks/redux";
import { setAuth } from "../../store/authSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: ILogin) => {
    const res = await authService.login(values);
    storageService.setLocal("accessToken", res.accessToken);
    storageService.setLocal("refreshToken", res.refreshToken);
    storageService.setLocal("userData", res.user);
    dispatch(setAuth({ user: res.user }));
  };
  return <LoginForm onSubmit={handleSubmit} />;
};

export default Register;
