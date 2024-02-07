import React, { createContext, useContext, useMemo, useCallback } from 'react';

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { base64Code, oauth } from '../../settings';
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
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Basic cm9kcmlnb3Nhcm1lbnRveHhAZ21haWwuY29tL3Rva2VuOmRsM1YyWmxOd0FzT2V1bU9CYVluZVpZbVptSzlwQUFaclRNZ2h4bTQ=`,
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
