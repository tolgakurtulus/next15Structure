'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Stack, Box, CircularProgress } from '@mui/material';
import { login } from '@/store/auth';
import { useAppDispatch } from '@/store/hooks';
import CButton from '@/components/CButton';
import styles from '..//styles.module.scss';

const schema = z.object({
  email: z.string().email('Geçerli bir e-mail giriniz'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    dispatch(login({ ...data }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField label="E-mail adresin" variant="outlined" fullWidth {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
        <TextField label="Şifre" type="password" variant="outlined" fullWidth {...register('password')} error={!!errors.password} helperText={errors.password?.message} />
        <div className={styles['c-login__forgotPassword']}>
          <p>Şifremi Unuttum!</p>
        </div>
        <CButton text={isSubmitting ? <CircularProgress size={24} /> : 'Giriş Yap'} type={isSubmitting ? 'disabled' : 'login'} htmlType="submit" />
      </Stack>
    </Box>
  );
}
