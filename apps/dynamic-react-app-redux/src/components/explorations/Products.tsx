import TodoItem from './TodoItem';

export const Products = ({ products }: { products: [] }) => {
  return (
    <nav className="flex flex-col p-2 gap-y-2">
      {products.length >= 0 ? (
        products.map((product: any) => {
          return <TodoItem key={product.id} todo={product} />;
        })
      ) : (
        <>Ничего не найдено...</>
      )}
    </nav>
  );
};
