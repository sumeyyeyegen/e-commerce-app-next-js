
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { authService } from '../../services/auth.service';
import { Field, Formik, Form } from 'formik';
import { FormItem } from '../../components/FormItem';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Alert from '../../helpers/Alert';

export default Login;

interface Values {
  email: string,
  password: string
}


function Login() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    let token = Cookies.get("user-token");
    let control = authService.userValue.getValue();

    if (control !== false && control !== null && token !== undefined && token !== null) {
      router.push('/');
    }
  }, []);

  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Geçerli bir email giriniz").matches(regex, "Geçerli bir email giriniz")
      .required("Email girilmesi zorunludur"),
    password: Yup.string()
      .required("Şifre girilmesi zorunludur")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: Values) {
    let dat = { email: data.email, password: data.password }
    return authService.login(dat)
      .then((res) => {
        const returnUrl: string | any = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch((error: any) => {
        error.message === "Network Error" && Alert().Error("Sunucuda bir problem oluştu");
        error.response.data.message === "Bu mail adresi ile kayıtlı bir kullanıcı bulunamadı" ? (Alert().Error("Bu mail adresi ile kayıtlı bir kullanıcı bulunamadı"), router.push("/auth/register")) : ""

        setError('apiError', { message: error.message });
      });
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values: Values) => onSubmit(values)}
    >
      {formik => {
        const { touched, isValid, values, handleChange } = formik
        return (
          <div className="w-25 mx-auto mt-5">
            <div className="card">
              <div className="card-body">
                <Form >
                  <div className="form-group">
                    <FormItem errors={errors.email} isValid={isValid} touched={touched.email} formik={formik.errors.email} type="email" values={values.email} handleChange={handleChange} text="Email" />
                  </div>
                  <div className="form-group">
                    <FormItem errors={errors.password} isValid={isValid} touched={touched.password} formik={formik.errors.password} type="password" values={values.password} handleChange={handleChange} text="Şifre" />
                  </div>

                  <div className={`invalid-feedback ${errors.apiError?.message !== undefined && "d-block"}`}>
                    {errors?.apiError?.message !== undefined ? <>{errors.apiError?.message}</> : null}</div>


                  <button
                    disabled={formState.isSubmitting}
                    type="submit"
                    className="btn btn-primary">
                    {formState.isSubmitting &&
                      <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Giriş Yap
                  </button>

                  <small className='d-block text-muted mt-3'>Kayıtlı hesabınız yoksa <Link href="/auth/register">Kayıt ol</Link></small>
                </Form>
              </div>
            </div>
          </div>
        )
      }
      }
    </Formik>
  );
}