import React, { createContext, useContext, useMemo, useCallback } from 'react';

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { base64Code } from '../../settings';
import { baseUrl } from './settings';

interface IApiContextValues {
  apiInstance: AxiosInstance | null;
  request: <Type>(config: IRequestConfig) => Promise<AxiosResponse<Type>>;
  brasilApiInstance: AxiosInstance | null;
}

const ApiContext = createContext<IApiContextValues>({
  apiInstance: null,
  request: () => Promise.reject('Api instance is not initialized'),
  brasilApiInstance: null,
});

const ApiProvider: React.FC<{ children: any }> = ({ children }) => {
  const apiInstance = useMemo(
    () =>
      axios.create({
        baseURL: baseUrl,
        headers: {
          Accept: 'application/json',
          'Accept-Language': navigator.language,
          Authorization: `Basic ${base64Code}`,
        },
      }),
    []
  );

  const brasilApiInstance = useMemo(
    () =>
      axios.create({
        baseURL: baseUrl,
      }),
    []
  );

  const request = useCallback(
    async <Type,>(args: IRequestConfig): Promise<AxiosResponse<Type>> => {
      return await apiInstance.request<Type>(args);
    },
    [apiInstance]
  );

  return (
    <ApiContext.Provider value={{ apiInstance, request, brasilApiInstance }}>
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext);
  return context;
};

export { ApiProvider, useApi };
