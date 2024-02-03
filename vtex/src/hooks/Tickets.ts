import { useCallback } from 'react';

import { useApi, endpoints } from '../contexts/Api';

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

  return { createTicket };
};

export default useTicket;
