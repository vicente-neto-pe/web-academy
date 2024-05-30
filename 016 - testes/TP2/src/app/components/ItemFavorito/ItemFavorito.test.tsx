import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProdutos } from "@/app/mocks/produtos";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import { FavoritosProvider, useProdutoFavorito } from "@/app/State/FavoritosProvider";
import CardProduto from "../CardProduto/CardProduto";
import ItemFavorito from "./ItemFavorito";

jest.mock("../../State/FavoritosProvider", () => ({
  ...jest.requireActual("../../State/FavoritosProvider"),
  useProdutoFavorito: jest.fn(),
}));

describe("ItemFavorito", () => {
  it("should render correctly when a product is provided", () => {
    const useProdutoFavoritoMock = useProdutoFavorito as jest.Mock;
    useProdutoFavoritoMock.mockReturnValue(false);

    const produtoMockado = mockProdutos[0];
    const { nome, preco, fotos, desconto, descricao } = produtoMockado;
    const precoComDesconto = calculaValorComPorcentagemDeDesconto(Number(preco), produtoMockado.desconto).toFixed(2);

    render(
      <table>
        <tbody>
          <ItemFavorito itemFavorito={produtoMockado} setFavoritos={() => {}} />
        </tbody>
      </table>
    );

    expect(screen.getByAltText(fotos[0].titulo)).toBeInTheDocument();
    expect(screen.getByText(`${nome}`)).toBeInTheDocument();
    expect(screen.getByText(`${descricao}`)).toBeInTheDocument();
    expect(screen.getByText(`R$ ${precoComDesconto}`)).toBeInTheDocument();
    expect(screen.getByText(`${desconto}%`)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should remove item from favorite list when click on remove button", async () => {
    const setFavoritos = jest.fn();
    const useProdutoFavoritoMock = useProdutoFavorito as jest.Mock;
    useProdutoFavoritoMock.mockReturnValue(false);
    const produtoMockado = mockProdutos[0];
    const c= <ItemFavorito itemFavorito={produtoMockado} setFavoritos={setFavoritos} />
    render(
        <table>
          <tbody>
            <ItemFavorito itemFavorito={produtoMockado} setFavoritos={setFavoritos} />
          </tbody>
        </table>
    );

    const botao = screen.getByRole("button");
    await userEvent.click(botao);
    const productInfoRow = screen.queryByAltText("Laptop");
    expect(setFavoritos).toHaveBeenCalledTimes(1);
    expect(productInfoRow).not.toBeInTheDocument();
  });
});
