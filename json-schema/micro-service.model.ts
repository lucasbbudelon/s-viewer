export interface MicroService {
  id: string;
  name: string;
  description: string;
  owner: string;
  type: ServiceType;
  repo: string;
  jenkins: string;
  doc?: string;
  versions: MicroServiceVersion[];
  resources?: MicroServiceResources[];
  lastSync?: number;
}

export interface MicroServiceVersion {
  id: string;
  microService?: MicroServiceDependency[];
  esb?: MicroServiceDependency[];
  database?: MicroServiceDatabase[];
  input?: MicroServiceQueue[];
  output?: MicroServiceQueue[];
}

export interface MicroServiceDependency {
  id: string;
  type: ServiceType;
  version?: string;
}

export interface MicroServiceDatabase {
  id: string;
  type: DataBaseType;
}

export interface MicroServiceQueue {
  id: string;
  type: QueueType;
}

export interface checkResource {
  resource: MicroServiceResources;
  environment: string;
  version: string;
  content?: any;
  success: boolean;
}

export enum ServiceType {
  MicroService = "MS",
  BFF = "BFF",
  ESB = "ESB",
  NotIdentified = "XPTO",
}

export enum DataBaseType {
  Mongo = "MONGO",
  MySql = "MYSQL",
}

export enum QueueType {
  TopicKafkaInput = "TOPIC_KAFKA_INPUT",
  TopicKafkaOutput = "TOPIC_KAFKA_OUTPUT",
}

export enum MicroServiceResources {
  HealthCheck = "health",
  Env = "env",
  Swagger = "swagger-ui.html",
}