import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { login as loginUser } from '../api/authApis';

export function useLogin() {
  const { setUser } = useAuthStore();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // console.log('================user================');
      // console.log(data, 'data');
      setUser({
        id: data.user.id.toString(),
        email: data.user.email,
        name: data.user.username,
        token: data.jwt,
        role: data?.user?.user_type,
      });
    },
  });
}
