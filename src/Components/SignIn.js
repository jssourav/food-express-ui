import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FOOD_EXPRESS_SERVICE_API } from '../utils/constants';
import { CircularProgress } from '@mui/material/';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../store/authSlice';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
});

const theme = createTheme();

export default function SignIn () {
  const redirectUrl = useSelector((store) => store.auth.redirectTo);

  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const submitLoginForm = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(FOOD_EXPRESS_SERVICE_API, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();

      localStorage.setItem('token', result?.user?.token);
      if (localStorage.getItem('token') === null) {
        alert('Login Not Successful');
      } else {
        dispatch(setLoggedIn(true));
        navigate(redirectUrl);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      submitLoginForm(values);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <Box sx={{ width: '100%', position: 'fixed', zIndex: 9999 }}>
          <LinearProgress />
        </Box>
      )}
      <Container component="main" maxWidth="xs" sx={{ my: 15 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign In &nbsp;
              {loading && <CircularProgress size={15} />}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" component={RouterLink} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
