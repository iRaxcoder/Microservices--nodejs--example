import { PostCreate, PostList } from "./components/";

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
