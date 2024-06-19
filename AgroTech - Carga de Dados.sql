USE AgroTech;

INSERT INTO TBL_StatusPedido 
    (Nome) 
VALUES 
    ('Pendente'), 
    ('Processando'), 
    ('Concluído'), 
    ('Cancelado');

INSERT INTO TBL_TipoPessoa 
    (Nome) 
VALUES 
    ('Cliente'), 
    ('Socio'), 
    ('Funcionario');

INSERT INTO TBL_StatusPagamento 
    (Nome) 
VALUES 
    ('Aguardando Pagamento'), 
    ('Pago'), 
    ('Cancelado');

INSERT INTO TBL_Categorias 
    (Nome) 
VALUES 
    ('Software'), 
    ('Instalacao'), 
    ('Suporte');

INSERT INTO TBL_Produtos 
    (Nome, Descricao, Preco) 
VALUES 
      ('Intel RealSense D455', 'Camera de visao tridimensional', 500.00),
      ('BRCO - BR Caprinos e Ovinos', 'Calculadora nutricional para a formulação de dietas de ovinos e caprinos', 150.00),
      ('SPOT - Sistema Peso Ovino Tridimensional', 'Sistema de pesagem animal por camera', 300.00);

INSERT INTO TBL_Estoque 
    (Quantidade, ID_Produto) 
VALUES 
    (5, 1),
    (999, 2),
    (999, 3);