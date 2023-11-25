use hotel;
create table if not exists funcionario (
cpf varchar (18) not null,
nome varchar(50) not null,
cargo varchar (50),
sexo char(1),

primary key(cpf)
);

insert into funcionario (cpf,nome,cargo,sexo) values ('893.299.321-12','Grazi','Desenvolvedora','F')

