create table usuarios(
  nome varchar(50),
  email varchar(100),
  idade int
);

INSERT INTO usuarios(nome, email, idade) VALUES (
  "Alessandro Lima",
  "alessandro.teste@gmail.com",
  18
);

INSERT INTO usuarios(nome, email, idade) VALUES (
  "Isabella Souza",
  "isabellasouza@gmail.com",
  10
);

INSERT INTO usuarios(nome, email, idade) VALUES (
  "Hermenegildo Farinha",
  "hermenegildo@hotmail.com",
  25
);

INSERT INTO usuarios(nome, email, idade) VALUES (
  "Maria Teles",
  "mariateles@hotmail.com",
  8
);

INSERT INTO usuarios(nome, email, idade) VALUES (
  "Poliberto Sauro",
  "polibertosauro@gmail.com",
  8
);

DELETE FROM usuarios WHERE nome = "Poliberto Sauro";