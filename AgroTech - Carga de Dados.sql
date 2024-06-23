USE AgroTech;

-- Inserindo dados na tabela TBL_StatusPedido
INSERT INTO TBL_StatusPedido (Nome) 
VALUES 
    ('Pendente'), 
    ('Processando'), 
    ('Concluído'), 
    ('Cancelado');

-- Inserindo dados na tabela TBL_TipoPessoa
INSERT INTO TBL_TipoPessoa (Nome) 
VALUES 
    ('Cliente'), 
    ('Socio'), 
    ('Funcionario');

-- Inserindo dados na tabela TBL_StatusPagamento
INSERT INTO TBL_StatusPagamento (Nome) 
VALUES 
    ('Aguardando Pagamento'), 
    ('Pago'), 
    ('Cancelado');

-- Inserindo dados na tabela TBL_Categorias
INSERT INTO TBL_Categorias (Nome) 
VALUES 
    ('Software'), 
    ('Instalacao'), 
    ('Suporte');

-- Inserindo dados na tabela TBL_Endereco
INSERT INTO TBL_Endereco (CEP, Estado, Cidade, Bairro, Rua, Numero) 
VALUES 
    ('12345-678', 'SP', 'São Paulo', 'Centro', 'Rua A', '100'),
    ('87654-321', 'RJ', 'Rio de Janeiro', 'Copacabana', 'Rua B', '200');

-- Inserindo dados na tabela TBL_Produtos
INSERT INTO TBL_Produtos (Nome, Descricao, Preco) 
VALUES 
    ('Intel RealSense D455', 'Camera de visao tridimensional', 500.00),
    ('BRCO - BR Caprinos e Ovinos', 'Calculadora nutricional para a formulação de dietas de ovinos e caprinos', 150.00),
    ('SPOT - Sistema Peso Ovino Tridimensional', 'Sistema de pesagem animal por camera', 300.00);

-- Inserindo dados na tabela TBL_Estoque
INSERT INTO TBL_Estoque (Quantidade, ID_Produto) 
VALUES 
    (5, 1),
    (999, 2),
    (999, 3);

-- Inserindo dados na tabela TBL_Pagamento
INSERT INTO TBL_Pagamento (MetodoPagamento, ValorTotal, ID_StatusPagamento) 
VALUES 
    ('Cartão de Crédito', 500.00, 1),
    ('Boleto', 150.00, 2);

-- Inserindo dados na tabela TBL_Pessoa
INSERT INTO TBL_Pessoa (Nome, CPF, DataNascimento, Email, Senha, Telefone, ID_TipoPessoa, ID_Endereco) 
VALUES 
    ('João da Silva', '123.456.789-00', '1980-01-01', 'joao@example.com', 'senha123', '1111-1111', 1, 1),
    ('Maria de Souza', '987.654.321-00', '1990-02-01', 'maria@example.com', 'senha456', '2222-2222', 2, 2);

-- Inserindo dados na tabela TBL_Fazenda
INSERT INTO TBL_Fazenda (Nome, ID_Cliente, ID_Endereco) 
VALUES 
    ('Fazenda Boa Vista', 1, 1),
    ('Fazenda Alegre', 2, 2);

-- Inserindo dados na tabela TBL_Suporte
INSERT INTO TBL_Suporte (Descricao, ID_Cliente) 
VALUES 
    ('Problema com a câmera', 1),
    ('Dúvida sobre a calculadora', 2);

-- Inserindo dados na tabela TBL_Pedidos
INSERT INTO TBL_Pedidos (ValorTotal, ID_Cliente, ID_Pagamento, ID_StatusPedido) 
VALUES 
    (500.00, 1, 1, 1),
    (150.00, 2, 2, 2);

-- Inserindo dados na tabela TBL_ItensPedidos
INSERT INTO TBL_ItensPedidos (Quantidade, PrecoUnitario, ID_Pedido, ID_Estoque) 
VALUES 
    (1, 500.00, 1, 1),
    (1, 150.00, 2, 2);

-- Inserindo dados na tabela TBL_Mensagens
INSERT INTO TBL_Mensagens (Nome, Email, DDD, Telefone, Mensagem) 
VALUES 
    ('Carlos', 'carlos@example.com', '11', '9999-9999', 'Estou interessado no produto.'),
    ('Ana', 'ana@example.com', '21', '8888-8888', 'Gostaria de mais informações sobre o suporte.');
