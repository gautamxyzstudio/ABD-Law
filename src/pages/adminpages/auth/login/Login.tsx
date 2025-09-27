import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useLogin } from "../../../../hooks/useAuth";
import useSnackBarStore from "../../../../store/snackBarStore";
import CustomLogo from "../../../../components/logo/Logo";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();
  const navigate = useNavigate();
  const { setSnackBar } = useSnackBarStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const renderPasswordVisibilityIcon = () => {
    return showPassword ? <VisibilityOff /> : <Visibility />;
  };

  const onSubmit = (data: LoginFormInputs) => {
    login(
      {
        identifier: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setSnackBar("Login successful!", "success");
          navigate("/manage-blogs");
        },
        onError: (error) => {
          setSnackBar(error.message || "Login failed", "error");
        },
      }
    );
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-gray-50">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomLogo />
          <Typography
            component="h2"
            variant="h6"
            sx={{
              my: 4,
              color: "primary.light",
            }}
          >
            Admin Login
          </Typography>
          <Paper
            elevation={3}
            sx={{
              padding: { xs: 2, sm: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              borderRadius: 2,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address (Username)"
                autoComplete="email"
                autoFocus
                disabled={isPending}
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                sx={{ mb: 2 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                disabled={isPending}
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {renderPasswordVisibilityIcon()}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                loading={isPending}
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  fontSize: "1rem",
                }}
              >
                {isPending ? "Signing in..." : "Sign In"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
