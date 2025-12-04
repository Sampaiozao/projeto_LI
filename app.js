// Authentication System
const Auth = {
    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },

    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    login(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    },

    register(name, email, password) {
        if (password.length < 6) {
            return { success: false, message: 'A palavra-passe deve ter pelo menos 6 caracteres' };
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Este email já está registado' };
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        return { success: true };
    },

    logout() {
        localStorage.removeItem('currentUser');
    }
};

// Data Storage System
const DataStore = {
    // Contas
    getContas() {
        return JSON.parse(localStorage.getItem('contas') || '[]');
    },

    saveConta(conta) {
        const contas = this.getContas();
        const index = contas.findIndex(c => c.id === conta.id);
        
        if (index >= 0) {
            contas[index] = conta;
        } else {
            contas.push(conta);
        }
        
        localStorage.setItem('contas', JSON.stringify(contas));
    },

    deleteConta(id) {
        const contas = this.getContas().filter(c => c.id !== id);
        localStorage.setItem('contas', JSON.stringify(contas));
    },

    // Faturas
    getFaturas() {
        return JSON.parse(localStorage.getItem('faturas') || '[]');
    },

    saveFatura(fatura) {
        const faturas = this.getFaturas();
        const index = faturas.findIndex(f => f.id === fatura.id);
        
        if (index >= 0) {
            faturas[index] = fatura;
        } else {
            faturas.push(fatura);
        }
        
        localStorage.setItem('faturas', JSON.stringify(faturas));
    },

    deleteFatura(id) {
        const faturas = this.getFaturas().filter(f => f.id !== id);
        localStorage.setItem('faturas', JSON.stringify(faturas));
    },

    // Garantias
    getGarantias() {
        return JSON.parse(localStorage.getItem('garantias') || '[]');
    },

    saveGarantia(garantia) {
        const garantias = this.getGarantias();
        const index = garantias.findIndex(g => g.id === garantia.id);
        
        if (index >= 0) {
            garantias[index] = garantia;
        } else {
            garantias.push(garantia);
        }
        
        localStorage.setItem('garantias', JSON.stringify(garantias));
    },

    deleteGarantia(id) {
        const garantias = this.getGarantias().filter(g => g.id !== id);
        localStorage.setItem('garantias', JSON.stringify(garantias));
    },

    // Pessoas
    getPessoas() {
        return JSON.parse(localStorage.getItem('pessoas') || '[]');
    },

    savePessoa(pessoa) {
        const pessoas = this.getPessoas();
        const index = pessoas.findIndex(p => p.id === pessoa.id);
        
        if (index >= 0) {
            pessoas[index] = pessoa;
        } else {
            pessoas.push(pessoa);
        }
        
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
    },

    deletePessoa(id) {
        const pessoas = this.getPessoas().filter(p => p.id !== id);
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
    },

    // Tarefas
    getTarefas() {
        return JSON.parse(localStorage.getItem('tarefas') || '[]');
    },

    saveTarefa(tarefa) {
        const tarefas = this.getTarefas();
        const index = tarefas.findIndex(t => t.id === tarefa.id);
        
        if (index >= 0) {
            tarefas[index] = tarefa;
        } else {
            tarefas.push(tarefa);
        }
        
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    },

    deleteTarefa(id) {
        const tarefas = this.getTarefas().filter(t => t.id !== id);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
};

// Utility Functions
function formatCurrency(value) {
    return `${value.toFixed(2)}€`;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-PT');
}

function getDaysRemaining(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return diff;
}

function getStatusClass(dias) {
    if (dias < 0) return 'danger';
    if (dias <= 7) return 'warning';
    return 'success';
}

function getRandomColor() {
    const colors = ['#00d4aa', '#10b981', '#06b6d4', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Feriados de Portugal
function getFeriadosPortugal(year) {
    // Calcular Páscoa (algoritmo de Meeus)
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    
    const pascoa = new Date(year, month - 1, day);
    const carnaval = new Date(pascoa);
    carnaval.setDate(pascoa.getDate() - 47);
    const sextaFeiraSanta = new Date(pascoa);
    sextaFeiraSanta.setDate(pascoa.getDate() - 2);
    const corpusChristi = new Date(pascoa);
    corpusChristi.setDate(pascoa.getDate() + 60);

    return {
        [`${year}-01-01`]: 'Ano Novo',
        [`${carnaval.getFullYear()}-${String(carnaval.getMonth() + 1).padStart(2, '0')}-${String(carnaval.getDate()).padStart(2, '0')}`]: 'Carnaval',
        [`${sextaFeiraSanta.getFullYear()}-${String(sextaFeiraSanta.getMonth() + 1).padStart(2, '0')}-${String(sextaFeiraSanta.getDate()).padStart(2, '0')}`]: 'Sexta-feira Santa',
        [`${pascoa.getFullYear()}-${String(pascoa.getMonth() + 1).padStart(2, '0')}-${String(pascoa.getDate()).padStart(2, '0')}`]: 'Páscoa',
        [`${year}-04-25`]: 'Dia da Liberdade',
        [`${year}-05-01`]: 'Dia do Trabalhador',
        [`${corpusChristi.getFullYear()}-${String(corpusChristi.getMonth() + 1).padStart(2, '0')}-${String(corpusChristi.getDate()).padStart(2, '0')}`]: 'Corpo de Deus',
        [`${year}-06-10`]: 'Dia de Portugal',
        [`${year}-08-15`]: 'Assunção de Nossa Senhora',
        [`${year}-10-05`]: 'Implantação da República',
        [`${year}-11-01`]: 'Dia de Todos os Santos',
        [`${year}-12-01`]: 'Restauração da Independência',
        [`${year}-12-08`]: 'Imaculada Conceição',
        [`${year}-12-25`]: 'Natal'
    };
}

// Carregar dados de exemplo automaticamente
function carregarDadosExemplo() {
    // Verificar se já existem dados
    if (localStorage.getItem('pessoas') && localStorage.getItem('contas')) {
        return; // Já tem dados, não precisa carregar
    }

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
    
    // Garantias
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
    
    console.log('✅ Dados de exemplo carregados automaticamente!');
}

// Carregar dados automaticamente quando a aplicação iniciar
if (typeof window !== 'undefined') {
    carregarDadosExemplo();
}
