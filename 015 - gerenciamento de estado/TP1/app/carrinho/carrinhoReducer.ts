type ItemCarrinho = {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
  };
  
  type Action = 
    | { type: 'aumentar_qtd'; id: string }
    | { type: 'diminuir_qtd'; id: string }
    | { type: 'remover'; id: string };
  
 export const carrinhoReducer = (state: ItemCarrinho[], action: Action): ItemCarrinho[] => {
    switch (action.type) {
      case 'aumentar_qtd':
        return state.map(item => 
          item.id === action.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      case 'diminuir_qtd':
        return state.map(item => 
          item.id === action.id && item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : item
        );
      case 'remover':
        return state.filter(item => item.id !== action.id);
      default:
        return state;
    }
  };