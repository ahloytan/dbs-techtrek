import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingStatus } from '@/store/index';
import { redirectMessages } from '@/utils/redirect-messages';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const reason = searchParams.get('redirectReason');
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const auth = useAuth();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: 'admin1@admin.com',
      password: 'Password1!',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        dispatch(setLoadingStatus(true));
        await auth.signIn(values.email, values.password);
        router.push('/llm');

      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);

      } finally {
        dispatch(setLoadingStatus(false));
      }
    }
  });

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  const madePossibleWith = ['next-js', 'tailwind', 'nodejs', 'supabase', 'vercel'];

  return (
    <>
      <Head>
        <title>
          Login | DBS TechTrek 2024
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Email"
                value="email"
              />
              <Tab
                label="Phone Number"
                value="phoneNumber"
              />
            </Tabs>
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                {reason && (
                  <Typography
                    color={ type == "error" ? "error" : "success.light" }
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    { redirectMessages[reason] }
                  </Typography>
                )}
                <LoadingButton
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  loading={isLoading}
                  variant="contained"
                >
                  Login
                </LoadingButton>
                <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3, justifyContent: 'center' }}
                >
                  <div>
                    {/* You can use <b>admin@admin.com</b> and password <b>admin</b> */}
                    Please contact <b><a href="https://glints-dashboard.s3.ap-southeast-1.amazonaws.com/resume/8f1c4bfc7f1832b6d7d7ae68145c1f7e.pdf" target="_blank" className="underline">admin</a></b> if you require a walkthrough
                  </div>
                </Alert>
                <div className="text-center mt-4">
                  <Typography                
                    color="text.secondary"
                    variant="body2"
                  >
                    Made possible with:
                  </Typography>
                  <div className="flex justify-center mt-2">
                    {
                      madePossibleWith.map((item) => <img key={item} src={`/assets/icons/${item}.svg`} alt={item} title={item} className="rounded-full size-12 mx-2"/>)
                    }
                  </div>
                </div>
              </form>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  Currently unavailable
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs, we have disabled this feature.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
