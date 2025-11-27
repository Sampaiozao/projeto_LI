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
    
    // Contas
    const contas = [
        {
            id: 'c1',
            descricao: 'Conta de Água',
            valor: 45.50,
            vencimento: '2025-12-05',
            responsavel: 'p1',
            categoria: 'agua',
            recorrente: 'mensal',
            notas: 'Fatura do mês de novembro',
            status: 'pendente',
            createdAt: new Date().toISOString()
        },
        {
            id: 'c2',
            descricao: 'Conta de Luz',
            valor: 89.30,
            vencimento: '2025-12-10',
            responsavel: 'p2',
            categoria: 'luz',
            recorrente: 'mensal',
            notas: '',
            status: 'pendente',
            createdAt: new Date().toISOString()
        },
        {
            id: 'c3',
            descricao: 'Internet/TV',
            valor: 52.00,
            vencimento: '2025-11-28',
            responsavel: 'p1',
            categoria: 'internet',
            recorrente: 'mensal',
            notas: 'Pacote Vodafone',
            status: 'pendente',
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('contas', JSON.stringify(contas));
    
    // Faturas
    const faturas = [
        {
            id: 'f1',
            descricao: 'Máquina de Lavar Roupa',
            valor: 549.99,
            data: '2025-10-15',
            local: 'Worten',
            categoria: 'eletrodomesticos',
            numero: 'FT 2025/12345',
            notas: 'Entrega ao domicílio incluída',
            serial: 'SN123456789',
            comGarantia: true,
            createdAt: new Date().toISOString()
        },
        {
            id: 'f2',
            descricao: 'Televisão Samsung 55"',
            valor: 799.00,
            data: '2025-09-20',
            local: 'MediaMarkt',
            categoria: 'eletronicos',
            numero: 'FT 2025/98765',
            notas: 'Modelo QLED',
            serial: 'TV987654321',
            comGarantia: true,
            createdAt: new Date().toISOString()
        },
        {
            id: 'f3',
            descricao: 'Compras Supermercado',
            valor: 125.80,
            data: '2025-11-25',
            local: 'Continente',
            categoria: 'alimentacao',
            numero: '',
            notas: 'Compras mensais',
            serial: '',
            comGarantia: false,
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('faturas', JSON.stringify(faturas));
    
    // Garantias (automáticas das faturas + uma manual)
    const garantias = [
        {
            id: 'gar_f1',
            faturaId: 'f1',
            produto: 'Máquina de Lavar Roupa',
            dataCompra: '2025-10-15',
            duracao: 24,
            dataExpiracao: '2027-10-15',
            local: 'Worten',
            valor: 549.99,
            serial: 'SN123456789',
            notas: 'Garantia criada automaticamente a partir da fatura FT 2025/12345',
            createdAt: new Date().toISOString()
        },
        {
            id: 'gar_f2',
            faturaId: 'f2',
            produto: 'Televisão Samsung 55"',
            dataCompra: '2025-09-20',
            duracao: 24,
            dataExpiracao: '2027-09-20',
            local: 'MediaMarkt',
            valor: 799.00,
            serial: 'TV987654321',
            notas: 'Garantia criada automaticamente a partir da fatura FT 2025/98765',
            createdAt: new Date().toISOString()
        },
        {
            id: 'g1',
            produto: 'Frigorífico LG',
            dataCompra: '2024-03-10',
            duracao: 36,
            dataExpiracao: '2027-03-10',
            local: 'Fnac',
            valor: 899.00,
            serial: 'LG555444333',
            notas: 'Garantia estendida para 3 anos',
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('garantias', JSON.stringify(garantias));
    
    // Tarefas
    const tarefas = [
        {
            id: 't1',
            titulo: 'Pagar conta de água',
            descricao: 'Fazer pagamento da fatura até dia 5',
            responsavel: 'p1',
            criador: 'p2',
            criadorNome: 'Maria Santos',
            prazo: '2025-12-05',
            prioridade: 'alta',
            status: 'pendente',
            contaId: 'c1',
            createdAt: new Date().toISOString()
        },
        {
            id: 't2',
            titulo: 'Limpar garagem',
            descricao: 'Organizar e limpar toda a garagem no fim de semana',
            responsavel: 'p3',
            criador: 'p1',
            criadorNome: 'João Silva',
            prazo: '2025-11-30',
            prioridade: 'media',
            status: 'pendente',
            contaId: null,
            createdAt: new Date().toISOString()
        },
        {
            id: 't3',
            titulo: 'Marcar consulta dentista',
            descricao: 'Agendar consulta de rotina para toda a família',
            responsavel: 'p2',
            criador: 'p2',
            criadorNome: 'Maria Santos',
            prazo: '2025-12-01',
            prioridade: 'media',
            status: 'em_progresso',
            contaId: null,
            createdAt: new Date().toISOString()
        },
        {
            id: 't4',
            titulo: 'Comprar prenda de Natal',
            descricao: 'Comprar prenda para a avó',
            responsavel: 'p1',
            criador: 'p2',
            criadorNome: 'Maria Santos',
            prazo: '2025-12-20',
            prioridade: 'baixa',
            status: 'pendente',
            contaId: null,
            createdAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    
    console.log('✅ Dados de exemplo adicionados com sucesso!');
    console.log('📊 Resumo:');
    console.log('- 3 Pessoas');
    console.log('- 3 Contas');
    console.log('- 3 Faturas');
    console.log('- 3 Garantias');
    console.log('- 4 Tarefas');
    console.log('\n🔄 Recarregue a página para ver os dados!');
    
    // Recarregar automaticamente
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

// Executar automaticamente
adicionarDadosExemplo();
