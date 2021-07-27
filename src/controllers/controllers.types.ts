export interface HttpRequest {
  body?: Record<string, any>;
  query: Record<string, any>;
  params: Record<string, any>;
}

export interface MessageBody {
  i18nCode: string;
  defaultValue: string;
}

export interface EndpointResponse {
  status: number;
  body: unknown;
  msg: MessageBody;
}

export type RequestValidator<K, T extends HttpRequest = HttpRequest> = (req: T) => Promise<K>;

export type Controller = (req: HttpRequest) => Promise<EndpointResponse>;
