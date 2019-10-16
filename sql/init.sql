CREATE DATABASE IF NOT EXISTS registry;

CREATE TABLE IF NOT EXISTS registry.registry_schema (
  id int NOT NULL auto_increment,
  schema_name vARCHAR(32) NOT NULL,
  schema_data BLOB NOT NULL,
  PRIMARY KEY (id)
);
