// Script para adicionar dados de exemplo
// Execute este código no console do navegador ou cole no final do dashboard.html temporariamente

function adicionarDadosExemplo() {
    // Limpar dados existentes (opcional)
    // localStorage.clear();
    
    // Pessoas
    const pessoas = [
        {
            id: 'p1',
            nome: 'João Silva',
            email: 'joao@email.com',
            telefone: '912345678',
            cor: '#3498db',
            createdAt: new Date().toISOString()
        },
        {
            id: 'p2',
            nome: 'Maria Santos',
            email: 'maria@email.com',
            telefone: '923456789',
            cor: '#e74c3c',
            createdAt: new Date().toISOString()
        },
        {
            id: 'p3',
            nome: 'Pedro Costa',
            email: 'pedro@email.com',
            telefone: '934567890',
            cor: '#27ae60',
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
    
    // Contas - datas atualizadas para dezembro 2025
    const contas = [
        {
            id: 'c1',
            descricao: 'Conta de Água',
            valor: 38.75,
            vencimento: '2025-12-10',
            responsavel: 'p1',
            categoria: 'agua',
            recorrente: 'mensal',
            notas: 'Fatura de novembro',
            status: 'pendente',
            createdAt: new Date().toISOString()
        },
        {
            id: 'c2',
            descricao: 'Conta de Eletricidade',
            valor: 67.40,
            vencimento: '2025-12-15',
            responsavel: 'p2',
            categoria: 'luz',
            recorrente: 'mensal',
            notas: 'EDP - consumo de novembro',
            status: 'pendente',
            createdAt: new Date().toISOString()
        },
        {
            id: 'c3',
            descricao: 'Internet Fibra',
            valor: 44.99,
            vencimento: '2025-12-08',
            responsavel: 'p3',
            categoria: 'internet',
            recorrente: 'mensal',
            notas: 'NOS 500Mbps',
            status: 'pendente',
            createdAt: new Date().toISOString()
        },
        {
            id: 'c4',
            descricao: 'Gás Natural',
            valor: 29.50,
            vencimento: '2025-12-20',
            responsavel: 'p1',
            categoria: 'gas',
            recorrente: 'mensal',
            notas: 'Galp Gás',
            status: 'pendente',
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('contas', JSON.stringify(contas));
    
    // Faturas - compras recentes
    const faturas = [
        {
            id: 'f1',
            descricao: 'Aspirador Robot Xiaomi',
            valor: 299.99,
            data: '2025-11-25',
            local: 'Worten',
            categoria: 'eletrodomesticos',
            numero: 'FT 2025/45678',
            notas: 'Black Friday',
            serial: 'XM2025ROBOT001',
            comGarantia: true,
            createdAt: new Date().toISOString()
        },
        {
            id: 'f2',
            descricao: 'iPhone 15 Pro',
            valor: 1299.00,
            data: '2025-11-20',
            local: 'Apple Store',
            categoria: 'eletronicos',
            numero: 'FT 2025/99001',
            notas: 'Prenda de aniversário',
            serial: 'DMPXK2ABCD1234',
            comGarantia: true,
            createdAt: new Date().toISOString()
        },
        {
            id: 'f3',
            descricao: 'Compras Natal - Supermercado',
            valor: 187.35,
            data: '2025-12-01',
            local: 'Pingo Doce',
            categoria: 'alimentacao',
            numero: 'FT 2025/88542',
            notas: 'Compras para ceia de Natal',
            serial: '',
            comGarantia: false,
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('faturas', JSON.stringify(faturas));
    
    // Garantias
    const garantias = [
        {
            id: 'gar_f1',
            faturaId: 'f1',
            produto: 'Aspirador Robot Xiaomi',
            dataCompra: '2025-11-25',
            duracao: 24,
            dataExpiracao: '2027-11-25',
            local: 'Worten',
            valor: 299.99,
            serial: 'XM2025ROBOT001',
            notas: 'Garantia criada automaticamente',
            createdAt: new Date().toISOString()
        },
        {
            id: 'gar_f2',
            faturaId: 'f2',
            produto: 'iPhone 15 Pro',
            dataCompra: '2025-11-20',
            duracao: 24,
            dataExpiracao: '2027-11-20',
            local: 'Apple Store',
            valor: 1299.00,
            serial: 'DMPXK2ABCD1234',
            notas: 'AppleCare incluído',
            createdAt: new Date().toISOString()
        },
        {
            id: 'g1',
            produto: 'Máquina de Lavar Samsung',
            dataCompra: '2024-06-15',
            duracao: 36,
            dataExpiracao: '2027-06-15',
            local: 'MediaMarkt',
            valor: 649.00,
            serial: 'WM2024SAM789',
            notas: 'Garantia estendida 3 anos',
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('garantias', JSON.stringify(garantias));
    
    // Tarefas - tarefas atuais
    const tarefas = [
        {
            id: 't1',
            titulo: 'Decorar árvore de Natal',
            descricao: 'Montar e decorar a árvore de Natal na sala',
            responsavel: 'p2',
            criador: 'p1',
            criadorNome: 'João Silva',
            prazo: '2025-12-08',
            prioridade: 'alta',
            status: 'pendente',
            contaId: null,
            createdAt: new Date().toISOString()
        },
        {
            id: 't2',
            titulo: 'Pagar conta de internet',
            descricao: 'Efetuar pagamento da fatura NOS',
            responsavel: 'p3',
            criador: 'p2',
            criadorNome: 'Maria Santos',
            prazo: '2025-12-08',
            prioridade: 'alta',
            status: 'pendente',
            contaId: 'c3',
            createdAt: new Date().toISOString()
        },
        {
            id: 't3',
            titulo: 'Comprar presentes de Natal',
            descricao: 'Comprar presentes para a família',
            responsavel: 'p1',
            criador: 'p2',
            criadorNome: 'Maria Santos',
            prazo: '2025-12-20',
            prioridade: 'media',
            status: 'em_progresso',
            contaId: null,
            createdAt: new Date().toISOString()
        },
        {
            id: 't4',
            titulo: 'Limpar casa para o Natal',
            descricao: 'Limpeza geral antes das festas',
            responsavel: 'p3',
            criador: 'p1',
            criadorNome: 'João Silva',
            prazo: '2025-12-23',
            prioridade: 'media',
            status: 'pendente',
            contaId: null,
            createdAt: new Date().toISOString()
        },
        {
            id: 't5',
            titulo: 'Reservar restaurante Ano Novo',
            descricao: 'Fazer reserva para jantar de passagem de ano',
            responsavel: 'p2',
            criador: 'p2',
            criadorNome: 'Maria Santos',
            prazo: '2025-12-15',
            prioridade: 'baixa',
            status: 'pendente',
            contaId: null,
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    
    // Pontos iniciais de exemplo
    const pontos = {
        'p1': { total: 85, tarefas: 5, contas: 3 },
        'p2': { total: 120, tarefas: 8, contas: 4 },
        'p3': { total: 45, tarefas: 3, contas: 1 }
    };
    localStorage.setItem('pontos', JSON.stringify(pontos));
    
    // Histórico de pontos de exemplo
    const historicoPontos = [
        {
            id: '1',
            pessoaId: 'p2',
            pessoaNome: 'Maria Santos',
            pontos: 15,
            tipo: 'conta',
            descricao: 'Pagou conta no prazo: Conta de Luz',
            data: '2025-12-01T10:30:00.000Z'
        },
        {
            id: '2',
            pessoaId: 'p1',
            pessoaNome: 'João Silva',
            pontos: 15,
            tipo: 'tarefa',
            descricao: 'Concluiu tarefa: Fazer compras (alta prioridade)',
            data: '2025-12-02T14:20:00.000Z'
        },
        {
            id: '3',
            pessoaId: 'p2',
            pessoaNome: 'Maria Santos',
            pontos: 10,
            tipo: 'tarefa',
            descricao: 'Concluiu tarefa: Organizar documentos',
            data: '2025-12-03T09:15:00.000Z'
        },
        {
            id: '4',
            pessoaId: 'p3',
            pessoaNome: 'Pedro Costa',
            pontos: 10,
            tipo: 'tarefa',
            descricao: 'Concluiu tarefa: Levar carro à revisão',
            data: '2025-12-03T16:45:00.000Z'
        }
    ];
    localStorage.setItem('historicoPontos', JSON.stringify(historicoPontos));
    
    console.log('✅ Dados de exemplo adicionados com sucesso!');
    console.log('📊 Resumo:');
    console.log('- 3 Pessoas');
    console.log('- 4 Contas');
    console.log('- 3 Faturas');
    console.log('- 3 Garantias');
    console.log('- 5 Tarefas');
    console.log('- Pontos e histórico de ranking');
    console.log('\n🔄 Recarregue a página para ver os dados!');
    
    // Recarregar automaticamente
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

// Executar automaticamente
adicionarDadosExemplo();
