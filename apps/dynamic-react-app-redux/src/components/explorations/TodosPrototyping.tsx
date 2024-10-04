import { setFilter } from '@/store/reducers/searchFilter/filterSlice';
import { getCategories, getFilter } from '@/store/reducers/todos/selectors';
import { getProducts } from '@/store/reducers/todos/todosSlice';
import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from './Products';

//@ts-ignore
export async function loader({ params }) {
  return params.category;
}

export default function TodosPrototyping() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });
  let searchTerm;
  if (!sidebarData.searchTerm) {
    searchTerm = '';
  } else {
    searchTerm = sidebarData.searchTerm;
  }
  let sort;
  if (!sidebarData.sort) {
    sort = 'desc';
  } else {
    sort = sidebarData.sort;
  }
  let category;
  if (!sidebarData.category) {
    category = 'uncategorized';
  } else {
    category = sidebarData.category;
  }
  const { loading } = useSelector((state: any) => state.todos.loading);
  const categories = useSelector(getCategories);
  const filter = useSelector(getFilter);
  const productsForRender = !filter
    ? categories
    : categories.filter((e: any) =>
        e.title.toLowerCase().includes(filter.toLowerCase()),
      );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChange = (e: any) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
      dispatch(setFilter(sidebarData.searchTerm));
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
    //setSidebarData({ ...sidebarData });
  };

  const handleFilterInput = (event: any) => {
    const filterStr = event.target.value;
    dispatch(setFilter(filterStr));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b p-7 md:border-r md:min-h-screen">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label
              htmlFor="searchTerm"
              className="font-semibold whitespace-nowrap"
            >
              Поисковый запрос:
            </label>
            <TextInput
              placeholder="Искать..."
              id="searchTerm"
              type="text"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-semibold">
              Сортировать:
            </label>
            <Select onChange={handleChange} value={sort} id="sort">
              <option value="desc">Новые</option>
              <option value="asc">Старые</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="category" className="font-semibold">
              Категории:
            </label>
            <Select onChange={handleChange} value={category} id="category">
              <option value="uncategorized">Без категории</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="nestjs">NestJS</option>
              <option value="typescript">TypeScrip</option>
              <option value="express">Express</option>
              <option value="javascript">JavaScript</option>
              <option value="typeorm">TypeORM</option>
            </Select>
          </div>
          <Button
            id="searchFilterBtn"
            type="submit"
            outline
            gradientDuoTone="purpleToPink"
          >
            Применить фильтры
          </Button>
        </div>
      </div>
      <div className="w-full">
        <h1 className="p-3 mt-5 text-3xl font-semibold sm:border-b ">
          Найдено:
        </h1>
        <div className="flex flex-wrap gap-4 todo-list p-7">
          {!loading && categories.length === 0 && (
            <p className="text-xl">Список пуст.</p>
          )}
          {loading && <p className="text-xl">Загрука...</p>}
          {!loading && <Products products={productsForRender} />}
        </div>
      </div>
    </div>
  );
}
