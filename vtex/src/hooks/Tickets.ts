import { useCallback } from 'react';

import { useApi, endpoints } from '../contexts/Api';
import { oauth } from '../settings';

const useTicket = () => {
  const { request } = useApi();

  const createTicket = useCallback(
    async (data: ITicketData) => {
      const response = await request<ITicketResponse>({
        method: 'post',
        url: endpoints.tickets,
        data,
      });

      return response.data;
    },
    [request]
  );

  const uploadImage = useCallback(
    async (image: File) => {
      const data = new FormData();
      data.append('filename', image.name);
      data.append('file', image, image.name);
      const response = await request<{
        upload: { token: string; attachment: { content_url: string } };
      }>({
        method: 'post',
        url: endpoints.image,
        data,
      });

      return response.data;
    },
    [request]
  );

  const createAuthSession = useCallback(async () => {
    const response = await request<{}>({
      method: 'get',
      url: endpoints.session,
      params: {
        response_type: 'token',
        client_id: oauth,
        scopes: 'tickets:read',
      },
    });

    return response.data;
  }, [request]);
  return { createTicket, uploadImage, createAuthSession };
};

export default useTicket;
