import TodoItem from './TodoItem';

export const Products = ({ products }: { products: [] }) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-480 to-pink-498">
        <span className="text-center w-1/8">
          <input type="checkbox" />
        </span>
        <span className="w-1/4">
          <span className="text-xs font-bold uppercase">Выбрать все</span>
        </span>
        <span className="w-2/4">
          <span className="text-xs font-bold uppercase">Наименования</span>
        </span>
      </div>
      <ul className="flex flex-col p-2 list-none gap-y-2">
        {products.length >= 0 ? (
          products.map((product: any) => {
            return <TodoItem key={product.id} todo={product} />;
          })
        ) : (
          <>Ничего не найдено...</>
        )}
      </ul>
    </div>
  );
};
