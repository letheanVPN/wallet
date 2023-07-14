export const rpcBody = (method: any) => (params: any) => ({
  jsonrpc: '2.0',
  id: '0',
  method: method,
  params: params
});

