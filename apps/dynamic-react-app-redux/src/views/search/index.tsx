import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        //@ts-ignore
        searchTerm: searchTermFromUrl,
        //@ts-ignore
        sort: sortFromUrl,
        //@ts-ignore
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e: any) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    //@ts-ignore
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      //@ts-ignore
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b border-gray-500 p-7 md:border-r md:min-h-screen">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="font-semibold whitespace-nowrap">
              Поисковый запрос:
            </label>
            <TextInput
              placeholder="Искать..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Сортировать:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id="sort">
              <option value="desc">Новые</option>
              <option value="asc">Старые</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Категории:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
            >
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
          <Button type="submit" outline gradientDuoTone="purpleToPink">
            Применить фильты
          </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="p-3 mt-5 text-3xl font-semibold border-gray-500 sm:border-b ">
          Найдено:
        </h1>
        <div className="flex flex-wrap gap-4 p-7">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">Сообшения не найдены.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Загрука...</p>}
          {!loading &&
            posts &&
            posts.map((post: any) => <div key={post.id}> {post} </div>)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-lg text-teal-500 hover:underline p-7"
            >
              Показать еще
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
